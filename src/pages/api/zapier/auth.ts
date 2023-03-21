import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
  success: boolean;
};

// https://platform.zapier.com/docs/apikey
export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    console.log("/zapier/auth");
    if (req.headers.api_key === process.env.X_API_KEY) return res.status(200).json({ success: true });
    return res.status(400).json({ success: false });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false });
  }
}
