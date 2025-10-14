import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';
import passport from '../config/passport.js';
import { generateToken } from '../config/passport.js';

const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ name, email, password, role });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      });

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token,
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Google OAuth routes
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/signin' }),
  (req, res) => {
    const token = generateToken(req.user);
    // Redirect to frontend with token
    res.redirect(`http://localhost:3000/oauth/callback?token=${token}&user=${encodeURIComponent(JSON.stringify({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
      profilePicture: req.user.profilePicture,
      githubLink: req.user.githubLink,
      linkedinLink: req.user.linkedinLink,
      twitterLink: req.user.twitterLink
    }))}`);
  }
);

// GitHub OAuth routes
router.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/signin' }),
  (req, res) => {
    const token = generateToken(req.user);
    // Redirect to frontend with token
    res.redirect(`http://localhost:3000/oauth/callback?token=${token}&user=${encodeURIComponent(JSON.stringify({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
      profilePicture: req.user.profilePicture,
      githubLink: req.user.githubLink,
      linkedinLink: req.user.linkedinLink,
      twitterLink: req.user.twitterLink
    }))}`);
  }
);

// Get user profile
router.get('/profile', protect, async (req, res) => {
  res.json(req.user);
});

// Update user profile
router.put('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.profilePicture = req.body.profilePicture || user.profilePicture;
      user.githubLink = req.body.githubLink || user.githubLink;
      user.linkedinLink = req.body.linkedinLink || user.linkedinLink;
      user.twitterLink = req.body.twitterLink || user.twitterLink;
      user.bio = req.body.bio || user.bio;
      user.location = req.body.location || user.location;
      user.phone = req.body.phone || user.phone;
      user.skills = req.body.skills || user.skills;
      user.experience = req.body.experience || user.experience;
      user.resume = req.body.resume || user.resume;

      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        profilePicture: updatedUser.profilePicture,
        githubLink: updatedUser.githubLink,
        linkedinLink: updatedUser.linkedinLink,
        twitterLink: updatedUser.twitterLink,
        bio: updatedUser.bio,
        location: updatedUser.location,
        phone: updatedUser.phone,
        skills: updatedUser.skills,
        experience: updatedUser.experience,
        resume: updatedUser.resume,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
