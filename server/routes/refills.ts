import { type Request, type Response, Router } from 'express';
import { refillToPdf } from '../../utils/pdf/refill_pdf';

const router = Router();

router.post('/api/refill', async (req: Request, res: Response) => {
  try {
    await refillToPdf(req.body);
    res.json({ success: true });
  } catch (err) {
    console.error('Refill Error:', err);
    res.status(500).json({ success: false, error: 'Refill processing failed.' });
  }
});

export default router;
