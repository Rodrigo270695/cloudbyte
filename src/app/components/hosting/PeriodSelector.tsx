'use client';

import { useState } from 'react';

type PeriodOption = {
  id: string;
  label: string;
  discount?: string;
};

type PeriodSelectorProps = {
  activePeriod: string;
  onChange: (period: string) => void;
};

export default function PeriodSelector({ activePeriod, onChange }: PeriodSelectorProps) {
  const periods: PeriodOption[] = [
    { id: 'mensual', label: 'Mensual' },
    { id: 'anual', label: '15% descuento', discount: 'Anual' },
    { id: 'bianual', label: '25% descuento', discount: '2 Años' },
    { id: 'trianual', label: '35% descuento', discount: '3 Años' }
  ];

  return (
    <div className="flex justify-center mb-12">
      <div className="bg-white rounded-full p-1 shadow-sm border border-gray-200 inline-flex">
        {periods.map((period) => (
          <button
            key={period.id}
            onClick={() => onChange(period.id)}
            className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all ${
              activePeriod === period.id
                ? 'bg-blue-600 text-white'
                : period.id === 'mensual' 
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'bg-green-50 text-green-700 hover:bg-green-100'
            }`}
          >
            {period.discount ? (
              <>
                <span className="block text-xs">{period.discount}</span>
                <span className="block font-semibold">{period.label}</span>
              </>
            ) : (
              period.label
            )}
          </button>
        ))}
      </div>
    </div>
  );
} 