// routes/vaccine.ts
import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const formData = req.body;
    console.log('Vaccine Consent Form:', formData);

    // Add your faxing/email logic here

    res.status(200).json({ message: 'Vaccine form submitted successfully' });
  } catch (error) {
    console.error('Error in vaccine route:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
