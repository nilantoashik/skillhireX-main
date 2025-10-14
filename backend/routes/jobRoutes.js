import express from 'express';
import Job from '../models/Job.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find({}).populate('postedBy', 'name email');
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single job
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate('postedBy', 'name email');
    if (job) {
      res.json(job);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create job
router.post('/', protect, async (req, res) => {
  const { title, company, location, description, requirements, salary, type } = req.body;

  try {
    const job = await Job.create({
      title,
      company,
      location,
      description,
      requirements,
      salary,
      type,
      postedBy: req.user._id,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update job
router.put('/:id', protect, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (job) {
      if (job.postedBy.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Not authorized' });
      }

      job.title = req.body.title || job.title;
      job.company = req.body.company || job.company;
      job.location = req.body.location || job.location;
      job.description = req.body.description || job.description;
      job.requirements = req.body.requirements || job.requirements;
      job.salary = req.body.salary || job.salary;
      job.type = req.body.type || job.type;

      const updatedJob = await job.save();
      res.json(updatedJob);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete job
router.delete('/:id', protect, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (job) {
      if (job.postedBy.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Not authorized' });
      }

      await job.remove();
      res.json({ message: 'Job removed' });
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
