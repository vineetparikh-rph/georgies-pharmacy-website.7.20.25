// routes/refills.ts
import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const formData = req.body;
    console.log('Refill Request:', formData);

    // Add your PDF generation or DB logic here

    res.status(200).json({ message: 'Refill request received' });
  } catch (error) {
    console.error('Error in refill route:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
