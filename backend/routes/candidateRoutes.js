import express from 'express';
import Candidate from '../models/Candidate.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Get all candidates
router.get('/', protect, async (req, res) => {
  try {
    const candidates = await Candidate.find({}).populate('user', 'name email');
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single candidate
router.get('/:id', protect, async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id).populate('user', 'name email');
    if (candidate) {
      res.json(candidate);
    } else {
      res.status(404).json({ message: 'Candidate not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create candidate profile
router.post('/', protect, async (req, res) => {
  const { name, email, phone, resume, skills, experience, education, location } = req.body;

  try {
    const candidate = await Candidate.create({
      name,
      email,
      phone,
      resume,
      skills,
      experience,
      education,
      location,
      user: req.user._id,
    });

    res.status(201).json(candidate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update candidate profile
router.put('/:id', protect, async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);

    if (candidate) {
      if (candidate.user.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Not authorized' });
      }

      candidate.name = req.body.name || candidate.name;
      candidate.email = req.body.email || candidate.email;
      candidate.phone = req.body.phone || candidate.phone;
      candidate.resume = req.body.resume || candidate.resume;
      candidate.skills = req.body.skills || candidate.skills;
      candidate.experience = req.body.experience || candidate.experience;
      candidate.education = req.body.education || candidate.education;
      candidate.location = req.body.location || candidate.location;

      const updatedCandidate = await candidate.save();
      res.json(updatedCandidate);
    } else {
      res.status(404).json({ message: 'Candidate not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete candidate profile
router.delete('/:id', protect, async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);

    if (candidate) {
      if (candidate.user.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Not authorized' });
      }

      await candidate.remove();
      res.json({ message: 'Candidate removed' });
    } else {
      res.status(404).json({ message: 'Candidate not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
