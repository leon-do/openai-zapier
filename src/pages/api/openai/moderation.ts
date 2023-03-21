import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi, CreateModerationResponse } from "openai";

type Response = {
  response: CreateModerationResponse["results"][0] | string;
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// https://platform.openai.com/docs/api-reference/moderations
export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    const response = await openai.createModeration({
      input: req.body.message,
    });
    console.log(response.data.results);
    res.status(200).json({ response: response.data.results[0] });
  } catch (error) {
    console.error("/api/moderation", error);
    res.status(500).json({ response: "error" });
  }
}
