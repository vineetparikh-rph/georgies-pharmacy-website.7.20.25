import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('Refill request received:', data);

    // TODO: Add processing logic (e.g., Save to DB, send email, etc.)
    return res.status(200).json({ message: 'Refill request received', data });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
