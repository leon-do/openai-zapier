import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi, ImagesResponse } from "openai";

type Response = {
  response: ImagesResponse["data"][0]["url"];
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// https://platform.openai.com/docs/api-reference/images/create
export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    if (req.headers["x-api-key"] !== process.env.X_API_KEY) return res.status(401).json({ response: "Unauthorized" });
    const response = await openai.createImage({
      prompt: req.body.message,
      n: 1,
      size: "1024x1024",
    });
    res.status(200).json({ response: response.data.data[0].url });
  } catch (error) {
    console.error("/api/image/create", error);
    res.status(500).json({ response: "error" });
  }
}
