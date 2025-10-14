import React, { useState, useEffect } from 'react';
import { ArrowRight, BarChart3, Zap, Shield, Users, TrendingUp, Eye, Clock, Award } from 'lucide-react';

// Hero Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className={`w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 text-purple-300 text-sm mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Revolutionizing Data Analytics
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Data Story
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Unlock powerful insights with our next-generation analytics platform. 
              Turn complex data into compelling narratives that drive decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center shadow-2xl">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border border-slate-400 text-slate-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-slate-400">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10M+</div>
                <div className="text-slate-400">Data Points</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-slate-400">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// Features Component
const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor your data streams with lightning-fast processing and instant visualizations that update as your data changes.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with SOC2, GDPR, and HIPAA standards keep your data protected.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share insights seamlessly with role-based access controls and real-time collaborative editing.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Predictive Models",
      description: "AI-powered forecasting helps you anticipate trends and make data-driven decisions with confidence.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Eye,
      title: "Visual Intelligence",
      description: "Transform complex datasets into stunning, interactive visualizations that tell compelling stories.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Clock,
      title: "Automated Insights",
      description: "Let our AI surface the most important patterns and anomalies, saving you hours of manual analysis.",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Everything you need to
            <span className="block bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              unlock your data
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with intuitive design, 
            making advanced analytics accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sample Dashboard Component
const SampleDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const metrics = [
    { label: 'Total Revenue', value: '$2.4M', change: '+12%', positive: true },
    { label: 'Active Users', value: '48.2K', change: '+8%', positive: true },
    { label: 'Conversion Rate', value: '3.7%', change: '-2%', positive: false },
    { label: 'Avg. Session', value: '4m 32s', change: '+15%', positive: true }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            See it in action
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experience the power of our platform with this interactive dashboard preview.
            Real insights, beautiful design, zero complexity.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/20">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Analytics Dashboard</h3>
              <p className="text-slate-300">Last updated: 2 minutes ago</p>
            </div>
            
            <div className="flex space-x-2">
              {['overview', 'analytics', 'reports'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-purple-500 text-white'
                      : 'text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-slate-300 text-sm">{metric.label}</p>
                  <span className={`text-sm px-2 py-1 rounded ${
                    metric.positive ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <p className="text-3xl font-bold text-white">{metric.value}</p>
              </div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl font-bold text-white">Revenue Trend</h4>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-slate-300 text-sm">This Year</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                  <span className="text-slate-300 text-sm">Last Year</span>
                </div>
              </div>
            </div>
            
            {/* Simplified Chart Visualization */}
            <div className="h-64 flex items-end space-x-2">
              {[40, 60, 45, 70, 55, 80, 65, 90, 75, 95, 85, 100].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-gradient-to-t from-purple-500 to-cyan-500 rounded-t transition-all duration-1000 delay-100"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-4 text-slate-400 text-sm">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Award className="w-5 h-5 mr-2" />
            Start Building Your Dashboard
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Home Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <SampleDashboard />
    </main>
  );
}