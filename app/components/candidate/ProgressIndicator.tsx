interface ProgressIndicatorProps {
  percentage: number;
}

export default function ProgressIndicator({ percentage }: ProgressIndicatorProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Perfil completado</span>
        <span className="text-sm font-semibold text-[#FF6B6B]">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-[#FF6B6B] to-[#FF5252] h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {percentage < 100 && (
        <p className="text-xs text-gray-500 mt-2">
          Completa tu perfil para tener más visibilidad
        </p>
      )}
    </div>
  );
}