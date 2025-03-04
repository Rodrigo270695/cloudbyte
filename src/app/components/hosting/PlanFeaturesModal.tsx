import { FaCheck, FaTimes } from 'react-icons/fa';
import FeatureTable from './FeatureTable';

type PlanData = {
  id: string;
  name: string;
  features: {
    sitiosWeb: string;
    espacioDisco: string;
    transferencia: string;
    procesamiento: string;
    memoriaRAM: string;
    visitasMensuales: string;
    cuentasCorreo: string;
    basesDatos: string;
    ssl: string;
    panelControl: string;
    servidor: string;
    backup: string;
    antivirus: string;
    monitoreo: string;
    estadisticas: string;
    antiSpam: string;
    ftp: string;
    subdominios: string;
    reenviadores: string;
    limiteUsuario: string;
    limiteDominio: string;
    autoresponders: string;
    soporteEmail: string;
    webmail: string;
    apache: string;
    php: string;
    phpMyAdmin: string;
    proteccion: string;
    personalizacion: string;
    administracion: string;
    inodes: string;
    procesosActivos: string;
    procesosEntrada: string;
  };
};

type PlanFeaturesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  plan: PlanData | null;
};

export default function PlanFeaturesModal({ isOpen, onClose, plan }: PlanFeaturesModalProps) {
  if (!isOpen || !plan) return null;
  
  // Organizar características por categorías
  const generalFeatures = [
    { label: 'Sitios Web', value: plan.features.sitiosWeb },
    { label: 'Espacio en disco', value: plan.features.espacioDisco },
    { label: 'Transferencia Mensual', value: plan.features.transferencia },
    { label: 'Procesamiento ultra rápido', value: plan.features.procesamiento },
    { label: 'Memoria RAM Dedicada', value: plan.features.memoriaRAM },
    { label: 'Promedio de visitas mensuales', value: plan.features.visitasMensuales },
    { label: 'Cuentas de correo profesional', value: plan.features.cuentasCorreo },
    { label: 'Bases de datos MySQL', value: plan.features.basesDatos },
    { label: 'Seguridad SSL', value: plan.features.ssl },
    { label: 'Panel de Control', value: plan.features.panelControl },
    { label: 'Servidor de Alta Velocidad', value: plan.features.servidor }
  ];
  
  const securityFeatures = [
    { label: 'Backup en servidores externos', value: plan.features.backup },
    { label: 'Antivirus de correo', value: plan.features.antivirus },
    { label: 'Alerta - Monitoreo web', value: plan.features.monitoreo },
    { label: 'Estadísticas de visita web', value: plan.features.estadisticas },
    { label: 'Herramienta Anti-SPAM', value: plan.features.antiSpam }
  ];
  
  const technicalFeatures = [
    { label: 'Acceso FTP', value: plan.features.ftp },
    { label: 'Subdominios', value: plan.features.subdominios },
    { label: 'Reenviadores de correo electrónico', value: plan.features.reenviadores },
    { label: 'Límite Envío de correos por Hora por usuario', value: plan.features.limiteUsuario },
    { label: 'Límite Envío de correo por Hora por dominio', value: plan.features.limiteDominio },
    { label: 'Autoresponders', value: plan.features.autoresponders },
    { label: 'Soporte POP/IMAP/SMTP', value: plan.features.soporteEmail },
    { label: 'Webmail', value: plan.features.webmail }
  ];
  
  const developmentFeatures = [
    { label: 'Software Apache 2.4', value: plan.features.apache },
    { label: 'Soporte PHP 7.2/ 8.2', value: plan.features.php },
    { label: 'phpMyAdmin', value: plan.features.phpMyAdmin },
    { label: 'Protección por contraseñas', value: plan.features.proteccion },
    { label: 'Personalización de páginas erróneas', value: plan.features.personalizacion },
    { label: 'Administración de archivos', value: plan.features.administracion }
  ];
  
  const systemLimits = [
    { label: 'Inodes', value: plan.features.inodes },
    { label: 'Total procesos activos', value: plan.features.procesosActivos },
    { label: 'Procesos de Entrada', value: plan.features.procesosEntrada }
  ];
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Overlay de fondo */}
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" 
          aria-hidden="true"
          onClick={onClose}
        ></div>

        {/* Centrar el modal */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        {/* Contenido del modal */}
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          {/* Encabezado del modal */}
          <div className="px-6 py-5 border-b border-gray-200 bg-blue-50">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-blue-700">
                Plan {plan.name}
              </h3>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <span className="sr-only">Cerrar</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Contenido del modal - Tabla de características */}
          <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
            <FeatureTable title="Características Generales" features={generalFeatures} />
            <FeatureTable title="Seguridad y Respaldo" features={securityFeatures} />
            <FeatureTable title="Características Técnicas" features={technicalFeatures} />
            <FeatureTable title="Características de Desarrollo" features={developmentFeatures} />
            <FeatureTable title="Límites del Sistema" features={systemLimits} />
          </div>
          
          {/* Pie del modal */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg mr-2 hover:bg-gray-300 transition-colors"
            >
              Cerrar
            </button>
            <a
              href="/contacto"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contratar ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 