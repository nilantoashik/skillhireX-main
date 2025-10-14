import React from 'react';
import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <section className="py-12" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">What you get</h2>
        <p className="text-gray-600 mt-2">Features translated from the mobile app into web components.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="AI Matching" desc="Smart candidate shortlisting based on skills and job fit." icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.657-2.686 3-6 3s-6-1.343-6-3 2.686-3 6-3 6 1.343 6 3zM6 13v6"/></svg>
          } />
          <FeatureCard title="Interview Scheduler" desc="Integrated scheduler with calendar sync." icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          } />
          <FeatureCard title="Skill Paths" desc="Guided microlearning to bridge gaps." icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 8h10M5 20h14"/></svg>
          } />
          <FeatureCard title="Candidate Profiles" desc="Rich skill badges and experience timeline." icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c3.042 0 5.824.966 7.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          } />
          <FeatureCard title="Reporting" desc="Hiring funnel analytics and insights." icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17a4 4 0 100-8 4 4 0 000 8zM21 21l-6-6"/></svg>
          } />
          <FeatureCard title="Integrations" desc="Calendar, ATS, and chat connectors." icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 9 4-18 3 9h4"/></svg>
          } />
        </div>
      </div>
    </section>
  );
}
