import express from 'express';
import Job from '../models/Job.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Create a new job posting (Recruiters only)
router.post('/', protect, async (req, res) => {
  try {
    // Check if user is a recruiter
    if (req.user.role !== 'recruiter') {
      return res.status(403).json({ message: 'Only recruiters can post jobs' });
    }

    const { title, company, location, type, salary, description, requirements, benefits, applicationDeadline } = req.body;

    // Validate required fields
    if (!title || !company || !location || !description) {
      return res.status(400).json({ message: 'Title, company, location, and description are required' });
    }

    const job = await Job.create({
      title,
      company,
      location,
      type: type || 'full-time',
      salary,
      description,
      requirements,
      benefits,
      applicationDeadline,
      postedBy: req.user._id,
      status: 'active'
    });

    res.status(201).json({
      _id: job._id,
      title: job.title,
      company: job.company,
      location: job.location,
      type: job.type,
      salary: job.salary,
      description: job.description,
      requirements: job.requirements,
      benefits: job.benefits,
      applicationDeadline: job.applicationDeadline,
      postedBy: job.postedBy,
      status: job.status,
      createdAt: job.createdAt
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all jobs (public)
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find({ status: 'active' }).populate('postedBy', 'name email').sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get jobs posted by the current user (Recruiters only)
router.get('/my-jobs', protect, async (req, res) => {
  try {
    if (req.user.role !== 'recruiter') {
      return res.status(403).json({ message: 'Only recruiters can view their jobs' });
    }

    const jobs = await Job.find({ postedBy: req.user._id }).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
