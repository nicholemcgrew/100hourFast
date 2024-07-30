import express from 'express';
import FastingRecord from '../models/FastingRecord';

const router = express.Router();

// Example route to get all fasting records
router.get('/', async (req, res) => {
  try {
    const records = await FastingRecord.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add other routes as needed

export default router;
