import React from 'react';
import {
  FileText, Briefcase, Eye, Clock, Video, Award,
  TrendingUp, CheckCircle
} from 'lucide-react';

export default function ApplicationsContentCandidate() {
  // Mock data for candidate applications
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

  const candidateStats = {
    applicationsSent: 12,
    interviewsScheduled: 3,
    offersReceived: 1,
    profileViews: 45,
    profileCompletion: 85
  };

  return (
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
}
