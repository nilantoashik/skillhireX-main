import React, { useState } from "react";
import { Search, Filter, MapPin, Clock, Briefcase, Star, Brain, Video, FileText, Trophy } from "lucide-react";

export default function AIHiringSystem() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      type: "Full-time",
      match: 92,
      salary: "$80k - $120k",
      skills: ["React", "TypeScript", "Node.js", "GraphQL"],
      aiAnalysis: {
        strengthMatch: ["React Expertise", "Problem Solving", "System Design"],
        skillGaps: ["GraphQL", "Testing"],
        interviewSteps: 3,
        estimatedTime: "45 min"
      },
      posted: "2 days ago",
      applicants: 47
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "InnoSoft",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      match: 87,
      salary: "৳60,000 - ৳90,000",
      skills: ["Python", "Django", "PostgreSQL", "AWS"],
      aiAnalysis: {
        strengthMatch: ["Python Proficiency", "Database Design", "API Development"],
        skillGaps: ["AWS", "Microservices"],
        interviewSteps: 4,
        estimatedTime: "60 min"
      },
      posted: "1 day ago",
      applicants: 23
    },
    {
      id: 3,
      title: "AI/ML Engineer",
      company: "AI Labs",
      location: "Remote",
      type: "Contract",
      match: 95,
      salary: "$100k - $150k",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps"],
      aiAnalysis: {
        strengthMatch: ["Machine Learning", "Data Analysis", "Python"],
        skillGaps: ["MLOps", "Cloud Deployment"],
        interviewSteps: 5,
        estimatedTime: "75 min"
      },
      posted: "3 hours ago",
      applicants: 12
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Hybrid - Dhaka",
      type: "Full-time",
      match: 78,
      salary: "৳70,000 - ৳110,000",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
      aiAnalysis: {
        strengthMatch: ["Docker", "Linux Administration"],
        skillGaps: ["Kubernetes", "Terraform", "Monitoring"],
        interviewSteps: 4,
        estimatedTime: "50 min"
      },
      posted: "5 days ago",
      applicants: 31
    }
  ];

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getMatchColor = (match) => {
    if (match >= 90) return "text-green-600 bg-green-50";
    if (match >= 80) return "text-blue-600 bg-blue-50";
    if (match >= 70) return "text-yellow-600 bg-yellow-50";
    return "text-gray-600 bg-gray-50";
  };

  const JobCard = ({ job }) => (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-indigo-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
          <p className="text-gray-600 font-medium">{job.company}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getMatchColor(job.match)}`}>
          {job.match}% Match
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {job.location}
        </div>
        <div className="flex items-center gap-1">
          <Briefcase className="w-4 h-4" />
          {job.type}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {job.posted}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-900 mb-2">{job.salary}</p>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="w-4 h-4 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-900">AI Analysis</span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <span className="text-green-700 font-medium">Strengths:</span>
            <p className="text-gray-600 mt-1">{job.aiAnalysis.strengthMatch.slice(0, 2).join(", ")}</p>
          </div>
          <div>
            <span className="text-amber-700 font-medium">To Improve:</span>
            <p className="text-gray-600 mt-1">{job.aiAnalysis.skillGaps.join(", ")}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-3">
          <span>{job.aiAnalysis.interviewSteps} Steps</span>
          <span>~{job.aiAnalysis.estimatedTime}</span>
        </div>
        <span>{job.applicants} applicants</span>
      </div>

      <div className="flex gap-2">
        <button 
          onClick={() => setSelectedJob(job)}
          className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
        >
          Start AI Interview
        </button>
        <button className="px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg text-sm font-medium transition-colors duration-200">
          Save Job
        </button>
      </div>
    </div>
  );

  const InterviewModal = ({ job, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">AI Interview Process</h2>
              <p className="text-gray-600">{job.title} at {job.company}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              ×
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-indigo-600" />
              <span className="font-semibold text-indigo-900">Match Score: {job.match}%</span>
            </div>
            <p className="text-sm text-indigo-700">
              Our AI has analyzed your profile and identified you as a strong candidate for this role.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Video className="w-5 h-5 text-green-600" />
                <span className="font-medium">Step 1: Video Introduction</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">5 min</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Record a brief introduction about yourself and your interest in this role.
              </p>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium">
                Start Recording
              </button>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Step 2: Technical Assessment</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">20 min</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Complete coding challenges tailored to {job.skills.slice(0, 2).join(" and ")} skills.
              </p>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium">
                Begin Assessment
              </button>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Step 3: AI Behavioral Interview</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">15 min</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Engage in a conversation with our AI interviewer about your experience and problem-solving approach.
              </p>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium">
                Start Interview
              </button>
            </div>

            {job.aiAnalysis.interviewSteps > 3 && (
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium">Step 4: System Design Challenge</span>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">25 min</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Design a system architecture for a real-world scenario relevant to the role.
                </p>
                <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg text-sm font-medium">
                  Begin Design
                </button>
              </div>
            )}
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">What to Expect:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Real-time AI feedback and suggestions</li>
              <li>• Personalized questions based on your background</li>
              <li>• Instant scoring and detailed performance report</li>
              <li>• Direct submission to the hiring team upon completion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI-Powered Job Matching</h1>
          <p className="text-gray-600">Find your perfect role with intelligent skill matching and automated interviews</p>
        </div>

        <div className="mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs, companies, or skills..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredJobs.length} Jobs Found
          </h2>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>90%+ Match</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>80-89% Match</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>70-79% Match</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {selectedJob && (
          <InterviewModal 
            job={selectedJob} 
            onClose={() => setSelectedJob(null)} 
          />
        )}
      </div>
    </div>
  );
}