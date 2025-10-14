import mongoose from 'mongoose';

const interviewSchema = new mongoose.Schema({
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  interviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  type: { type: String, enum: ['phone', 'video', 'in-person'], default: 'video' },
  status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' },
  notes: { type: String },
  feedback: { type: String },
  aiEnabled: { type: Boolean, default: false },
  aiQuestions: [{ type: String }],
  aiFeedback: { type: String },
}, { timestamps: true });

const Interview = mongoose.model('Interview', interviewSchema);
export default Interview;
