import express from 'express';
import Application from '../models/Application.js';
import Job from '../models/Job.js';
import Candidate from '../models/Candidate.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Get all applications
router.get('/', protect, async (req, res) => {
  try {
    const applications = await Application.find({})
      .populate('candidate', 'name email')
      .populate('job', 'title company');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get applications for a specific job
router.get('/job/:jobId', protect, async (req, res) => {
  try {
    const applications = await Application.find({ job: req.params.jobId })
      .populate('candidate', 'name email skills')
      .populate('job', 'title company');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get applications for a specific candidate
router.get('/candidate/:candidateId', protect, async (req, res) => {
  try {
    const applications = await Application.find({ candidate: req.params.candidateId })
      .populate('candidate', 'name email')
      .populate('job', 'title company');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single application
router.get('/:id', protect, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)
      .populate('candidate', 'name email')
      .populate('job', 'title company');
    if (application) {
      res.json(application);
    } else {
      res.status(404).json({ message: 'Application not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create application
router.post('/', protect, async (req, res) => {
  const { job, coverLetter, resume } = req.body;

  try {
    // Find candidate profile for the user
    const candidate = await Candidate.findOne({ user: req.user._id });
    if (!candidate) {
      return res.status(400).json({ message: 'Candidate profile not found' });
    }

    const application = await Application.create({
      candidate: candidate._id,
      job,
      coverLetter,
      resume,
    });

    // Add application to job's applications array
    await Job.findByIdAndUpdate(job, { $push: { applications: application._id } });

    // Add application to candidate's applications array
    await Candidate.findByIdAndUpdate(candidate._id, { $push: { applications: application._id } });

    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update application status
router.put('/:id', protect, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (application) {
      application.status = req.body.status || application.status;

      const updatedApplication = await application.save();
      res.json(updatedApplication);
    } else {
      res.status(404).json({ message: 'Application not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete application
router.delete('/:id', protect, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (application) {
      // Remove application from job's applications array
      await Job.findByIdAndUpdate(application.job, { $pull: { applications: application._id } });

      // Remove application from candidate's applications array
      await Candidate.findByIdAndUpdate(application.candidate, { $pull: { applications: application._id } });

      await application.remove();
      res.json({ message: 'Application removed' });
    } else {
      res.status(404).json({ message: 'Application not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
