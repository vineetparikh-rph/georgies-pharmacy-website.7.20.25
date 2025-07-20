import { type Request, type Response, Router } from 'express';
import { vaccineToPdf } from '../../utils/pdf/vaccine_pdf';

const router = Router();

router.post('/api/vaccine', async (req: Request, res: Response) => {
  try {
    await vaccineToPdf(req.body);
    res.json({ success: true });
  } catch (err) {
    console.error('Vaccine Error:', err);
    res.status(500).json({ success: false, error: 'Vaccine processing failed.' });
  }
});

export default router;
