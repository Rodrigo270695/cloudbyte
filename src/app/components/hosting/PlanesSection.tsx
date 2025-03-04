'use client';

import { useState } from 'react';
import PlanCard from '../ui/PlanCard';
import PlanFeaturesModal from './PlanFeaturesModal';
import PeriodSelector from './PeriodSelector';
import { planesHosting } from './PlanesData';
import Badge from '../ui/Badge';

// Definir el tipo para un plan
type PlanType = typeof planesHosting[0];

// Definir el tipo para la información de renovación
type RenewalInfoType = {
  [key: string]: {
    anual: { before: number; renewal: number };
    bianual: { before: number; renewal: number };
    trianual: { before: number; renewal: number };
  }
};

export default function PlanesSection() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePeriod, setActivePeriod] = useState('mensual');
  
  // Función para abrir el modal con el plan seleccionado
  const openPlanDetails = (planId: string) => {
    const plan = planesHosting.find(p => p.id === planId);
    if (plan) {
      setSelectedPlan(plan);
      setIsModalOpen(true);
    }
  };
  
  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  // Función para cambiar el período activo
  const handlePeriodChange = (period: string) => {
    setActivePeriod(period);
  };
  
  // Información de renovación por plan y período
  const renewalInfo: RenewalInfoType = {
    personal: {
      anual: { before: 334.32, renewal: 250.32 },
      bianual: { before: 667.80, renewal: 199.92 },
      trianual: { before: 1002.40, renewal: 166.32 }
    },
    premium: {
      anual: { before: 451.92, renewal: 317.52 },
      bianual: { before: 903.00, renewal: 267.12 },
      trianual: { before: 1355.20, renewal: 233.52 }
    },
    avanzado: {
      anual: { before: 748.72, renewal: 451.92 },
      bianual: { before: 1496.60, renewal: 401.52 },
      trianual: { before: 2245.60, renewal: 367.92 }
    }
  };
  
  // Mapear los datos de los planes al formato que espera PlanCard
  const planCards = planesHosting.map(plan => ({
    name: plan.name,
    description: plan.id === 'personal' 
      ? 'Ideal para sitios web personales o pequeños proyectos.'
      : plan.id === 'premium'
        ? 'Perfecto para sitios web profesionales y pequeñas empresas.'
        : 'La solución completa para empresas y proyectos exigentes.',
    features: [
      { text: `${plan.features.sitiosWeb} Sitio${plan.features.sitiosWeb !== '1' ? 's' : ''} Web`, included: true },
      { text: plan.features.espacioDisco, included: true },
      { text: plan.features.transferencia === 'Ilimitada' ? 'Transferencia Ilimitada' : plan.features.transferencia, included: true },
      { text: `${plan.features.cuentasCorreo} Cuentas de correo`, included: true },
      { text: plan.id === 'personal' ? 'SSL Gratis' : 'Backup Semanal', included: true }
    ],
    prices: plan.prices,
    activePeriod: activePeriod,
    colorScheme: plan.id === 'personal' ? 'blue' : plan.id === 'premium' ? 'indigo' : 'cyan',
    popular: plan.id === 'premium',
    planId: plan.id,
    renewalInfo: renewalInfo[plan.id]
  }));
  
  return (
    <section id="planes" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge text="PLANES" color="blue" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Planes Cloud Hosting
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Soluciones de alojamiento web de alto rendimiento con tecnología NVMe, optimizadas para velocidad y seguridad.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Todos los precios no incluyen IGV
          </p>
        </div>
        
        {/* Selector de período */}
        <PeriodSelector activePeriod={activePeriod} onChange={handlePeriodChange} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planCards.map((plan) => (
            <PlanCard
              key={plan.planId}
              name={plan.name}
              description={plan.description}
              features={plan.features}
              prices={plan.prices}
              activePeriod={activePeriod}
              popular={plan.popular}
              colorScheme={plan.colorScheme as 'blue' | 'indigo' | 'cyan'}
              onViewDetails={() => openPlanDetails(plan.planId || '')}
              planId={plan.planId}
              renewalInfo={plan.renewalInfo}
            />
          ))}
        </div>
      </div>
      
      {/* Modal para mostrar todas las características */}
      <PlanFeaturesModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        plan={selectedPlan} 
      />
    </section>
  );
} 