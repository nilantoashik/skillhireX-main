import React, { useState } from 'react';
import { Calendar, Clock, Video, MapPin, Brain, Users, TrendingUp, Star, ChevronRight, Plus, Filter, Search } from 'lucide-react';

export default function AIInterviewSystem() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedInterview, setSelectedInterview] = useState(null);

  const interviews = [
    {
      id: 1,
      candidate: "Ayesha Rahman",
      position: "Senior React Developer",
      date: "Sep 15, 2025",
      time: "10:00 - 10:30",
      mode: "Zoom",
      status: "upcoming",
      aiScore: null,
      skills: ["React", "TypeScript", "Node.js"],
      experience: "5 years",
      avatar: "AR"
    },
    {
      id: 2,
      candidate: "Tanvir Hasan",
      position: "UX Designer",
      date: "Sep 17, 2025",
      time: "14:00 - 14:30",
      mode: "In-person",
      status: "upcoming",
      aiScore: null,
      skills: ["Figma", "User Research", "Prototyping"],
      experience: "3 years",
      avatar: "TH"
    },
    {
      id: 3,
      candidate: "Sarah Chen",
      position: "Data Scientist",
      date: "Sep 12, 2025",
      time: "15:00 - 15:45",
      mode: "Zoom",
      status: "completed",
      aiScore: 8.7,
      skills: ["Python", "Machine Learning", "SQL"],
      experience: "4 years",
      avatar: "SC"
    },
    {
      id: 4,
      candidate: "Ahmed Ali",
      position: "DevOps Engineer",
      date: "Sep 10, 2025",
      time: "11:00 - 11:30",
      mode: "Zoom",
      status: "completed",
      aiScore: 9.2,
      skills: ["AWS", "Docker", "Kubernetes"],
      experience: "6 years",
      avatar: "AA"
    }
  ];

  const aiInsights = {
    totalInterviews: 24,
    avgScore: 7.8,
    topSkills: ["React", "Python", "AWS", "Machine Learning"],
    successRate: 73
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Total Interviews</p>
              <p className="text-3xl font-bold">{aiInsights.totalInterviews}</p>
            </div>
            <Users className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Average AI Score</p>
              <p className="text-3xl font-bold">{aiInsights.avgScore}/10</p>
            </div>
            <Brain className="h-8 w-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Success Rate</p>
              <p className="text-3xl font-bold">{aiInsights.successRate}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Active Positions</p>
              <p className="text-3xl font-bold">12</p>
            </div>
            <Star className="h-8 w-8 text-orange-200" />
          </div>
        </div>
      </div>

      {/* AI Insights Panel */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Brain className="h-6 w-6 text-blue-500 mr-2" />
          AI-Powered Insights
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Top Skills in Demand</h4>
            <div className="space-y-2">
              {aiInsights.topSkills.map((skill, index) => (
                <div key={skill} className="flex items-center justify-between">
                  <span className="text-gray-600">{skill}</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${100 - index * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Recent Performance Trends</h4>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">
                AI assessment accuracy has improved by <strong>23%</strong> this month
              </p>
              <p className="text-sm text-gray-600">
                Average interview completion rate: <strong>94%</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInterviews = () => (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Interview Management</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search candidates..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-4 w-4" />
            Schedule Interview
          </button>
        </div>
      </div>

      {/* Interviews Grid */}
      <div className="grid gap-4">
        {interviews.map((interview) => (
          <div key={interview.id} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {interview.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{interview.candidate}</h3>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      interview.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {interview.status}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">{interview.position}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {interview.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {interview.time}
                    </div>
                    <div className="flex items-center gap-1">
                      {interview.mode === 'Zoom' ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                      {interview.mode}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Skills:</span>
                    <div className="flex gap-2">
                      {interview.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {interview.aiScore && (
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${
                      interview.aiScore >= 8 ? 'text-green-600' : 
                      interview.aiScore >= 6 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {interview.aiScore}
                    </div>
                    <div className="text-xs text-gray-500">AI Score</div>
                  </div>
                )}
                <button 
                  onClick={() => setSelectedInterview(interview)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAIAnalysis = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 flex items-center">
        <Brain className="h-8 w-8 text-purple-600 mr-3" />
        AI Analysis & Recommendations
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Skill Assessment Accuracy</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Technical Skills</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-5/6"></div>
                </div>
                <span className="text-sm font-medium">94%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Communication</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                </div>
                <span className="text-sm font-medium">87%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Problem Solving</span>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-11/12"></div>
                </div>
                <span className="text-sm font-medium">91%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Hiring Recommendations</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-green-900">Ahmed Ali - DevOps Engineer</p>
                <p className="text-xs text-green-700">Strong recommendation (9.2/10)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-yellow-900">Sarah Chen - Data Scientist</p>
                <p className="text-xs text-yellow-700">Moderate recommendation (8.7/10)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-blue-900">2 candidates pending analysis</p>
                <p className="text-xs text-blue-700">Interviews scheduled this week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">AI Interview Features</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-medium mb-2">Real-time Analysis</h4>
            <p className="text-sm text-gray-600">AI analyzes responses, tone, and technical accuracy during live interviews</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-medium mb-2">Skill Scoring</h4>
            <p className="text-sm text-gray-600">Automated scoring based on industry standards and role requirements</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-medium mb-2">Bias Reduction</h4>
            <p className="text-sm text-gray-600">AI ensures fair evaluation by focusing on skills and performance metrics</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-gray-900 flex items-center">
                <Brain className="h-6 w-6 text-blue-600 mr-2" />
                HireAI
              </h1>
              <div className="flex space-x-6">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'dashboard' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => setActiveTab('interviews')}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'interviews' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Interviews
                </button>
                <button 
                  onClick={() => setActiveTab('analysis')}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'analysis' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  AI Analysis
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                HR
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'interviews' && renderInterviews()}
        {activeTab === 'analysis' && renderAIAnalysis()}
      </main>
    </div>
  );
}