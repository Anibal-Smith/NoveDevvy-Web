'use client';

import { useState } from 'react';
import InfoTooltip from './InfoTooltip';
import ImageUpload from './ImageUpload';

interface PartyInfoProps {
  data: any;
  onUpdate: (data: any) => void;
}

export default function PartyInfoSection({ data, onUpdate }: PartyInfoProps) {
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
          <span>🏛️</span>
          Información del Partido Político
        </h2>
        <p className="text-gray-600 mt-2">
          Proporciona información clara sobre tu partido político para que los votantes conozcan tu afiliación.
        </p>
      </div>

      <div className="space-y-6">
        {/* Logo del partido */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Logo del Partido
            <InfoTooltip content="Sube el logo oficial de tu partido en formato PNG o JPG" />
          </label>
          <ImageUpload
            currentImage={formData.logo}
            onImageChange={(image) => handleChange('logo', image)}
            placeholder="Haz clic para subir el logo del partido"
            aspectRatio="square"
          />
        </div>

        {/* Nombre del partido */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Nombre del Partido
            <InfoTooltip content="Nombre completo y oficial del partido político" />
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Ej: Partido Democrático del Perú"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
          />
        </div>

        {/* Siglas */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Siglas del Partido
            <InfoTooltip content="Abreviatura oficial del partido" />
          </label>
          <input
            type="text"
            value={formData.acronym}
            onChange={(e) => handleChange('acronym', e.target.value)}
            placeholder="Ej: PDP"
            maxLength={10}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
          />
        </div>

        {/* Ideología */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Ideología Política
            <InfoTooltip content="Describe la orientación ideológica de tu partido" />
          </label>
          <select
            value={formData.ideology}
            onChange={(e) => handleChange('ideology', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
          >
            <option value="">Selecciona una ideología</option>
            <option value="centro">Centro</option>
            <option value="centro-izquierda">Centro Izquierda</option>
            <option value="centro-derecha">Centro Derecha</option>
            <option value="izquierda">Izquierda</option>
            <option value="derecha">Derecha</option>
            <option value="liberal">Liberal</option>
            <option value="conservador">Conservador</option>
            <option value="progresista">Progresista</option>
          </select>
        </div>

        {/* Colores del partido */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Colores del Partido
            <InfoTooltip content="Selecciona los colores oficiales de tu partido" />
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Color Principal</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={formData.colors.primary}
                  onChange={(e) => handleChange('colors', { ...formData.colors, primary: e.target.value })}
                  className="w-16 h-10 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.colors.primary}
                  onChange={(e) => handleChange('colors', { ...formData.colors, primary: e.target.value })}
                  placeholder="#FF6B6B"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Color Secundario</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={formData.colors.secondary}
                  onChange={(e) => handleChange('colors', { ...formData.colors, secondary: e.target.value })}
                  className="w-16 h-10 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.colors.secondary}
                  onChange={(e) => handleChange('colors', { ...formData.colors, secondary: e.target.value })}
                  placeholder="#FFFFFF"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Descripción del partido */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Descripción del Partido
            <InfoTooltip content="Explica la misión, visión y valores de tu partido político" />
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Describe los principios, valores y objetivos de tu partido político..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
          />
        </div>

        {/* Fecha de fundación */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Fecha de Fundación
            <InfoTooltip content="¿Cuándo se fundó el partido?" />
          </label>
          <input
            type="date"
            value={formData.foundationDate}
            onChange={(e) => handleChange('foundationDate', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
          />
        </div>
      </div>
    </div>
  );
}