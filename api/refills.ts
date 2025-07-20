import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { name, dateOfBirth, phone, medications } = req.body;
    console.log("Refill Request:", { name, dateOfBirth, phone, medications });
    return res.status(200).json({ message: 'Refill submitted successfully.' });
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
