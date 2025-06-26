'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

interface FormData {
  fullName: string;
  age: string;
  gender: string;
  dni: string;
  region: string;
  department: string;
  district: string;
}

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'citizen';
  
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    age: '',
    gender: '',
    dni: '',
    region: '',
    department: '',
    district: '',
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FF6B6B] flex flex-col px-4 py-12">
      {/* Status Bar Simulation */}
      <div className="fixed top-0 left-0 right-0 h-12 flex items-center justify-between px-4 text-white text-sm z-10 bg-[#FF6B6B]">
        <span>10:52</span>
        <div className="flex items-center gap-1">
          <span>🔋</span>
          <span>📶</span>
          <span>📡</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md mx-auto mt-12">
        <h1 className="text-white text-2xl font-light mb-8">
          Registrarse por única vez
        </h1>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="nombres y apellidos:"
              value={formData.fullName}
              onChange={handleInputChange('fullName')}
              className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 
                       focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30
                       transition-all duration-200"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Edad"
              value={formData.age}
              onChange={handleInputChange('age')}
              className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 
                       focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30
                       transition-all duration-200"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Género"
              value={formData.gender}
              onChange={handleInputChange('gender')}
              className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 
                       focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30
                       transition-all duration-200"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="DNI:"
              value={formData.dni}
              onChange={handleInputChange('dni')}
              maxLength={8}
              className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 
                       focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30
                       transition-all duration-200"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Región:"
              value={formData.region}
              onChange={handleInputChange('region')}
              className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 
                       focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30
                       transition-all duration-200"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Departamento:"
              value={formData.department}
              onChange={handleInputChange('department')}
              className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 
                       focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30
                       transition-all duration-200"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Distrito:"
              value={formData.district}
              onChange={handleInputChange('district')}
              className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 
                       focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30
                       transition-all duration-200"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-3 mt-6">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 w-4 h-4 text-[#FF6B6B] bg-white rounded 
                       focus:ring-white focus:ring-opacity-30 focus:ring-2"
            />
            <label htmlFor="terms" className="text-white text-sm">
              <span className="opacity-90">terminos y condiciones</span>
              {' '}
              <Link href="/terms" className="underline opacity-100">
                ayuda y comentarios
              </Link>
            </label>
          </div>

          {/* External login text */}
          <p className="text-center text-white text-sm opacity-90 mt-4">
            cifrado de extremo a extremo
          </p>
        </form>
      </div>
    </div>
  );
}