// app/page.tsx
'use client'; // Necesario para usar useRouter y eventos de click

import React from 'react';
import { useRouter } from 'next/navigation'; // Importar useRouter

export default function InitialChoicePage() {
  const router = useRouter(); // Inicializar el router

  const handleChooseCitizen = () => {
    router.push('/register/citizen'); // Navegar a la página de registro de ciudadano
  };

  const handleChooseCandidate = () => {
    router.push('/register/candidate'); // Navegar a la página de registro de candidato
  };

  return (
    <div style={choiceStyles.container}>
      <button style={choiceStyles.button} onClick={handleChooseCitizen}>
        yo eligo
      </button>
      <button style={choiceStyles.button} onClick={handleChooseCandidate}>
        candidato
      </button>
    </div>
  );
}

const choiceStyles: { container: React.CSSProperties; button: React.CSSProperties } = {
  container: {
    backgroundColor: '#ff6b6b', // Rojo de la imagen
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Ocupar toda la altura de la vista
    gap: '40px', // Espacio entre los botones
  },
  button: {
    backgroundColor: '#fff',
    color: '#333',
    border: 'none',
    borderRadius: '10px',
    padding: '15px 40px',
    fontSize: '1.5em',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s, box-shadow 0.2s', // Transición para efectos visuales (hover si se implementa con CSS)
  },
};