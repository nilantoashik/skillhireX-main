import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  resume: { type: String }, // URL to resume file
  skills: [String],
  experience: { type: String },
  education: { type: String },
  location: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }],
}, { timestamps: true });

const Candidate = mongoose.model('Candidate', candidateSchema);
export default Candidate;
