import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  colorScheme: 'blue' | 'indigo' | 'cyan' | 'green' | 'purple';
  delay?: string;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  colorScheme = 'blue',
  delay = '0s'
}: FeatureCardProps) {
  // Mapeo de esquemas de colores
  const colorMap = {
    blue: {
      gradient: 'from-blue-500/5 via-indigo-500/5',
      line: 'from-blue-400 to-blue-600',
      bg: 'bg-blue-100',
      iconBg: 'bg-blue-400/20',
      text: 'text-blue-600',
      hover: 'group-hover:text-blue-600'
    },
    indigo: {
      gradient: 'from-indigo-500/5 via-purple-500/5',
      line: 'from-indigo-400 to-indigo-600',
      bg: 'bg-indigo-100',
      iconBg: 'bg-indigo-400/20',
      text: 'text-indigo-600',
      hover: 'group-hover:text-indigo-600'
    },
    cyan: {
      gradient: 'from-cyan-500/5 via-blue-500/5',
      line: 'from-cyan-400 to-cyan-600',
      bg: 'bg-cyan-100',
      iconBg: 'bg-cyan-400/20',
      text: 'text-cyan-600',
      hover: 'group-hover:text-cyan-600'
    },
    green: {
      gradient: 'from-green-500/5 via-emerald-500/5',
      line: 'from-green-400 to-green-600',
      bg: 'bg-green-100',
      iconBg: 'bg-green-400/20',
      text: 'text-green-600',
      hover: 'group-hover:text-green-600'
    },
    purple: {
      gradient: 'from-purple-500/5 via-violet-500/5',
      line: 'from-purple-400 to-purple-600',
      bg: 'bg-purple-100',
      iconBg: 'bg-purple-400/20',
      text: 'text-purple-600',
      hover: 'group-hover:text-purple-600'
    }
  };

  const colors = colorMap[colorScheme];

  return (
    <div 
      className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden animate-fade-in" 
      style={{ animationDelay: delay }}
    >
      {/* Efecto de gradiente en hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Línea decorativa inferior */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${colors.line} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`}></div>
      
      {/* Icono con animación */}
      <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
        <div className={`${colors.text} text-2xl`}>{icon}</div>
        <div className={`absolute inset-0 ${colors.iconBg} rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-300`}></div>
      </div>
      
      <h3 className={`text-xl font-semibold mb-3 text-gray-800 ${colors.hover} transition-colors duration-300`}>{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
} 