// app/register/citizen/page.tsx
'use client'; // Marca este componente como un Client Component

import RegistrationForm from '../../../components/RegistrationForm'; // Ruta relativa

export default function CitizenRegisterPage() {
  // Pasamos el título y el tipo al componente RegistrationForm
  return <RegistrationForm title="Registro de Ciudadano" type="citizen" />;
}