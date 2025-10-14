import React, { useState } from 'react';
import { User, Brain, MessageSquare, BarChart3, Clock, CheckCircle, Star, Filter, Search, Calendar, Video, FileText, Download } from 'lucide-react';

export default function AIHiringSystem() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const candidates = [
    {
      id: 1,
      name: "Ayesha Rahman",
      email: "ayesha@email.com",
      skills: ["React", "Node.js", "SQL", "TypeScript"],
      experience: "3 years",
      aiMatch: 92,
      status: "completed",
      interviewScore: 88,
      technicalScore: 90,
      communicationScore: 85,
      avatar: "AR",
      appliedFor: "Frontend Developer",
      interviewDate: "2025-09-08",
      strengths: ["Problem-solving", "Clean Code", "Team Collaboration"],
      concerns: ["Limited backend experience"],
      aiInsights: "Strong React fundamentals with excellent problem-solving approach. Shows potential for senior roles.",
      codingChallenges: [
        { name: "Component Optimization", score: 92, time: "28 min" },
        { name: "API Integration", score: 85, time: "35 min" }
      ]
    },
    {
      id: 2,
      name: "Tanvir Hasan",
      email: "tanvir@email.com",
      skills: ["Python", "Django", "ML", "PostgreSQL"],
      experience: "5 years",
      aiMatch: 96,
      status: "in-progress",
      interviewScore: null,
      technicalScore: null,
      communicationScore: null,
      avatar: "TH",
      appliedFor: "ML Engineer",
      interviewDate: "2025-09-10",
      strengths: ["Machine Learning", "System Architecture"],
      concerns: [],
      aiInsights: "Exceptional ML background with strong mathematical foundations.",
      codingChallenges: [
        { name: "Data Pipeline", score: 95, time: "42 min" }
      ]
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      email: "nusrat@email.com",
      skills: ["UI/UX", "Figma", "Tailwind", "React"],
      experience: "4 years",
      aiMatch: 89,
      status: "scheduled",
      interviewScore: null,
      technicalScore: null,
      communicationScore: null,
      avatar: "NJ",
      appliedFor: "UI/UX Designer",
      interviewDate: "2025-09-12",
      strengths: ["Visual Design", "User Research"],
      concerns: [],
      aiInsights: "Creative designer with strong technical implementation skills.",
      codingChallenges: []
    }
  ];

  const interviewQuestions = [
    {
      category: "Technical",
      question: "Explain the difference between REST and GraphQL APIs",
      aiGenerated: true,
      difficulty: "Medium"
    },
    {
      category: "Problem Solving",
      question: "How would you optimize a slow-loading React application?",
      aiGenerated: true,
      difficulty: "Hard"
    },
    {
      category: "Behavioral",
      question: "Describe a challenging project and how you overcame obstacles",
      aiGenerated: false,
      difficulty: "Easy"
    }
  ];

  const DashboardView = () => (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Candidates</p>
              <p className="text-3xl font-bold">127</p>
            </div>
            <User className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Interviews Completed</p>
              <p className="text-3xl font-bold">89</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">AI Match Rate</p>
              <p className="text-3xl font-bold">91%</p>
            </div>
            <Brain className="w-8 h-8 text-purple-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Avg Interview Time</p>
              <p className="text-3xl font-bold">42min</p>
            </div>
            <Clock className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-indigo-600" />
          AI Interview Assistant
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors">
            <MessageSquare className="w-6 h-6 text-indigo-600 mb-2" />
            <p className="font-medium text-sm">Generate Questions</p>
            <p className="text-xs text-gray-600">AI-powered interview questions</p>
          </button>
          <button className="p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
            <BarChart3 className="w-6 h-6 text-green-600 mb-2" />
            <p className="font-medium text-sm">Analyze Responses</p>
            <p className="text-xs text-gray-600">Real-time performance insights</p>
          </button>
          <button className="p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
            <FileText className="w-6 h-6 text-purple-600 mb-2" />
            <p className="font-medium text-sm">Generate Report</p>
            <p className="text-xs text-gray-600">Comprehensive candidate evaluation</p>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Recent Interview Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">AR</div>
              <div>
                <p className="font-medium text-sm">Ayesha Rahman completed interview</p>
                <p className="text-xs text-gray-600">Frontend Developer • 88% score</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">TH</div>
              <div>
                <p className="font-medium text-sm">Tanvir Hasan started interview</p>
                <p className="text-xs text-gray-600">ML Engineer • In progress</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  const CandidatesView = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search candidates..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Candidates Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {candidate.avatar}
                </div>
                <div>
                  <h3 className="font-semibold">{candidate.name}</h3>
                  <p className="text-sm text-gray-600">{candidate.appliedFor}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                candidate.status === 'completed' ? 'bg-green-100 text-green-800' :
                candidate.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {candidate.status}
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">AI Match</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{width: `${candidate.aiMatch}%`}}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-indigo-600">{candidate.aiMatch}%</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-1">Skills:</p>
                <div className="flex flex-wrap gap-1">
                  {candidate.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                  {candidate.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{candidate.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {candidate.interviewScore && (
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-600">Score:</span>
                  <span className="font-semibold text-green-600">{candidate.interviewScore}%</span>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setSelectedCandidate(candidate)}
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const InterviewsView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-600" />
          Upcoming Interviews
        </h3>
        <div className="space-y-4">
          {candidates.filter(c => c.status === 'scheduled' || c.status === 'in-progress').map((candidate) => (
            <div key={candidate.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {candidate.avatar}
                </div>
                <div>
                  <p className="font-medium">{candidate.name}</p>
                  <p className="text-sm text-gray-600">{candidate.appliedFor} • {candidate.interviewDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">
                  <Video className="w-4 h-4" />
                  {candidate.status === 'in-progress' ? 'Join' : 'Start'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">AI-Generated Interview Questions</h3>
        <div className="space-y-4">
          {interviewQuestions.map((q, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  q.category === 'Technical' ? 'bg-blue-100 text-blue-800' :
                  q.category === 'Problem Solving' ? 'bg-purple-100 text-purple-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {q.category}
                </span>
                <div className="flex items-center gap-2">
                  {q.aiGenerated && <Brain className="w-4 h-4 text-indigo-600" />}
                  <span className="text-xs text-gray-500">{q.difficulty}</span>
                </div>
              </div>
              <p className="text-sm">{q.question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CandidateModal = ({ candidate, onClose }) => {
    if (!candidate) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                  {candidate.avatar}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{candidate.name}</h2>
                  <p className="text-gray-600">{candidate.email}</p>
                  <p className="text-sm text-indigo-600">{candidate.appliedFor}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* AI Match & Scores */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-sm text-indigo-600 font-medium">AI Match</p>
                <p className="text-2xl font-bold text-indigo-800">{candidate.aiMatch}%</p>
              </div>
              {candidate.interviewScore && (
                <>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-600 font-medium">Overall Score</p>
                    <p className="text-2xl font-bold text-green-800">{candidate.interviewScore}%</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-600 font-medium">Technical</p>
                    <p className="text-2xl font-bold text-blue-800">{candidate.technicalScore}%</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-600 font-medium">Communication</p>
                    <p className="text-2xl font-bold text-purple-800">{candidate.communicationScore}%</p>
                  </div>
                </>
              )}
            </div>

            {/* Skills & Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Experience</h4>
                <p className="text-gray-700">{candidate.experience}</p>
              </div>
            </div>

            {/* AI Insights */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-indigo-600" />
                AI Insights
              </h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-4">{candidate.aiInsights}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-green-700 mb-2">Strengths:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {candidate.strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  {candidate.concerns.length > 0 && (
                    <div>
                      <p className="font-medium text-orange-700 mb-2">Areas for Growth:</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {candidate.concerns.map((concern, index) => (
                          <li key={index}>{concern}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Coding Challenges */}
            {candidate.codingChallenges.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">Coding Challenges</h4>
                <div className="space-y-3">
                  {candidate.codingChallenges.map((challenge, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{challenge.name}</p>
                        <p className="text-sm text-gray-600">Completed in {challenge.time}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{challenge.score}%</p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(challenge.score/20) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t">
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Video className="w-4 h-4" />
                Schedule Interview
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-4 h-4" />
                Download Report
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <MessageSquare className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold">AI Hiring System</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <MessageSquare className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">HR</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'candidates', label: 'Candidates', icon: User },
              { id: 'interviews', label: 'Interviews', icon: Video }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-1 py-4 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <DashboardView />}
        {activeTab === 'candidates' && <CandidatesView />}
        {activeTab === 'interviews' && <InterviewsView />}
      </main>

      {/* Candidate Detail Modal */}
      <CandidateModal 
        candidate={selectedCandidate} 
        onClose={() => setSelectedCandidate(null)} 
      />
    </div>
  );
}