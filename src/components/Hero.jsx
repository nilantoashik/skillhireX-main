import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">Turn skills into hires — faster.</h1>
          <p className="mt-4 text-lg text-gray-600">AI-backed candidate matching, interview automation, and skill development — all in one platform. Web-adapted from your mobile UI for a smooth desktop experience.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button type="button" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold w-full sm:w-auto text-center">Get started</button>
            <button type="button" className="px-6 py-3 border rounded-lg text-gray-700 w-full sm:w-auto text-center">View demo</button>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-500">
            <div className="p-3 bg-white rounded-lg shadow">500+ companies</div>
            <div className="p-3 bg-white rounded-lg shadow">Trusted AI models</div>
            <div className="p-3 bg-white rounded-lg shadow">Interview-ready profiles</div>
            <div className="p-3 bg-white rounded-lg shadow">Fast shortlists</div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[340px] sm:w-[380px] md:w-[420px]">
            <div className="absolute -left-6 -top-6 w-44 h-28 rounded-2xl bg-indigo-50 shadow-md transform rotate-2" aria-hidden="true" />
            <div className="absolute -right-6 -bottom-6 w-44 h-28 rounded-2xl bg-pink-50 shadow-md transform -rotate-2" aria-hidden="true" />

            <div className="relative rounded-2xl shadow-2xl overflow-hidden border">
              <img src="/assets/logo.png" alt="SkillHireX Logo" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
