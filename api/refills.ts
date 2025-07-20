import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const refillData = req.body;
  console.log("Refill request received:", refillData);

  // TODO: Add real processing logic here (e.g., saving to DB, emailing, etc.)

  return res.status(200).json({ message: "Refill request submitted successfully" });
}
