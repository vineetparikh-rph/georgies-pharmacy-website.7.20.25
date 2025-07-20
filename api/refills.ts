import { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed')
    return
  }

  const data = req.body
  console.log('Refill submission:', data)
  res.status(200).json({ message: 'Refill submitted successfully', data })
}
