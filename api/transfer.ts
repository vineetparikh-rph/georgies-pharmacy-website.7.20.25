import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { name, previousPharmacy, medications } = req.body;
    console.log("Transfer Request:", { name, previousPharmacy, medications });
    return res.status(200).json({ message: 'Transfer submitted successfully.' });
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
