// app/register/candidate/page.tsx
'use client'; // Marca este componente como un Client Component

import RegistrationForm from '../../../components/RegistrationForm'; // Ruta relativa

export default function CandidateRegisterPage() {
  // Pasamos el título y el tipo al componente RegistrationForm
  return <RegistrationForm title="Registro de Candidato" type="candidate" />;
}