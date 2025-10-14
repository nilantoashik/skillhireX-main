import express from 'express';
import Interview from '../models/Interview.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Get all interviews
router.get('/', protect, async (req, res) => {
  try {
    const interviews = await Interview.find({})
      .populate('candidate', 'name email')
      .populate('job', 'title company')
      .populate('interviewer', 'name email');
    res.json(interviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single interview
router.get('/:id', protect, async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id)
      .populate('candidate', 'name email')
      .populate('job', 'title company')
      .populate('interviewer', 'name email');
    if (interview) {
      res.json(interview);
    } else {
      res.status(404).json({ message: 'Interview not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create interview
router.post('/', protect, async (req, res) => {
  const { candidate, job, date, time, type, notes, aiEnabled } = req.body;

  try {
    const interview = await Interview.create({
      candidate,
      job,
      interviewer: req.user._id,
      date,
      time,
      type,
      notes,
      aiEnabled,
    });

    res.status(201).json(interview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update interview
router.put('/:id', protect, async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);

    if (interview) {
      interview.date = req.body.date || interview.date;
      interview.time = req.body.time || interview.time;
      interview.type = req.body.type || interview.type;
      interview.status = req.body.status || interview.status;
      interview.notes = req.body.notes || interview.notes;
      interview.feedback = req.body.feedback || interview.feedback;

      const updatedInterview = await interview.save();
      res.json(updatedInterview);
    } else {
      res.status(404).json({ message: 'Interview not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete interview
router.delete('/:id', protect, async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);

    if (interview) {
      await interview.remove();
      res.json({ message: 'Interview removed' });
    } else {
      res.status(404).json({ message: 'Interview not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Generate AI questions for interview
router.post('/:id/generate-questions', protect, async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);
    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    // Mock AI question generation using Apriora AI
    const questions = [
      "Tell me about yourself and your background.",
      "What interests you about this position?",
      "Describe a challenging project you've worked on.",
      "Where do you see yourself in 5 years?"
    ];

    interview.aiQuestions = questions;
    await interview.save();

    res.json({ questions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Analyze candidate response
router.post('/:id/analyze-response', protect, async (req, res) => {
  try {
    const { question, response } = req.body;
    const interview = await Interview.findById(req.params.id);
    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }

    // Mock AI analysis using Apriora AI
    const feedback = `Response to "${question}": ${response.length > 50 ? 'Detailed and comprehensive answer.' : 'Brief response, could be more detailed.'} Score: ${Math.floor(Math.random() * 5) + 6}/10`;

    interview.aiFeedback = feedback;
    await interview.save();

    res.json({ feedback });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
