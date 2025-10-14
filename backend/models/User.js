import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: function() { return !this.googleId && !this.githubId; } },
  googleId: { type: String, sparse: true },
  githubId: { type: String, sparse: true },
  role: { type: String, enum: ['admin', 'recruiter', 'candidate'], default: 'candidate' },
  profilePicture: { type: String, default: '' },
  githubLink: { type: String, default: '' },
  linkedinLink: { type: String, default: '' },
  twitterLink: { type: String, default: '' },
  bio: { type: String, default: '' },
  location: { type: String, default: '' },
  phone: { type: String, default: '' },
  skills: [{ type: String }],
  experience: { type: String, default: '' },
  resume: { type: String, default: '' }, // URL to resume file
}, { timestamps: true });

// Password hashing middleware
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Password comparison method
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
