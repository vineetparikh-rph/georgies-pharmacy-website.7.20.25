import { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed')
    return
  }

  const data = req.body
  console.log('Vaccine intake submission:', data)
  res.status(200).json({ message: 'Vaccine intake submitted successfully', data })
}
