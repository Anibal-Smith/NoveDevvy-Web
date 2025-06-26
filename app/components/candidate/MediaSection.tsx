'use client';

import { useState } from 'react';
import InfoTooltip from './InfoTooltip';
import ImageUpload from './ImageUpload';

interface MediaSectionProps {
  data: any;
  onUpdate: (data: any) => void;
}

export default function MediaSection({ data, onUpdate }: MediaSectionProps) {
  const [formData, setFormData] = useState(data);

  const handleImageChange = (field: string, image: any) => {
    const newData = { ...formData, [field]: image };
    setFormData(newData);
    onUpdate(newData);
  };

  const addCampaignPhoto = (photo: any) => {
    const newData = {
      ...formData,
      campaignPhotos: [...formData.campaignPhotos, photo]
    };
    setFormData(newData);
    onUpdate(newData);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span>📸</span>
          Fotos y Videos
        </h2>
        <p className="text-gray-600 mt-2">
          Las imágenes son importantes. Sube fotos profesionales que transmitan confianza.
        </p>
      </div>

      <div className="space-y-8">
        {/* Foto de perfil */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Foto de Perfil
            <InfoTooltip content="Esta será tu foto principal. Usa una foto profesional donde se vea claramente tu rostro" />
          </label>
          <div className="max-w-xs">
            <ImageUpload
              currentImage={formData.profilePhoto}
              onImageChange={(image) => handleImageChange('profilePhoto', image)}
              placeholder="Sube tu foto de perfil"
              aspectRatio="square"
              preview="circle"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Recomendado: Foto formal, fondo neutro, buena iluminación
          </p>
        </div>

        {/* Foto de portada */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Foto de Portada
            <InfoTooltip content="Esta imagen aparecerá en la parte superior de tu perfil" />
          </label>
          <ImageUpload
            currentImage={formData.coverPhoto}
            onImageChange={(image) => handleImageChange('coverPhoto', image)}
            placeholder="Sube tu foto de portada"
            aspectRatio="banner"
          />
          <p className="text-sm text-gray-500 mt-2">
            Recomendado: 1920x480px, puede incluir el logo del partido o una imagen representativa
          </p>
        </div>

        {/* Galería de fotos de campaña */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Fotos de Campaña
            <InfoTooltip content="Muestra tu trabajo en la comunidad, eventos y actividades" />
          </label>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {formData.campaignPhotos.map((photo: any, index: number) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img src={photo} alt={`Campaña ${index + 1}`} className="w-full h-full object-cover" />
                <button className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600">
                  ✕
                </button>
              </div>
            ))}
            
            {/* Botón para agregar más fotos */}
            {formData.campaignPhotos.length < 8 && (
              <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-[#FF6B6B] transition-colors">
                <div className="text-center">
                  <span className="text-4xl text-gray-400">+</span>
                  <p className="text-sm text-gray-500 mt-1">Agregar foto</p>
                </div>
              </div>
            )}
          </div>
          
          <p className="text-sm text-gray-500">
            Máximo 8 fotos. Muestra tu cercanía con la gente y tu trabajo en la comunidad.
          </p>
        </div>

        {/* Enlaces a videos */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            Videos de Campaña
            <InfoTooltip content="Agrega enlaces a tus videos de YouTube o Facebook" />
          </label>
          
          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://youtube.com/watch?v=..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
              />
              <button className="px-4 py-3 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF5252] transition-colors">
                Agregar
              </button>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-2">
            Agrega videos donde expliques tus propuestas o muestres tu trabajo
          </p>
        </div>
      </div>

      {/* Consejos para medios */}
      <div className="mt-8 p-4 bg-purple-50 rounded-lg">
        <h4 className="font-semibold text-purple-900 mb-2">📷 Tips para mejores fotos:</h4>
        <ul className="text-sm text-purple-800 space-y-1">
          <li>• Usa fotos de alta calidad (mínimo 1080x1080 para perfil)</li>
          <li>• Evita fotos pixeladas o borrosas</li>
          <li>• Muestra autenticidad: fotos con ciudadanos, en eventos comunitarios</li>
          <li>• Mantén consistencia visual con los colores de tu partido</li>
        </ul>
      </div>
    </div>
  );
}