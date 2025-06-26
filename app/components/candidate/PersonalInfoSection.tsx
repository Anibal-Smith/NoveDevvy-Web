'use client';

import { useState } from 'react';
import InfoTooltip from './InfoTooltip';

interface PersonalInfoProps {
  data: any;
  onUpdate: (data: any) => void;
}

export default function PersonalInfoSection({ data, onUpdate }: PersonalInfoProps) {
  const [formData, setFormData] = useState(data);

  const handleChange = (field: string, value: any) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onUpdate(newData);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span>👤</span>
          Información Personal
        </h2>
        <p className="text-gray-600 mt-2">
          Esta información te ayudará a conectar con los votantes. Sé auténtico y transparente.
        </p>
      </div>

      <div className="space-y-6">
        {/* Nombre completo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Nombre Completo
            <InfoTooltip content="Usa tu nombre completo tal como aparece en tu DNI" />
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="Ej: Juan Carlos Pérez Rodríguez"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
          />
        </div>

        {/* Biografía */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Biografía
            <InfoTooltip content="Cuenta tu historia en 500 palabras. ¿Quién eres? ¿De dónde vienes? ¿Qué te motiva?" />
          </label>
          <div className="relative">
            <textarea
              value={formData.biography}
              onChange={(e) => handleChange('biography', e.target.value)}
              placeholder="Comparte tu historia personal, tus valores y lo que te motiva a ser candidato..."
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
            />
            <span className="absolute bottom-2 right-2 text-sm text-gray-500">
              {formData.biography.length}/500
            </span>
          </div>
        </div>

        {/* Profesión */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Profesión u Ocupación
            <InfoTooltip content="¿A qué te dedicas actualmente? Esto ayuda a los votantes a conocer tu experiencia" />
          </label>
          <input
            type="text"
            value={formData.profession}
            onChange={(e) => handleChange('profession', e.target.value)}
            placeholder="Ej: Ingeniero Civil, Empresario, Docente"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
          />
        </div>

        {/* Educación */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Formación Académica
            <InfoTooltip content="Incluye tus títulos más relevantes y las instituciones donde estudiaste" />
          </label>
          <textarea
            value={formData.education}
            onChange={(e) => handleChange('education', e.target.value)}
            placeholder="Ej: Licenciado en Administración - Universidad Nacional Mayor de San Marcos&#10;Maestría en Gestión Pública - Universidad del Pacífico"
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
          />
        </div>

        {/* Experiencia */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Experiencia Relevante
            <InfoTooltip content="Destaca tu experiencia laboral y política que te prepara para el cargo" />
          </label>
          <textarea
            value={formData.experience}
            onChange={(e) => handleChange('experience', e.target.value)}
            placeholder="Describe tu experiencia profesional y política más relevante..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
          />
        </div>

        {/* Logros */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Principales Logros
            <InfoTooltip content="Lista 3-5 logros de los que te sientas orgulloso" />
          </label>
          <div className="space-y-2">
            {[1, 2, 3].map((index) => (
              <input
                key={index}
                type="text"
                placeholder={`Logro ${index}: Ej: Reduje la delincuencia en 30% como alcalde`}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">💡 Consejos para un mejor perfil:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Sé honesto y auténtico en tu información</li>
          <li>• Usa un lenguaje claro y cercano a la gente</li>
          <li>• Destaca lo que te hace diferente a otros candidatos</li>
          <li>• Incluye datos verificables sobre tus logros</li>
        </ul>
      </div>
    </div>
  );
}