import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { name, dateOfBirth, vaccineType, consent } = req.body;
    console.log("Vaccine Request:", { name, dateOfBirth, vaccineType, consent });
    return res.status(200).json({ message: 'Vaccine intake form submitted successfully.' });
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
