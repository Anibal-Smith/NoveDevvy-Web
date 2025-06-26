// components/ChoiceButtons.tsx
'use client'; // Necesario para usar hooks como useRouter

import React from 'react';
import { useRouter } from 'next/navigation'; // Importar useRouter

const ChoiceButtons: React.FC = () => {
  const router = useRouter(); // Inicializar el router

  const handleChoose = () => {
    router.push('/register/citizen'); // Navegar a la página de registro de ciudadano
  };

  const handleCandidate = () => {
    router.push('/register/candidate'); // Navegar a la página de registro de candidato
  };

  return (
    <div style={choiceStyles.container}>
      <button style={choiceStyles.button} onClick={handleChoose}>
        yo eligo
      </button>
      <button style={choiceStyles.button} onClick={handleCandidate}>
        candidato
      </button>
    </div>
  );
};

const choiceStyles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#ff6b6b',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    gap: '40px',
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
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
};

export default ChoiceButtons;