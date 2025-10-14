import React, { useState, useEffect } from 'react';
import {
  User, Briefcase, TrendingUp, Calendar, Star, CheckCircle,
  Clock, MessageSquare, BarChart3, Users, FileText, Video,
  Award, Target, Zap, Eye, ThumbsUp, AlertCircle, Search,
  Filter, Plus, Settings, Bell, LogOut, Github, Camera,
  Upload, Save, X, Linkedin, Twitter, MapPin, Phone,
  Loader2, Check, AlertTriangle, Sparkles, Rocket, Heart,
  Globe, Coffee, BookOpen, Code, Palette, Music, Gamepad2,
  Crown
} from 'lucide-react';
import ApplicationsContentRecruiter from '../components/ApplicationsContentRecruiter';
import ApplicationsContentCandidate from '../components/ApplicationsContentCandidate';
import InterviewsContentRecruiter from '../components/InterviewsContentRecruiter';
import InterviewsContentCandidate from '../components/InterviewsContentCandidate';

export default function Profile() {
  // Mock auth data for demo
  const authUser = {
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    role: "candidate",
    avatar: "SC",
    profilePicture: "",
    githubLink: "",
    linkedinLink: "",
    twitterLink: "",
    bio: "Passionate full-stack developer with a love for creating beautiful, functional web experiences.",
    location: "San Francisco, CA",
    phone: "+1 (555) 123-4567",
    skills: ["React", "TypeScript", "Node.js", "Python", "AWS", "GraphQL"],
    experience: "4 years"
  };

  const [user, setUser] = useState({
    name: authUser?.name || "Sarah Chen",
    email: authUser?.email || "sarah.chen@email.com",
    role: authUser?.role || "candidate",
    avatar: authUser?.avatar || authUser?.name?.charAt(0) || "SC",
    profilePicture: authUser?.profilePicture || "",
    githubLink: authUser?.githubLink || "",
    linkedinLink: authUser?.linkedinLink || "",
    twitterLink: authUser?.twitterLink || "",
    bio: authUser?.bio || "Passionate full-stack developer with a love for creating beautiful, functional web experiences.",
    location: authUser?.location || "San Francisco, CA",
    phone: authUser?.phone || "+1 (555) 123-4567",
    skills: authUser?.skills || ["React", "TypeScript", "Node.js", "Python", "AWS", "GraphQL"],
    experience: authUser?.experience || "4 years",
    resume: authUser?.resume || "",
    joinDate: "2024-01-15"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(user.profilePicture);
  const [savingProfile, setSavingProfile] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [newSkill, setNewSkill] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data for recruiter dashboard
  const recruiterStats = {
    totalCandidates: 127,
    activeJobs: 8,
    interviewsScheduled: 23,
    offersSent: 5,
    avgTimeToHire: "18 days",
    successRate: "73%"
  };

  const recentCandidates = [
    {
      id: 1,
      name: "Ayesha Rahman",
      position: "Frontend Developer",
      status: "Interview Scheduled",
      aiMatch: 92,
      appliedDate: "2024-09-08",
      avatar: "AR",
      location: "New York, NY"
    },
    {
      id: 2,
      name: "Tanvir Hasan",
      position: "ML Engineer",
      status: "Under Review",
      aiMatch: 96,
      appliedDate: "2024-09-07",
      avatar: "TH",
      location: "Boston, MA"
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      position: "UI/UX Designer",
      status: "Shortlisted",
      aiMatch: 89,
      appliedDate: "2024-09-06",
      avatar: "NJ",
      location: "Seattle, WA"
    }
  ];

  // Mock data for candidate dashboard
  const candidateStats = {
    applicationsSent: 12,
    interviewsScheduled: 3,
    offersReceived: 1,
    profileViews: 45,
    profileCompletion: 85
  };

  const recentApplications = [
    {
      id: 1,
      company: "TechNova Inc.",
      position: "Senior React Developer",
      status: "Interview Scheduled",
      appliedDate: "2024-09-08",
      salary: "$95k - $120k",
      logo: "TN"
    },
    {
      id: 2,
      company: "DataWave Solutions",
      position: "Full Stack Engineer",
      status: "Under Review",
      appliedDate: "2024-09-05",
      salary: "$80k - $105k",
      logo: "DW"
    },
    {
      id: 3,
      company: "InnovateLabs",
      position: "Frontend Developer",
      status: "Shortlisted",
      appliedDate: "2024-09-03",
      salary: "$75k - $95k",
      logo: "IL"
    }
  ];

  const upcomingInterviews = [
    {
      id: 1,
      company: "TechNova Inc.",
      position: "Senior React Developer",
      date: "2024-09-15",
      time: "10:00 AM",
      type: "Technical Interview",
      interviewer: "Sarah Johnson",
      platform: "Zoom"
    },
    {
      id: 2,
      company: "DataWave Solutions",
      position: "Full Stack Engineer",
      date: "2024-09-18",
      time: "2:00 PM",
      type: "System Design",
      interviewer: "Mike Chen",
      platform: "Google Meet"
    }
  ];

  const RecruiterDashboard = () => (
    <div className="space-y-8">
      {/* Hero Welcome Section */}
      <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 rounded-3xl p-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='6' cy='6' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative flex items-center justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-purple-200 text-sm font-medium">RECRUITER DASHBOARD</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">
              Welcome back, {user.name}! 
              <span className="inline-block ml-2">👋</span>
            </h1>
            <p className="text-purple-100 text-lg leading-relaxed">
              Your recruitment pipeline is performing exceptionally well today. 
              <span className="font-semibold text-emerald-300">23 new applications</span> and 
              <span className="font-semibold text-yellow-300"> 5 interviews</span> scheduled.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center gap-2 font-semibold">
                <Rocket className="w-5 h-5" />
                Quick Actions
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <div className="w-24 h-24 bg-gradient-to-br from-white to-purple-100 rounded-full flex items-center justify-center text-3xl font-bold text-purple-600">
                  {user.avatar}
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                <Crown className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { 
            label: "Total Candidates", 
            value: recruiterStats.totalCandidates, 
            icon: Users, 
            color: "blue", 
            trend: "+12%",
            bg: "from-blue-50 to-cyan-50",
            iconBg: "bg-blue-500"
          },
          { 
            label: "Active Jobs", 
            value: recruiterStats.activeJobs, 
            icon: Briefcase, 
            color: "emerald", 
            trend: "+3",
            bg: "from-emerald-50 to-teal-50",
            iconBg: "bg-emerald-500"
          },
          { 
            label: "Interviews Today", 
            value: recruiterStats.interviewsScheduled, 
            icon: Calendar, 
            color: "purple", 
            trend: "+8",
            bg: "from-purple-50 to-violet-50",
            iconBg: "bg-purple-500"
          },
          { 
            label: "Success Rate", 
            value: recruiterStats.successRate, 
            icon: TrendingUp, 
            color: "orange", 
            trend: "+5%",
            bg: "from-orange-50 to-red-50",
            iconBg: "bg-orange-500"
          }
        ].map((stat, index) => (
          <div key={index} className={`bg-gradient-to-br ${stat.bg} rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-all duration-300`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-1 text-emerald-600">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-xs font-semibold">{stat.trend}</span>
                  </div>
                  <span className="text-xs text-gray-500">vs last week</span>
                </div>
              </div>
              <div className={`${stat.iconBg} p-3 rounded-xl`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Candidates with Enhanced Design */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Recent Candidates</h3>
                <p className="text-sm text-gray-600">Latest applications with AI matching</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              View All →
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {recentCandidates.map((candidate, index) => (
              <div key={candidate.id} className="group p-5 bg-gradient-to-r from-gray-50 to-transparent rounded-xl border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className={`w-14 h-14 bg-gradient-to-br ${
                        index % 3 === 0 ? 'from-blue-500 to-purple-500' :
                        index % 3 === 1 ? 'from-emerald-500 to-teal-500' :
                        'from-orange-500 to-red-500'
                      } rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {candidate.avatar}
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                        {candidate.name}
                      </p>
                      <p className="text-gray-600 font-medium">{candidate.position}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{candidate.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-600">AI Match</span>
                      </div>
                      <div className="relative">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div 
                            className="h-2 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
                            style={{ width: `${candidate.aiMatch}%` }}
                          ></div>
                        </div>
                        <p className="font-bold text-emerald-600 text-sm mt-1">{candidate.aiMatch}%</p>
                      </div>
                    </div>

                    <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                      candidate.status === 'Interview Scheduled' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      candidate.status === 'Under Review' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                      'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {candidate.status}
                    </span>

                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Post New Job",
            description: "Create engaging job postings with AI-powered optimization",
            icon: Plus,
            color: "blue",
            gradient: "from-blue-500 to-cyan-500"
          },
          {
            title: "AI Candidate Search",
            description: "Find perfect matches using intelligent filtering algorithms",
            icon: Search,
            color: "emerald",
            gradient: "from-emerald-500 to-teal-500"
          },
          {
            title: "Performance Analytics",
            description: "Deep insights into your recruitment metrics and trends",
            icon: BarChart3,
            color: "purple",
            gradient: "from-purple-500 to-violet-500"
          }
        ].map((action, index) => (
          <button key={index} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 text-left">
            <div className={`w-16 h-16 bg-gradient-to-br ${action.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <action.icon className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors">
              {action.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">{action.description}</p>
            <div className="mt-4 flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
              Get started <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const CandidateDashboard = () => (
    <div className="space-y-8">
      {/* Hero Welcome Section */}
      <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl p-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative flex items-center justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-200 text-sm font-medium">JOB SEEKER DASHBOARD</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">
              Hello, {user.name}! 
              <span className="inline-block ml-2">🚀</span>
            </h1>
            <p className="text-emerald-100 text-lg leading-relaxed">
              You're making great progress!{' '}
              <span className="font-semibold text-yellow-300">3 interviews</span>{' '}scheduled and{' '}
              <span className="font-semibold text-blue-300">45 profile views</span>{' '}this week.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center gap-2 font-semibold">
                <Target className="w-5 h-5" />
                Find Jobs
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <div className="w-24 h-24 bg-gradient-to-br from-white to-emerald-100 rounded-full flex items-center justify-center text-3xl font-bold text-emerald-600">
                  {user.avatar}
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { 
            label: "Applications", 
            value: candidateStats.applicationsSent, 
            icon: FileText, 
            color: "blue", 
            trend: "+3 this week",
            bg: "from-blue-50 to-indigo-50",
            iconBg: "bg-blue-500"
          },
          { 
            label: "Interviews", 
            value: candidateStats.interviewsScheduled, 
            icon: Calendar, 
            color: "emerald", 
            trend: "2 upcoming",
            bg: "from-emerald-50 to-green-50",
            iconBg: "bg-emerald-500"
          },
          { 
            label: "Profile Views", 
            value: candidateStats.profileViews, 
            icon: Eye, 
            color: "purple", 
            trend: "+12 today",
            bg: "from-purple-50 to-pink-50",
            iconBg: "bg-purple-500"
          },
          { 
            label: "Profile Score", 
            value: `${candidateStats.profileCompletion}%`, 
            icon: Target, 
            color: "orange", 
            trend: "+5% boost",
            bg: "from-orange-50 to-yellow-50",
            iconBg: "bg-orange-500"
          }
        ].map((stat, index) => (
          <div key={index} className={`bg-gradient-to-br ${stat.bg} rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-all duration-300`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <div className="flex items-center gap-1">
                  <div className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                    {stat.trend}
                  </div>
                </div>
              </div>
              <div className={`${stat.iconBg} p-3 rounded-xl`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Interviews */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Video className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Upcoming Interviews</h3>
                <p className="text-sm text-gray-600">Your scheduled conversations</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              Calendar View →
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {upcomingInterviews.map((interview, index) => (
              <div key={interview.id} className="group p-6 bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-2xl border border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${
                        index % 2 === 0 ? 'from-blue-500 to-purple-500' : 'from-emerald-500 to-cyan-500'
                      } rounded-xl flex items-center justify-center shadow-lg`}>
                        <Video className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-400 border-2 border-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                        {interview.company}
                      </p>
                      <p className="text-gray-600 font-medium">{interview.position}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{interview.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{interview.platform}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex items-center gap-6">
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{interview.date}</p>
                      <p className="text-blue-600 font-semibold">{interview.time}</p>
                      <p className="text-xs text-gray-500 mt-1">with {interview.interviewer}</p>
                    </div>

                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                      Join Meeting
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Briefcase className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Recent Applications</h3>
                <p className="text-sm text-gray-600">Track your application status</p>
              </div>
            </div>
            <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm px-4 py-2 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
              View All →
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {recentApplications.map((application, index) => (
              <div key={application.id} className="group p-5 bg-gradient-to-r from-emerald-50 via-white to-blue-50 rounded-2xl border border-emerald-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className={`w-14 h-14 bg-gradient-to-br ${
                        index % 3 === 0 ? 'from-emerald-500 to-teal-500' :
                        index % 3 === 1 ? 'from-blue-500 to-cyan-500' :
                        'from-purple-500 to-pink-500'
                      } rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {application.logo}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg group-hover:text-emerald-600 transition-colors">
                        {application.company}
                      </p>
                      <p className="text-gray-600 font-medium">{application.position}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-emerald-600 font-bold text-sm">{application.salary}</span>
                        <span className="text-xs text-gray-500">Applied {application.appliedDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                      application.status === 'Interview Scheduled' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      application.status === 'Under Review' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                      'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {application.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Improvement with Modern Design */}
      <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-8 border border-orange-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full -mr-16 -mt-16"></div>
        <div className="relative flex items-start space-x-6">
          <div className="p-4 bg-orange-100 rounded-2xl">
            <Target className="w-8 h-8 text-orange-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 text-xl mb-2">Boost Your Profile Score</h4>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Your profile is <span className="font-bold text-orange-600">{candidateStats.profileCompletion}% complete</span>. 
              Add more details to stand out and get noticed by top recruiters.
            </p>
            <div className="relative w-full bg-white rounded-full h-3 mb-6 shadow-inner">
              <div
                className="h-3 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full shadow-sm transition-all duration-1000 ease-out"
                style={{ width: `${candidateStats.profileCompletion}%` }}
              >
                <div className="absolute right-0 top-0 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                Complete Profile
              </button>
              <button className="bg-white/80 backdrop-blur-sm text-orange-700 px-6 py-3 rounded-xl hover:bg-white transition-all duration-300 font-semibold border border-orange-200">
                View Tips
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RecruiterApplications = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 md:p-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='6' cy='6' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-purple-200 text-sm font-medium">CANDIDATE MANAGEMENT</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Manage Applications
          </h1>
          <p className="text-purple-100 text-base md:text-lg leading-relaxed">
            Review and manage all candidate applications. Filter by status, skills, or AI matching score.
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search candidates..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
              />
            </div>
            <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500">
              <option>All Status</option>
              <option>New</option>
              <option>Under Review</option>
              <option>Shortlisted</option>
              <option>Interview Scheduled</option>
              <option>Rejected</option>
            </select>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all font-semibold shadow-lg">
            <Filter className="w-5 h-5" />
            Advanced Filters
          </button>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {recentCandidates.map((candidate, index) => (
          <div key={candidate.id} className="group bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${index % 3 === 0 ? 'from-blue-500 to-purple-500' : index % 3 === 1 ? 'from-emerald-500 to-teal-500' : 'from-orange-500 to-red-500'} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {candidate.avatar}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                    {candidate.name}
                  </p>
                  <p className="text-gray-600 font-medium">{candidate.position}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">{candidate.location}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">Applied {candidate.appliedDate}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
                <div className="text-center">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-600">AI Match</span>
                  </div>
                  <div className="relative">
                    <div className="w-16 h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full" style={{ width: `${candidate.aiMatch}%` }}></div>
                    </div>
                    <p className="font-bold text-emerald-600 text-sm mt-1">{candidate.aiMatch}%</p>
                  </div>
                </div>

                <span className={`px-4 py-2 rounded-full text-sm font-semibold border whitespace-nowrap ${candidate.status === 'Interview Scheduled' ? 'bg-blue-50 text-blue-700 border-blue-200' : candidate.status === 'Under Review' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>
                  {candidate.status}
                </span>

                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200">
                    <CheckCircle className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const RecruiterInterviews = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-700 rounded-3xl p-6 md:p-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-pink-200 text-sm font-medium">INTERVIEW MANAGEMENT</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Scheduled Interviews
          </h1>
          <p className="text-pink-100 text-base md:text-lg leading-relaxed">
            Manage your interview calendar. Track upcoming sessions and prepare for candidate evaluations.
          </p>
        </div>
      </div>

      {/* Interview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Today", value: "3", icon: Calendar, color: "blue" },
          { label: "This Week", value: "12", icon: Clock, color: "purple" },
          { label: "This Month", value: "28", icon: TrendingUp, color: "emerald" }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interview List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Video className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Upcoming Interviews</h3>
                <p className="text-sm text-gray-600">Scheduled interview sessions</p>
              </div>
            </div>
            <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm px-4 py-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              Calendar View →
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {upcomingInterviews.map((interview, index) => (
              <div key={interview.id} className="group p-6 bg-gradient-to-r from-purple-50 via-white to-pink-50 rounded-2xl border border-purple-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${index % 2 === 0 ? 'from-purple-500 to-pink-500' : 'from-blue-500 to-cyan-500'} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Video className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-400 border-2 border-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg group-hover:text-purple-600 transition-colors">
                        {interview.company} - {interview.position}
                      </p>
                      <p className="text-gray-600 font-medium">{interview.type} Interview</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{interview.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{interview.platform}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{interview.interviewer}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex items-center gap-4">
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{interview.date}</p>
                      <p className="text-purple-600 font-semibold">Starts in 2 hours</p>
                    </div>

                    <div className="flex gap-2">
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                        Join Meeting
                      </button>
                      <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all">
                        <Settings className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const CandidateApplications = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl p-6 md:p-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-200 text-sm font-medium">APPLICATION TRACKING</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            My Applications
          </h1>
          <p className="text-emerald-100 text-base md:text-lg leading-relaxed">
            Track the status of all your job applications. Stay updated on interview invitations and offers.
          </p>
        </div>
      </div>

      {/* Application Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Applied", value: candidateStats.applicationsSent, icon: FileText, color: "blue" },
          { label: "Under Review", value: "8", icon: Clock, color: "yellow" },
          { label: "Interviews", value: candidateStats.interviewsScheduled, icon: Video, color: "purple" },
          { label: "Offers", value: candidateStats.offersReceived, icon: Award, color: "emerald" }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Applications List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Briefcase className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Application History</h3>
                <p className="text-sm text-gray-600">Track your application progress</p>
              </div>
            </div>
            <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm px-4 py-2 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
              Filter by Status →
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {recentApplications.map((application, index) => (
              <div key={application.id} className="group p-5 bg-gradient-to-r from-emerald-50 via-white to-blue-50 rounded-2xl border border-emerald-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className={`w-14 h-14 bg-gradient-to-br ${index % 3 === 0 ? 'from-emerald-500 to-teal-500' : index % 3 === 1 ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {application.logo}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg group-hover:text-emerald-600 transition-colors">
                        {application.company}
                      </p>
                      <p className="text-gray-600 font-medium">{application.position}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-emerald-600 font-bold text-sm">{application.salary}</span>
                        <span className="text-xs text-gray-500">Applied {application.appliedDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold border whitespace-nowrap ${application.status === 'Interview Scheduled' ? 'bg-blue-50 text-blue-700 border-blue-200' : application.status === 'Under Review' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>
                      {application.status}
                    </span>
                    <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const CandidateInterviews = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-700 rounded-3xl p-6 md:p-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-pink-200 text-sm font-medium">INTERVIEW PREPARATION</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            My Interviews
          </h1>
          <p className="text-pink-100 text-base md:text-lg leading-relaxed">
            Prepare for your upcoming interviews. Review details, join meetings, and track your progress.
          </p>
        </div>
      </div>

      {/* Interview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Upcoming", value: candidateStats.interviewsScheduled, icon: Calendar, color: "purple" },
          { label: "Completed", value: "5", icon: CheckCircle, color: "emerald" },
          { label: "This Month", value: "8", icon: TrendingUp, color: "blue" }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Interviews */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Video className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Scheduled Interviews</h3>
                <p className="text-sm text-gray-600">Your upcoming interview sessions</p>
              </div>
            </div>
            <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm px-4 py-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              Calendar View →
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {upcomingInterviews.map((interview, index) => (
              <div key={interview.id} className="group p-6 bg-gradient-to-r from-purple-50 via-white to-pink-50 rounded-2xl border border-purple-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${index % 2 === 0 ? 'from-purple-500 to-pink-500' : 'from-blue-500 to-cyan-500'} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Video className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-400 border-2 border-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg group-hover:text-purple-600 transition-colors">
                        {interview.company}
                      </p>
                      <p className="text-gray-600 font-medium">{interview.position}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{interview.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{interview.platform}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex items-center gap-6">
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{interview.date}</p>
                      <p className="text-purple-600 font-semibold">{interview.time}</p>
                      <p className="text-xs text-gray-500 mt-1">with {interview.interviewer}</p>
                    </div>

                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                      Join Meeting
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interview Tips */}
      <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl p-8 border border-orange-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full -mr-16 -mt-16"></div>
        <div className="relative flex items-start space-x-6">
          <div className="p-4 bg-orange-100 rounded-2xl">
            <BookOpen className="w-8 h-8 text-orange-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 text-xl mb-2">Interview Preparation Tips</h4>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Get ready for your interviews with these expert tips and best practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-orange-200">
                <h5 className="font-semibold text-gray-900 mb-2">Technical Preparation</h5>
                <p className="text-sm text-gray-600">Review common algorithms, system design patterns, and practice coding problems.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-orange-200">
                <h5 className="font-semibold text-gray-900 mb-2">Behavioral Questions</h5>
                <p className="text-sm text-gray-600">Prepare STAR method responses for common behavioral interview questions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUrl = (url) => {
    if (!url) return true;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validatePhone = (phone) => {
    if (!phone) return true;
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    if (!editedUser.name.trim()) {
      setMessage({ type: 'error', text: 'Name is required' });
      return false;
    }
    if (!validateEmail(editedUser.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return false;
    }
    if (!validateUrl(editedUser.githubLink)) {
      setMessage({ type: 'error', text: 'Please enter a valid GitHub URL' });
      return false;
    }
    if (!validateUrl(editedUser.linkedinLink)) {
      setMessage({ type: 'error', text: 'Please enter a valid LinkedIn URL' });
      return false;
    }
    if (!validateUrl(editedUser.twitterLink)) {
      setMessage({ type: 'error', text: 'Please enter a valid Twitter URL' });
      return false;
    }
    if (!validatePhone(editedUser.phone)) {
      setMessage({ type: 'error', text: 'Please enter a valid phone number' });
      return false;
    }
    return true;
  };

  const handleSaveProfile = async () => {
    if (!validateForm()) return;
    setSavingProfile(true);
    setMessage({ type: '', text: '' });

    // Simulate API call
    setTimeout(() => {
      setUser(editedUser);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
      setIsEditing(false);
      setSelectedFile(null);
      setSavingProfile(false);
    }, 2000);
  };

  const ProfileSettings = () => (
    <div className="space-y-8">
      {/* Message Display */}
      {message.text && (
        <div className={`p-5 rounded-2xl border-2 ${
          message.type === 'success'
            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
            : 'bg-red-50 border-red-200 text-red-800'
        } shadow-sm`}>
          <div className="flex items-center gap-3">
            {message.type === 'success' ? (
              <div className="p-2 bg-emerald-100 rounded-full">
                <Check className="w-5 h-5 text-emerald-600" />
              </div>
            ) : (
              <div className="p-2 bg-red-100 rounded-full">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
            )}
            <p className="font-semibold text-lg">{message.text}</p>
          </div>
        </div>
      )}

      {/* Enhanced Profile Picture Section */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
            <Camera className="w-8 h-8 text-purple-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Profile Picture</h3>
            <p className="text-gray-600">Make a great first impression with a professional photo</p>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="relative group">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-3xl flex items-center justify-center text-white text-3xl font-bold overflow-hidden shadow-2xl">
              {previewImage ? (
                <img src={previewImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                user.avatar
              )}
            </div>
            <div className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <label className="cursor-pointer">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors">
                  <Camera className="w-6 h-6 text-gray-700" />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-3 text-xl">Upload New Photo</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Choose a high-quality, professional photo where your face is clearly visible. 
              This helps build trust with recruiters and makes your profile memorable.
            </p>
            <div className="flex gap-4">
              <label className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl cursor-pointer hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                <Upload className="w-5 h-5" />
                Choose Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {selectedFile && (
                <button
                  onClick={() => {
                    setSelectedFile(null);
                    setPreviewImage(user.profilePicture);
                  }}
                  className="flex items-center gap-3 px-6 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors font-semibold border border-red-200"
                >
                  <X className="w-5 h-5" />
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Profile Information */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Personal Information</h3>
              <p className="text-gray-600">Keep your details up to date</p>
            </div>
          </div>
          <button
            onClick={() => {
              if (isEditing) {
                setEditedUser(user);
                setIsEditing(false);
                setMessage({ type: '', text: '' });
              } else {
                setEditedUser(user);
                setIsEditing(true);
              }
            }}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
              isEditing 
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
            }`}
          >
            {isEditing ? <X className="w-5 h-5" /> : <Settings className="w-5 h-5" />}
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form fields with enhanced styling */}
          {[
            { label: 'Full Name', key: 'name', type: 'text', icon: User, required: true },
            { label: 'Email Address', key: 'email', type: 'email', icon: null, required: true },
            { label: 'Phone Number', key: 'phone', type: 'tel', icon: Phone, placeholder: '+1 (555) 123-4567' },
            { label: 'Location', key: 'location', type: 'text', icon: MapPin, placeholder: 'City, Country' },
            { label: 'GitHub Profile', key: 'githubLink', type: 'url', icon: Github, placeholder: 'https://github.com/username' },
            { label: 'LinkedIn Profile', key: 'linkedinLink', type: 'url', icon: Linkedin, placeholder: 'https://linkedin.com/in/username' },
            { label: 'Twitter Profile', key: 'twitterLink', type: 'url', icon: Twitter, placeholder: 'https://twitter.com/username' },
            { label: 'Experience', key: 'experience', type: 'text', icon: Award, placeholder: 'e.g., 5 years' }
          ].map((field, index) => (
            <div key={field.key} className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                {field.icon && <field.icon className="w-4 h-4" />}
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              {isEditing ? (
                <div className="relative">
                  {field.icon && (
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <field.icon className="w-5 h-5" />
                    </div>
                  )}
                  <input
                    type={field.type}
                    value={editedUser[field.key] || ''}
                    onChange={(e) => setEditedUser({ ...editedUser, [field.key]: e.target.value })}
                    placeholder={field.placeholder}
                    className={`w-full ${field.icon ? 'pl-12' : 'pl-4'} pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-900 font-medium`}
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3 py-4 px-4 bg-gray-50 rounded-2xl">
                  {field.icon && <field.icon className="w-5 h-5 text-gray-400" />}
                  {user[field.key] ? (
                    field.type === 'url' && user[field.key] ? (
                      <a
                        href={user[field.key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium underline"
                      >
                        {user[field.key]}
                      </a>
                    ) : (
                      <span className="text-gray-900 font-medium">{user[field.key]}</span>
                    )
                  ) : (
                    <span className="text-gray-500 italic">Not provided</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bio Section */}
        <div className="mt-8 space-y-3">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <FileText className="w-4 h-4" />
            About You
          </label>
          {isEditing ? (
            <textarea
              value={editedUser.bio || ''}
              onChange={(e) => setEditedUser({ ...editedUser, bio: e.target.value })}
              placeholder="Tell recruiters about your passion, experience, and what makes you unique..."
              rows={5}
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-gray-900 font-medium resize-none"
            />
          ) : (
            <div className="py-4 px-4 bg-gray-50 rounded-2xl">
              <p className="text-gray-900 font-medium leading-relaxed">
                {user.bio || <span className="text-gray-500 italic">No bio provided</span>}
              </p>
            </div>
          )}
        </div>

        {/* Skills Section */}
        <div className="mt-8 space-y-4">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Code className="w-4 h-4" />
            Skills & Technologies
          </label>
          {isEditing ? (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {editedUser.skills?.map((skill, index) => (
                  <span key={index} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-xl text-sm font-semibold border border-blue-200">
                    {skill}
                    <button
                      onClick={() => {
                        const newSkills = editedUser.skills.filter((_, i) => i !== index);
                        setEditedUser({ ...editedUser, skills: newSkills });
                      }}
                      className="hover:bg-blue-200 rounded-full p-1 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && newSkill.trim()) {
                      e.preventDefault();
                      setEditedUser({
                        ...editedUser,
                        skills: [...(editedUser.skills || []), newSkill.trim()]
                      });
                      setNewSkill('');
                    }
                  }}
                  placeholder="Add a skill (e.g., React, Python, AWS)..."
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 font-medium"
                />
                <button
                  onClick={() => {
                    if (newSkill.trim()) {
                      setEditedUser({
                        ...editedUser,
                        skills: [...(editedUser.skills || []), newSkill.trim()]
                      });
                      setNewSkill('');
                    }
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  Add
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              {user.skills?.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-xl text-sm font-semibold border border-blue-200">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {isEditing && (
          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={() => {
                setEditedUser(user);
                setIsEditing(false);
                setMessage({ type: '', text: '' });
              }}
              className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveProfile}
              disabled={savingProfile}
              className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg hover:shadow-xl"
            >
              {savingProfile ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Save className="w-5 h-5" />
              )}
              {savingProfile ? 'Saving Changes...' : 'Save Changes'}
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-400/5 to-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-gradient-to-br from-orange-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3, color: 'blue', gradient: 'from-blue-500 to-indigo-600' },
              { id: 'applications', label: user.role === 'recruiter' ? 'Candidates' : 'Applications', icon: FileText, color: 'emerald', gradient: 'from-emerald-500 to-teal-600' },
              { id: 'interviews', label: 'Interviews', icon: Video, color: 'purple', gradient: 'from-purple-500 to-pink-600' },
              { id: 'profile', label: 'Profile', icon: User, color: 'orange', gradient: 'from-orange-500 to-red-600' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex items-center gap-3 px-6 py-4 font-semibold text-sm transition-all duration-500 rounded-t-xl ${
                  activeTab === tab.id
                    ? `text-white bg-gradient-to-r ${tab.gradient} shadow-lg transform scale-105`
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50/80'
                }`}
              >
                <tab.icon className={`w-4 h-4 transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-105'}`} />
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-bounce"></div>
                )}
                {activeTab !== tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content with enhanced animations */}
      <main className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
          {activeTab === 'dashboard' && (
            user.role === 'recruiter' ? <RecruiterDashboard /> : <CandidateDashboard />
          )}
          {activeTab === 'applications' && (
            user.role === 'recruiter' ? <ApplicationsContentRecruiter /> : <ApplicationsContentCandidate />
          )}
          {activeTab === 'interviews' && (
            user.role === 'recruiter' ? <InterviewsContentRecruiter /> : <InterviewsContentCandidate />
          )}
          {activeTab === 'profile' && <ProfileSettings />}
        </div>
      </main>
    </div>
  );
}
