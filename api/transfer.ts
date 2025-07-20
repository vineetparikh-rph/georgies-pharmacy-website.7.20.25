import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('Transfer request received:', data);

    // TODO: Add processing logic
    return res.status(200).json({ message: 'Transfer request received', data });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
