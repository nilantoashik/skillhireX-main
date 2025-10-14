import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  requirements: [String],
  salary: { type: String },
  type: { type: String, enum: ['full-time', 'part-time', 'contract', 'freelance'], default: 'full-time' },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }],
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);
export default Job;
