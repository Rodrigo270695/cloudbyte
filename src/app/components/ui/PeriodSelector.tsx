'use client';

interface PeriodSelectorProps {
  activePeriod: string;
  onChange: (period: string) => void;
}

export default function PeriodSelector({ activePeriod, onChange }: PeriodSelectorProps) {
  const periods = [
    { id: 'mensual', label: 'Mensual' },
    { id: 'anual', label: 'Anual (15% descuento)' },
    { id: 'bianual', label: '2 Años (25% descuento)' },
    { id: 'trianual', label: '3 Años (35% descuento)' }
  ];

  return (
    <div className="inline-flex p-1 bg-gray-100 rounded-xl shadow-inner">
      {periods.map((period) => (
        <button
          key={period.id}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            activePeriod === period.id
              ? 'bg-white text-blue-600 shadow-md transform scale-105'
              : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => onChange(period.id)}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
} 