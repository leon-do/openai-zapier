import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi, ChatCompletionResponseMessage } from "openai";

type Response = {
  response: ChatCompletionResponseMessage["content"];
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// https://platform.openai.com/docs/api-reference/chat
export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    if (req.headers["x-api-key"] !== process.env.X_API_KEY) return res.status(401).json({ response: "Unauthorized" });
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
    });
    const text = response.data.choices[0].message?.content ? response.data.choices[0].message.content.replace(/(\r\n|\n|\r)/gm, "") : "error";
    res.status(200).json({ response: text });
  } catch (error) {
    console.error("/api/chat", error);
    res.status(500).json({ response: "error" });
  }
}
