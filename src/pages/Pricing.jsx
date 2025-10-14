import React, { useState } from "react";
import { Check, Star, Zap, Users, Brain, Shield, BarChart3, Headphones } from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      id: 1,
      name: "Starter",
      subtitle: "Perfect for small teams",
      price: { monthly: "Free", yearly: "Free" },
      originalPrice: null,
      features: [
        "5 AI interviews per month",
        "Basic skill assessments",
        "Email notifications",
        "Standard support",
        "Interview recordings (7 days)"
      ],
      limitations: ["Limited to 1 hiring manager", "Basic analytics only"],
      popular: false,
      cta: "Get Started Free",
      icon: Users,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      id: 2,
      name: "Professional",
      subtitle: "Scale your hiring process",
      price: { monthly: "$149", yearly: "$119" },
      originalPrice: { monthly: "$179", yearly: "$149" },
      features: [
        "Unlimited AI interviews",
        "Advanced skill assessments",
        "Custom interview templates",
        "Real-time AI insights",
        "Interview recordings (30 days)",
        "Calendar integration",
        "Bias detection algorithms",
        "Multi-language support"
      ],
      limitations: [],
      popular: true,
      cta: "Start 14-day Trial",
      icon: Brain,
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 3,
      name: "Enterprise",
      subtitle: "Complete hiring solution",
      price: { monthly: "Custom", yearly: "Custom" },
      originalPrice: null,
      features: [
        "Everything in Professional",
        "White-label solution",
        "API access & integrations",
        "Advanced analytics dashboard",
        "Dedicated account manager",
        "Custom AI model training",
        "SOC 2 compliance",
        "Priority support (24/7)",
        "Custom reporting",
        "SSO integration"
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
      icon: Shield,
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Interviews",
      description: "Advanced natural language processing conducts dynamic, adaptive interviews"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Get instant insights on candidate performance and hiring patterns"
    },
    {
      icon: Shield,
      title: "Bias-Free Hiring",
      description: "Our AI algorithms eliminate unconscious bias from the selection process"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Reduce time-to-hire by 75% with automated screening and assessment"
    }
  ];

  const getPrice = (plan) => {
    return billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly;
  };

  const getOriginalPrice = (plan) => {
    if (!plan.originalPrice) return null;
    return billingCycle === 'yearly' ? plan.originalPrice.yearly : plan.originalPrice.monthly;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm mb-8">
              <Zap className="w-4 h-4" />
              AI-Powered Hiring Revolution
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
              Transform Your Hiring Process
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Leverage advanced AI to conduct intelligent interviews, assess skills accurately, 
              and hire the best candidates faster than ever before.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 bg-gray-700 rounded-full transition-colors duration-300 hover:bg-gray-600"
              >
                <div className={`absolute top-1 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`}></div>
              </button>
              <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <div className="px-3 py-1 bg-emerald-600/20 border border-emerald-500/30 rounded-full">
                  <span className="text-emerald-300 text-xs font-medium">Save 20%</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            const currentPrice = getPrice(plan);
            const originalPrice = getOriginalPrice(plan);
            
            return (
              <div
                key={plan.id}
                className={`relative group ${isPopular ? 'lg:scale-105' : ''}`}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white text-sm font-medium shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative h-full p-8 rounded-2xl transition-all duration-500 ${
                  isPopular 
                    ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-2 border-indigo-500/50 shadow-2xl shadow-indigo-500/20' 
                    : 'bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-gray-600/50'
                } ${hoveredPlan === plan.id ? 'transform -translate-y-2 shadow-2xl' : ''}`}>
                  
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.gradient} p-0.5`}>
                      <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.subtitle}</p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      {originalPrice && (
                        <div className="text-gray-500 line-through text-lg mb-1">{originalPrice}</div>
                      )}
                      <div className="flex items-baseline justify-center gap-2">
                        <span className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                          {currentPrice}
                        </span>
                        {currentPrice !== "Free" && currentPrice !== "Custom" && (
                          <span className="text-gray-400 text-sm">
                            /{billingCycle === 'monthly' ? 'month' : 'year'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-start gap-3 opacity-60">
                        <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full border-2 border-gray-500"></div>
                        </div>
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
                      isPopular
                        ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105`
                        : 'bg-gray-700 hover:bg-gray-600 hover:scale-105'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  {/* Additional Info */}
                  {plan.name === "Professional" && (
                    <p className="text-center text-gray-400 text-xs mt-3">
                      No credit card required
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Why Choose Our AI Hiring Platform?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-0.5 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-24 text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6">
              Our enterprise team can help you build a tailored AI hiring solution 
              that fits your organization's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}