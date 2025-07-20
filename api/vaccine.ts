import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const vaccineData = req.body;
  console.log("Vaccine intake form received:", vaccineData);

  // TODO: Add real processing logic here (e.g., send to email, store in DB, fax, etc.)

  return res.status(200).json({ message: "Vaccine intake form submitted successfully" });
}
