import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  status: { type: String, enum: ['pending', 'reviewed', 'accepted', 'rejected'], default: 'pending' },
  appliedDate: { type: Date, default: Date.now },
  coverLetter: { type: String },
  resume: { type: String }, // URL to resume file
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);
export default Application;
