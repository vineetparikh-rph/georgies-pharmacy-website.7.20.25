import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const transferData = req.body;
  console.log("Transfer request received:", transferData);

  // TODO: Add real processing logic here (e.g., store transfer info, fax, etc.)

  return res.status(200).json({ message: "Transfer request submitted successfully" });
}
