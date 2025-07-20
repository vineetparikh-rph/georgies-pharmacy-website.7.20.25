import { type Request, type Response, Router } from 'express';
import { transferToPdf } from '../../utils/pdf/transfer_pdf';

const router = Router();

router.post('/api/transfer', async (req: Request, res: Response) => {
  try {
    await transferToPdf(req.body);
    res.json({ success: true });
  } catch (err) {
    console.error('Transfer Error:', err);
    res.status(500).json({ success: false, error: 'Transfer processing failed.' });
  }
});

export default router;
