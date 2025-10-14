
import mongoose from 'mongoose';
import User from '../models/User.js';
import Job from '../models/Job.js';
import Candidate from '../models/Candidate.js';
import dotenv from 'dotenv';

dotenv.config();

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: '123456',
    role: 'admin',
  },
  {
    name: 'John Recruiter',
    email: 'john@example.com',
    password: '123456',
    role: 'recruiter',
  },
  {
    name: 'Jane Candidate',
    email: 'jane@example.com',
    password: '123456',
    role: 'candidate',
  },
];

const jobs = [
  {
    title: 'Senior React Developer',
    company: 'Tech Corp',
    location: 'New York, NY',
    description: 'We are looking for a senior React developer to join our team.',
    requirements: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
    salary: '$100,000 - $120,000',
    type: 'full-time',
  },
  {
    title: 'Full Stack Developer',
    company: 'Startup Inc',
    location: 'San Francisco, CA',
    description: 'Join our fast-growing startup as a full stack developer.',
    requirements: ['React', 'Node.js', 'Express', 'MongoDB'],
    salary: '$90,000 - $110,000',
    type: 'full-time',
  },
];

const candidates = [
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '123-456-7890',
    skills: ['React', 'JavaScript', 'Node.js'],
    experience: '3 years',
    education: 'Bachelor of Computer Science',
    location: 'New York, NY',
  },
];

const importData = async () => {
  try {
    await User.deleteMany();
    await Job.deleteMany();
    await Candidate.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const recruiterUser = createdUsers[1]._id;
    const candidateUser = createdUsers[2]._id;

    const sampleJobs = jobs.map((job) => ({
      ...job,
      postedBy: recruiterUser,
    }));

    const createdJobs = await Job.insertMany(sampleJobs);

    const sampleCandidates = candidates.map((candidate) => ({
      ...candidate,
      user: candidateUser,
    }));

    await Candidate.insertMany(sampleCandidates);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Job.deleteMany();
    await Candidate.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
