// app/candidate/profile/page.tsx
'use client'; // Marca este componente como un Client Component

import Header from '../../../components/Header'; // Ruta relativa desde 'app/candidate/profile/'
import CandidateProfile from '../../../components/CandidateProfile'; // Ruta relativa

export default function CandidateProfilePage() {
  return (
    <div>
      <Header />
      <main>
        <CandidateProfile />
      </main>
    </div>
  );
}