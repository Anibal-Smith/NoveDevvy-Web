'use client';

import { useState } from 'react';
import InfoTooltip from './InfoTooltip';

interface Proposal {
  id: string;
  title: string;
  description: string;
  area: string;
  priority: number;
  timeline: string;
  budget: string;
}

interface ProposalsSectionProps {
  proposals: Proposal[];
  onUpdate: (proposals: Proposal[]) => void;
}

export default function ProposalsSection({ proposals, onUpdate }: ProposalsSectionProps) {
  const [newProposal, setNewProposal] = useState<Partial<Proposal>>({
    title: '',
    description: '',
    area: '',
    priority: 1,
    timeline: '',
    budget: '',
  });

  const addProposal = () => {
    if (newProposal.title && newProposal.description) {
      const proposal: Proposal = {
        id: Date.now().toString(),
        title: newProposal.title!,
        description: newProposal.description!,
        area: newProposal.area || 'general',
        priority: newProposal.priority || 1,
        timeline: newProposal.timeline || '',
        budget: newProposal.budget || '',
      };
      onUpdate([...proposals, proposal]);
      setNewProposal({
        title: '',
        description: '',
        area: '',
        priority: 1,
        timeline: '',
        budget: '',
      });
    }
  };

  const removeProposal = (id: string) => {
    onUpdate(proposals.filter(p => p.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span>💡</span>
          Propuestas Destacadas
        </h2>
        <p className="text-gray-600 mt-2">
          Presenta tus propuestas más importantes de manera clara y concisa.
        </p>
      </div>

      {/* Lista de propuestas existentes */}
      {proposals.length > 0 && (
        <div className="mb-8">
          <h3 className="font-semibold text-gray-700 mb-4">Tus Propuestas</h3>
          <div className="space-y-4">
            {proposals.map((proposal, index) => (
              <div key={proposal.id} className="border border-gray-200 rounded-lg p-4 relative">
                <button
                  onClick={() => removeProposal(proposal.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-[#FF6B6B]">{index + 1}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{proposal.title}</h4>
                    <p className="text-gray-600 mt-1">{proposal.description}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                      <span>📍 {proposal.area}</span>
                      <span>⏱️ {proposal.timeline}</span>
                      <span>💰 {proposal.budget}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Formulario para nueva propuesta */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-gray-700 mb-4">Agregar Nueva Propuesta</h3>
        
        <div className="space-y-4">
          {/* Título de la propuesta */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              Título de la Propuesta
              <InfoTooltip content="Un título claro y conciso que resuma tu propuesta" />
            </label>
            <input
              type="text"
              value={newProposal.title}
              onChange={(e) => setNewProposal({ ...newProposal, title: e.target.value })}
              placeholder="Ej: Programa de Desayunos Escolares Nutritivos"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              Descripción Detallada
              <InfoTooltip content="Explica en qué consiste tu propuesta y cómo beneficiará a los ciudadanos" />
            </label>
            <textarea
              value={newProposal.description}
              onChange={(e) => setNewProposal({ ...newProposal, description: e.target.value })}
              placeholder="Describe tu propuesta, sus beneficios y cómo la implementarás..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Área */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Área
              </label>
              <select
                value={newProposal.area}
                onChange={(e) => setNewProposal({ ...newProposal, area: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
              >
                <option value="">Selecciona</option>
                <option value="educacion">Educación</option>
                <option value="salud">Salud</option>
                <option value="seguridad">Seguridad</option>
                <option value="economia">Economía</option>
                <option value="infraestructura">Infraestructura</option>
                <option value="ambiente">Medio Ambiente</option>
              </select>
            </div>

            {/* Plazo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Plazo de Implementación
              </label>
              <input
                type="text"
                value={newProposal.timeline}
                onChange={(e) => setNewProposal({ ...newProposal, timeline: e.target.value })}
                placeholder="Ej: 6 meses"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
              />
            </div>

            {/* Presupuesto */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Presupuesto Estimado
              </label>
              <input
                type="text"
                value={newProposal.budget}
                onChange={(e) => setNewProposal({ ...newProposal, budget: e.target.value })}
                placeholder="Ej: S/. 5 millones"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <button
            onClick={addProposal}
            className="w-full md:w-auto px-6 py-3 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF5252] transition-colors font-medium"
          >
            ➕ Agregar Propuesta
          </button>
        </div>
      </div>
    </div>
  );
}