'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProfileHeader from '@/app/components/candidate/ProfileHeader';
import PersonalInfoSection from '@/app/components/candidate/PersonalInfoSection';
import PartyInfoSection from '@/app/components/candidate/PartyInfoSection';
import GovernmentPlanSection from '@/app/components/candidate/GovernmentPlanSection';
import ProposalsSection from '@/app/components/candidate/ProposalsSection';
import MediaSection from '@/app/components/candidate/MediaSection';
import ProgressIndicator from '@/app/components/candidate/ProgressIndicator';

export default function CandidateProfilePage() {
  const router = useRouter();
  const [profileCompletion, setProfileCompletion] = useState(15);
  const [activeSection, setActiveSection] = useState('personal');

  // Estado para todo el perfil
  const [profileData, setProfileData] = useState({
    personal: {
      fullName: '',
      biography: '',
      profession: '',
      education: '',
      experience: '',
      achievements: [],
    },
    party: {
      name: '',
      acronym: '',
      ideology: '',
      foundationDate: '',
      description: '',
      logo: null,
      colors: { primary: '#FF6B6B', secondary: '#FFFFFF' },
    },
    governmentPlan: {
      vision: '',
      mission: '',
      mainObjectives: [],
      focusAreas: {
        education: { title: 'Educación', content: '', priority: 1 },
        health: { title: 'Salud', content: '', priority: 2 },
        security: { title: 'Seguridad', content: '', priority: 3 },
        economy: { title: 'Economía', content: '', priority: 4 },
        infrastructure: { title: 'Infraestructura', content: '', priority: 5 },
      },
    },
    proposals: [],
    media: {
      profilePhoto: null,
      coverPhoto: null,
      campaignPhotos: [],
      videos: [],
    },
  });

  const updateProfileData = (section: string, data: any) => {
    setProfileData(prev => ({
      ...prev,
      [section]: { ...prev[section as keyof typeof prev], ...data }
    }));
    // Recalcular porcentaje de completitud
    calculateCompletion();
  };

  const calculateCompletion = () => {
    // Lógica simplificada de cálculo
    let completion = 0;
    if (profileData.personal.fullName) completion += 10;
    if (profileData.personal.biography) completion += 10;
    if (profileData.party.name) completion += 10;
    if (profileData.governmentPlan.vision) completion += 15;
    if (profileData.proposals.length > 0) completion += 20;
    if (profileData.media.profilePhoto) completion += 15;
    // ... más validaciones
    setProfileCompletion(Math.min(completion, 100));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con progreso */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Configura tu Perfil de Candidato
            </h1>
            <button
              onClick={() => router.push('/candidate/preview')}
              className="px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF5252] transition-colors"
            >
              Vista Previa
            </button>
          </div>
          <ProgressIndicator percentage={profileCompletion} />
        </div>
      </div>

      {/* Navegación lateral y contenido */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar de navegación */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <h3 className="font-semibold text-gray-700 mb-4">Secciones</h3>
              <ul className="space-y-2">
                {[
                  { id: 'personal', label: 'Información Personal', icon: '👤' },
                  { id: 'party', label: 'Partido Político', icon: '🏛️' },
                  { id: 'plan', label: 'Plan de Gobierno', icon: '📋' },
                  { id: 'proposals', label: 'Propuestas', icon: '💡' },
                  { id: 'media', label: 'Fotos y Videos', icon: '📸' },
                ].map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3
                        ${activeSection === section.id 
                          ? 'bg-[#FF6B6B] text-white' 
                          : 'hover:bg-gray-100 text-gray-700'
                        }`}
                    >
                      <span className="text-xl">{section.icon}</span>
                      <span className="font-medium">{section.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contenido principal */}
          <div className="lg:col-span-3">
            {activeSection === 'personal' && (
              <PersonalInfoSection 
                data={profileData.personal}
                onUpdate={(data) => updateProfileData('personal', data)}
              />
            )}
            
            {activeSection === 'party' && (
              <PartyInfoSection 
                data={profileData.party}
                onUpdate={(data) => updateProfileData('party', data)}
              />
            )}
            
            {activeSection === 'plan' && (
              <GovernmentPlanSection 
                data={profileData.governmentPlan}
                onUpdate={(data) => updateProfileData('governmentPlan', data)}
              />
            )}
            
            {activeSection === 'proposals' && (
              <ProposalsSection 
                proposals={profileData.proposals}
                onUpdate={(proposals) => setProfileData(prev => ({ ...prev, proposals }))}
              />
            )}
            
            {activeSection === 'media' && (
              <MediaSection 
                data={profileData.media}
                onUpdate={(data) => updateProfileData('media', data)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Botón flotante de guardar */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-105 flex items-center gap-2">
          <span>💾</span>
          <span>Guardar Cambios</span>
        </button>
      </div>
    </div>
  );
}