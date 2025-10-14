import React, { useState } from 'react';
import {
  Calendar, Clock, Video, Globe, BookOpen, CheckCircle, Bot
} from 'lucide-react';
import AIInterviewBot from './AIInterviewBot';

export default function InterviewsContentCandidate() {
  const [showAIBot, setShowAIBot] = useState(false);
  const [selectedInterviewId, setSelectedInterviewId] = useState(null);

  // Mock data for candidate interviews
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

  const candidateStats = {
    interviewsScheduled: 3,
    completed: 5,
    thisMonth: 8
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-700 rounded-3xl p-6 md:p-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
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
          { label: "Completed", value: candidateStats.completed, icon: CheckCircle, color: "emerald" },
          { label: "This Month", value: candidateStats.thisMonth, icon: Calendar, color: "blue" }
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

                  <div className="text-right flex items-center gap-4">
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{interview.date}</p>
                      <p className="text-purple-600 font-semibold">{interview.time}</p>
                      <p className="text-xs text-gray-500 mt-1">with {interview.interviewer}</p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedInterviewId(interview.id);
                          setShowAIBot(true);
                        }}
                        className="p-3 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all"
                        title="Practice with AI Bot"
                      >
                        <Bot className="w-5 h-5" />
                      </button>
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                        Join Meeting
                      </button>
                    </div>
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

      {/* AI Interview Bot Modal */}
      {showAIBot && (
        <AIInterviewBot
          interviewId={selectedInterviewId}
          onClose={() => setShowAIBot(false)}
        />
      )}
    </div>
  );
}
