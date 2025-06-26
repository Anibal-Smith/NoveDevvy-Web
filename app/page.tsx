'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState<'citizen' | 'candidate' | null>(null);

  return (
    <div className="min-h-screen bg-[#FF6B6B] flex flex-col items-center justify-center px-4">
      {/* Status Bar Simulation */}
      <div className="fixed top-0 left-0 right-0 h-12 flex items-center justify-between px-4 text-white text-sm z-10">
        <span>10:52</span>
        <div className="flex items-center gap-1">
          <span>🔋</span>
          <span>📶</span>
          <span>📡</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md mx-auto mt-12">
        <div className="flex flex-col gap-6 items-center">
          <Link
            href="/register?role=citizen"
            className={`
              px-8 py-4 rounded-full bg-white text-gray-900 font-medium text-lg
              transition-all duration-200 transform hover:scale-105 active:scale-95
              shadow-lg hover:shadow-xl
              ${selectedRole === 'citizen' ? 'ring-4 ring-white ring-opacity-50' : ''}
            `}
            onClick={() => setSelectedRole('citizen')}
          >
            yo eligo
          </Link>

          <Link
            href="/register?role=candidate"
            className={`
              px-8 py-4 rounded-full bg-white text-gray-900 font-medium text-lg
              transition-all duration-200 transform hover:scale-105 active:scale-95
              shadow-lg hover:shadow-xl
              ${selectedRole === 'candidate' ? 'ring-4 ring-white ring-opacity-50' : ''}
            `}
            onClick={() => setSelectedRole('candidate')}
          >
            candidato
          </Link>
        </div>
      </div>
    </div>
  );
}