import React from 'react';
import {
  Users, Search, Filter, Eye, CheckCircle, X,
  MapPin, Sparkles, Briefcase
} from 'lucide-react';

export default function ApplicationsContentRecruiter() {
  // Mock data for recruiter applications
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

  return (
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
}
