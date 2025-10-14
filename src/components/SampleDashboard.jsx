import React from 'react';

export default function SampleDashboard() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="rounded-2xl bg-white p-6 shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Shortlisted Candidates</h3>
                <div className="text-sm text-gray-500">Updated 2h ago</div>
              </div>

              <ul className="mt-4 space-y-3">
                {[1,2,3].map((i)=> (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">A</div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <div className="font-semibold">Candidate Name {i}</div>
                          <div className="text-xs text-gray-500">React, Node, SQL</div>
                        </div>
                        <div className="text-sm text-gray-500">Match 86%</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-right">
                <button type="button" className="px-4 py-2 border rounded-lg">View all</button>
              </div>
            </div>
          </div>

          <aside className="w-full lg:w-96">
            <div className="rounded-2xl bg-white p-6 shadow">
              <h4 className="font-semibold">Upcoming Interviews</h4>
              <div className="mt-4 space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Interview with Candidate A</div>
                      <div className="text-xs text-gray-500">Sep 15, 2025 • 10:00 — 10:30</div>
                    </div>
                    <div className="text-sm text-gray-600">Zoom</div>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Interview with Candidate B</div>
                      <div className="text-xs text-gray-500">Sep 17, 2025 • 14:00 — 14:30</div>
                    </div>
                    <div className="text-sm text-gray-600">In-person</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
