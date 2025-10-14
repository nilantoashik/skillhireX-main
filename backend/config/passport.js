import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/api/users/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const existingUser = await User.findOne({ email: profile.emails[0].value });
    if (existingUser) {
      return done(null, existingUser);
    }
    const newUser = new User({
      name: profile.displayName,
      email: profile.emails[0].value,
      profilePicture: profile.photos[0].value,
      googleId: profile.id,
      role: 'candidate',
      // No password since OAuth
    });
    await newUser.save();
    done(null, newUser);
  } catch (err) {
    done(err, null);
  }
}));

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: '/api/users/auth/github/callback',
  scope: ['user:email'],
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // GitHub may not provide email in profile.emails, so fetch primary email if needed
    const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null;
    if (!email) {
      return done(new Error('No email found from GitHub'), null);
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return done(null, existingUser);
    }
    const newUser = new User({
      name: profile.displayName || profile.username,
      email,
      profilePicture: profile.photos[0].value,
      role: 'candidate',
    });
    await newUser.save();
    done(null, newUser);
  } catch (err) {
    done(err, null);
  }
}));

export const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

export default passport;
