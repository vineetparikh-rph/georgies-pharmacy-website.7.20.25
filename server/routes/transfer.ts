// routes/transfer.ts
import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const formData = req.body;
    console.log('Transfer Request:', formData);

    // Add processing logic here

    res.status(200).json({ message: 'Transfer request received' });
  } catch (error) {
    console.error('Error in transfer route:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
