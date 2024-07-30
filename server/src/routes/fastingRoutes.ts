import { Router } from 'express';
import FastingRecord from '../models/FastingRecord';

const router = Router();

// Get all fasting records
router.get('/', async (req, res) => {
  try {
    const records = await FastingRecord.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch fasting records' });
  }
});

// Create a new fasting record
router.post('/', async (req, res) => {
  try {
    const { start, end, userId } = req.body;
    const record = new FastingRecord({ start, end, userId });
    await record.save();
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create fasting record' });
  }
});

export default router;
