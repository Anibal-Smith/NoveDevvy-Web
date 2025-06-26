'use client';

import { useState } from 'react';
import InfoTooltip from './InfoTooltip';

interface GovernmentPlanProps {
  data: any;
  onUpdate: (data: any) => void;
}

export default function GovernmentPlanSection({ data, onUpdate }: GovernmentPlanProps) {
  const [formData, setFormData] = useState(data);
  const [activeArea, setActiveArea] = useState('education');

  const handleChange = (field: string, value: any) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onUpdate(newData);
  };

  const handleAreaChange = (area: string, content: string) => {
    const newData = {
      ...formData,
      focusAreas: {
        ...formData.focusAreas,
        [area]: { ...formData.focusAreas[area], content }
      }
    };
    setFormData(newData);
    onUpdate(newData);
  };

  const areas = [
    { id: 'education', title: 'Educación', icon: '📚' },
    { id: 'health', title: 'Salud', icon: '🏥' },
    { id: 'security', title: 'Seguridad', icon: '🛡️' },
    { id: 'economy', title: 'Economía', icon: '💰' },
    { id: 'infrastructure', title: 'Infraestructura', icon: '🏗️' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span>📋</span>
          Plan de Gobierno
        </h2>
        <p className="text-gray-600 mt-2">
          Define tu visión para el Perú. Sé específico y realista en tus propuestas.
        </p>
      </div>

      <div className="space-y-6">
        {/* Visión */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Visión
            <InfoTooltip content="¿Cómo imaginas el Perú al final de tu gestión? Describe tu visión a futuro" />
          </label>
          <textarea
            value={formData.vision}
            onChange={(e) => handleChange('vision', e.target.value)}
            placeholder="Ej: Un Perú con educación de calidad para todos, donde cada peruano tenga oportunidades de desarrollo..."
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
          />
        </div>

        {/* Misión */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Misión
            <InfoTooltip content="¿Cómo planeas lograr esa visión? Define tu misión de gobierno" />
          </label>
          <textarea
            value={formData.mission}
            onChange={(e) => handleChange('mission', e.target.value)}
            placeholder="Ej: Trabajar con transparencia y eficiencia para mejorar la calidad de vida de todos los peruanos..."
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
          />
        </div>

        {/* Objetivos principales */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Objetivos Principales
            <InfoTooltip content="Lista 3-5 objetivos concretos y medibles para tu gestión" />
          </label>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">{index}.</span>
                <input
                  type="text"
                  placeholder={`Objetivo ${index}: Ej: Reducir la anemia infantil en 50%`}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Áreas de enfoque */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4 flex items-center gap-2">
            Propuestas por Área
            <InfoTooltip content="Detalla tus propuestas específicas para cada área de gobierno" />
          </label>

          {/* Tabs de áreas */}
          <div className="flex flex-wrap gap-2 mb-4">
            {areas.map((area) => (
              <button
                key={area.id}
                onClick={() => setActiveArea(area.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2
                  ${activeArea === area.id
                    ? 'bg-[#FF6B6B] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                <span>{area.icon}</span>
                <span>{area.title}</span>
              </button>
            ))}
          </div>

          {/* Contenido del área activa */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              {areas.find(a => a.id === activeArea)?.icon}
              Propuestas para {areas.find(a => a.id === activeArea)?.title}
            </h4>
            <textarea
              value={formData.focusAreas[activeArea]?.content || ''}
              onChange={(e) => handleAreaChange(activeArea, e.target.value)}
              placeholder={`Describe tus propuestas específicas para ${areas.find(a => a.id === activeArea)?.title.toLowerCase()}...`}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all bg-white"
            />
          </div>
        </div>
      </div>

      {/* Recomendaciones */}
      <div className="mt-8 p-4 bg-green-50 rounded-lg">
        <h4 className="font-semibold text-green-900 mb-2">✅ Recomendaciones para un buen plan:</h4>
        <ul className="text-sm text-green-800 space-y-1">
          <li>• Sé específico: incluye números, plazos y metas concretas</li>
          <li>• Sé realista: propón cambios alcanzables con los recursos disponibles</li>
          <li>• Sé innovador: presenta soluciones creativas a problemas tradicionales</li>
          <li>• Incluye cómo financiarás cada propuesta</li>
        </ul>
      </div>
    </div>
  );
}