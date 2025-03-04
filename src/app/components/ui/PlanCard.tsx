'use client';

import Link from 'next/link';
import { FaCheck, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface PlanFeature {
  text: string;
  included: boolean;
}

// Definir el tipo para los precios
type PriceType = {
  [key: string]: number; // Añadir firma de índice para permitir indexación con string
  mensual: number;
  anual: number;
  bianual: number;
  trianual: number;
};

// Definir el tipo para la información de renovación
type RenewalInfoType = {
  [key: string]: { before: number; renewal: number };
};

interface PlanCardProps {
  name: string;
  description: string;
  features: PlanFeature[];
  prices: PriceType;
  activePeriod: string;
  popular?: boolean;
  colorScheme?: 'blue' | 'indigo' | 'cyan';
  onViewDetails?: () => void;
  planId?: string;
  renewalInfo?: {
    anual: { before: number; renewal: number };
    bianual: { before: number; renewal: number };
    trianual: { before: number; renewal: number };
  };
}

export default function PlanCard({
  name,
  description,
  features,
  prices,
  activePeriod,
  popular = false,
  colorScheme = 'blue',
  onViewDetails,
  planId,
  renewalInfo
}: PlanCardProps) {
  // Mapeo de esquemas de colores
  const colorMap = {
    blue: {
      badge: 'bg-blue-100 text-blue-800',
      title: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
      highlight: 'from-blue-500 to-blue-600',
      border: 'border-blue-200',
      shadow: 'shadow-blue-500/10',
      hoverShadow: 'group-hover:shadow-blue-500/20'
    },
    indigo: {
      badge: 'bg-indigo-100 text-indigo-800',
      title: 'text-indigo-600',
      button: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
      highlight: 'from-indigo-500 to-indigo-600',
      border: 'border-indigo-200',
      shadow: 'shadow-indigo-500/10',
      hoverShadow: 'group-hover:shadow-indigo-500/20'
    },
    cyan: {
      badge: 'bg-cyan-100 text-cyan-800',
      title: 'text-cyan-600',
      button: 'bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500',
      highlight: 'from-cyan-500 to-cyan-600',
      border: 'border-cyan-200',
      shadow: 'shadow-cyan-500/10',
      hoverShadow: 'group-hover:shadow-cyan-500/20'
    }
  };

  const colors = colorMap[colorScheme];
  
  // Formatear el precio según el período activo
  const price = prices[activePeriod];
  const formattedPrice = `S/. ${price.toFixed(2)}`;
  
  // Información de renovación para el período activo
  const showRenewalInfo = renewalInfo && activePeriod !== 'mensual';
  const renewal = showRenewalInfo ? renewalInfo[activePeriod as keyof typeof renewalInfo] : null;
  
  // Calcular el descuento si hay información de renovación
  const discount = renewal ? Math.round((1 - renewal.renewal / renewal.before) * 100) : 0;

  return (
    <div className={`relative group rounded-2xl overflow-hidden transition-all duration-300 ${popular ? 'shadow-lg' : 'shadow-md'} hover:shadow-xl ${colors.shadow} ${colors.hoverShadow} ${popular ? `border-2 ${colors.border}` : 'border border-gray-200'}`}>
      {/* Insignia de popular */}
      {popular && (
        <div className={`absolute top-0 right-0 ${colors.badge} px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-lg`}>
          Más popular
        </div>
      )}
      
      {/* Contenido de la tarjeta */}
      <div className="p-6">
        <h3 className={`text-xl font-bold ${colors.title} mb-2`}>{name}</h3>
        <p className="text-gray-600 mb-6 text-sm">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{formattedPrice}</span>
          <span className="text-gray-500 ml-2">
            {activePeriod === 'mensual' ? '/mes' : activePeriod === 'anual' ? '/año' : activePeriod === 'bianual' ? '/2 años' : '/3 años'}
          </span>
          
          {/* Mostrar información de renovación si está disponible */}
          {showRenewalInfo && renewal && (
            <div className="mt-2">
              <div className="flex items-center">
                <span className="text-sm text-gray-500 line-through mr-2">S/. {renewal.before.toFixed(2)}</span>
                <span className="text-sm font-medium text-green-600">Ahorra {discount}%</span>
              </div>
              <div className="mt-1 text-xs text-gray-500">
                Renovación: S/. {renewal.renewal.toFixed(2)}/{activePeriod}
              </div>
            </div>
          )}
        </div>
        
        {/* Características principales */}
        <ul className="space-y-3 mb-8">
          {features.slice(0, 5).map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={`mr-2 mt-1 ${feature.included ? colors.title : 'text-gray-400'}`}>
                <FaCheck size={14} />
              </span>
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        {/* Botones */}
        <div className="space-y-3">
          <button className={`w-full py-3 px-4 rounded-xl text-white font-medium transition-all ${colors.button} focus:outline-none focus:ring-2 focus:ring-offset-2`}>
            Contratar ahora
          </button>
          
          {onViewDetails ? (
            <button
              onClick={onViewDetails}
              className={`w-full py-3 px-4 rounded-xl font-medium transition-all border border-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
            >
              Ver todas las características
            </button>
          ) : (
            <Link href={`/hosting/detalles/${name.toLowerCase().replace(/\s+/g, '-')}`} className="block w-full text-center py-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Ver todas las características
            </Link>
          )}
        </div>
      </div>
      
      {/* Línea decorativa inferior */}
      {popular && (
        <div className={`h-1 w-full bg-gradient-to-r ${colors.highlight}`}></div>
      )}
    </div>
  );
} 