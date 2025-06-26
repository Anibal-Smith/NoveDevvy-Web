// components/RegistrationForm.tsx
'use client'; // Necesario para usar useRouter

import React from 'react';
import { useRouter } from 'next/navigation'; // Importar useRouter

interface RegistrationFormProps {
  title?: string; // Prop opcional para el título del formulario
  type: 'citizen' | 'candidate'; // Prop obligatorio para diferenciar el tipo de registro
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ title = "Registrarse por unica ves", type }) => {
  const router = useRouter(); // Inicializar el router

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    console.log(`Formulario de Registro (${type}) enviado (simulado)`);

    // Lógica de navegación condicional basada en el 'type'
    if (type === 'candidate') {
      router.push('/candidate/profile'); // Navegar al perfil del candidato
      console.log("Navegando a /candidate/profile (Registro de Candidato completado).");
    } else if (type === 'citizen') {
      // Por ahora, para ciudadanos, solo un log y no se navega
      console.log("Registro de ciudadano completado. La navegación aún no está implementada para esta ruta.");
      // Cuando se tenga la página de destino para ciudadanos, se añadiría aquí:
      // router.push('/citizen-dashboard');
    }
  };

  return (
    <div style={formStyles.container}>
      <h1 style={formStyles.title}>{title}</h1> {/* Usa el título pasado por prop */}

      <form style={formStyles.form} onSubmit={handleSubmit}>
        {/* Campos de formulario - Comunes para ambos por ahora */}
        <div style={formStyles.formGroup}>
          <label htmlFor="fullName" style={formStyles.label}>nombres y apellidos:</label>
          <input type="text" id="fullName" style={formStyles.input} />
        </div>

        <div style={formStyles.formGroup}>
          <label htmlFor="dni" style={formStyles.label}>DNI:</label>
          <input type="text" id="dni" style={formStyles.input} />
        </div>

        <div style={formStyles.formGroup}>
          <label htmlFor="age" style={formStyles.label}>edad:</label>
          <input type="number" id="age" style={formStyles.input} />
        </div>

        <div style={formStyles.formGroup}>
          <label htmlFor="gender" style={formStyles.label}>genero:</label>
          <input type="text" id="gender" style={formStyles.input} />
        </div>

        <div style={formStyles.formGroup}>
          <label htmlFor="region" style={formStyles.label}>Region:</label>
          <input type="text" id="region" style={formStyles.input} />
        </div>

        <div style={formStyles.formGroup}>
          <label htmlFor="departamento" style={formStyles.label}>Departamento:</label>
          <input type="text" id="departamento" style={formStyles.input} />
        </div>

        <div style={formStyles.formGroup}>
          <label htmlFor="districtCity" style={formStyles.label}>Distrito/ciudad</label>
          <input type="text" id="districtCity" style={formStyles.input} />
        </div>

        <button type="submit" style={formStyles.nextButton}>
          siguiente &rarr;
        </button>
      </form>

      <div style={formStyles.footer}>
        <p style={formStyles.footerText}>terminos y condiciones .</p>
        <p style={formStyles.footerText}>ayuda y comentarios.</p>
        <p style={formStyles.footerText}>cifrado de extremo a extremo.</p>
      </div>
    </div>
  );
};

// Estilos del formulario (sin cambios)
const formStyles: {
  container: React.CSSProperties;
  title: React.CSSProperties;
  form: React.CSSProperties;
  formGroup: React.CSSProperties;
  label: React.CSSProperties;
  input: React.CSSProperties;
  nextButton: React.CSSProperties;
  footer: React.CSSProperties;
  footerText: React.CSSProperties;
} = {
  container: {
    backgroundColor: '#ff6b6b',
    padding: '40px 20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2em',
    marginBottom: '30px',
    fontWeight: 'normal',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '0.9em',
    textTransform: 'lowercase',
  },
  input: {
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '12px 15px',
    fontSize: '1em',
    color: '#333',
    outline: 'none',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  nextButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '1.5em',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '30px',
    padding: '10px 0',
  },
  footer: {
    marginTop: 'auto',
    textAlign: 'center',
    fontSize: '0.8em',
    color: 'rgba(255, 255, 255, 0.7)',
    paddingTop: '40px',
  },
  footerText: {
    margin: '5px 0',
  },
};

export default RegistrationForm;