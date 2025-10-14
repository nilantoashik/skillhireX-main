import React from 'react';

export default function FeatureCard({title, desc, icon}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{desc}</p>
        </div>
      </div>
    </div>
  );
}
