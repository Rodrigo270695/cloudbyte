import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from '@/app/components/animations/FadeIn';
import ScaleIn from '@/app/components/animations/ScaleIn';
import SlideIn from '@/app/components/animations/SlideIn';
import ScrollToTop from '@/app/components/ScrollToTop';
import Badge from '@/app/components/ui/Badge';

export const metadata: Metadata = {
  title: "Cloud Byte | Servicios TI",
  description: "Impulsa tu empresa con nuestros servicios de TI especializados: infraestructura, soporte 24/7, assessment TI y soluciones cloud. Expertos en transformación digital empresarial.",
  keywords: "servicios TI, transformación digital, infraestructura TI, soporte técnico empresarial, consultoría TI, Cloud Byte",
};

export default function ServiciosTIPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section con Parallax y Glassmorphism */}
            <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
                {/* Fondo con efecto parallax */}
                <div className="absolute inset-0 scale-105">
                    <Image
                        src="/images/servicios-ti.jpg"
                        alt="Servicios de TI y Transformación Digital"
                        fill
                        className="object-cover transform-gpu brightness-[0.7] scale-105
                                 motion-safe:animate-subtle-zoom"
                        priority
                    />
                    {/* Overlay gradiente moderno */}
                    <div className="absolute inset-0 bg-gradient-to-b 
                                  from-black/70 via-black/50 to-[#0a192f]" />
                </div>
                
                {/* Elementos decorativos modernos */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full 
                                  bg-[url('/patterns/grid.svg')] opacity-20" />
                    <div className="absolute top-20 left-20 w-72 h-72 
                                  bg-blue-500/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-20 w-72 h-72 
                                  bg-indigo-500/20 rounded-full blur-3xl" />
                </div>

                {/* Contenido del Hero */}
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn direction="up" duration={0.8} distance={50}>
                            <div className="max-w-3xl">
                                <Badge text="IT SERVICES" color="purple" />

                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold 
                                           text-white mb-6 leading-tight">
                                    Servicios TI para la
                                    <span className="block text-transparent bg-clip-text 
                                                   bg-gradient-to-r from-blue-400 to-indigo-400
                                                   animate-gradient">
                                        Transformación Digital
                                    </span>
                                </h1>

                                <p className="text-xl text-gray-300 max-w-2xl mb-8
                                          leading-relaxed">
                                    Impulsamos el futuro de tu empresa a través de soluciones 
                                    tecnológicas innovadoras y servicios especializados
                                </p>

                                {/* Botones con diseño moderno */}
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contacto"
                                        className="group relative inline-flex items-center gap-2 
                                                 px-8 py-4 bg-blue-600 text-white font-medium 
                                                 rounded-xl transition-all duration-300
                                                 hover:bg-blue-700 hover:scale-105
                                                 focus:outline-none focus:ring-2 
                                                 focus:ring-blue-500 focus:ring-offset-2
                                                 focus:ring-offset-[#0a192f]"
                                    >
                                        Contactar ahora
                                        <svg className="w-5 h-5 transition-transform 
                                                    group-hover:translate-x-1" 
                                             fill="none" viewBox="0 0 24 24" 
                                             stroke="currentColor">
                                            <path strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth={2} 
                                                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </Link>
                                    
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 
                                  flex items-start justify-center p-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/70 
                                      animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* Nueva sección de Visión General */}
            <section className="py-20 bg-gradient-to-b from-[#0a192f] to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up" threshold={0.3}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Transformación Digital para Empresas
                            </h2>
                            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                                En CLOUD BYTE, entendemos que la transformación digital es clave para 
                                el éxito y la sostenibilidad de las empresas en la era moderna.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviciosTransformacion.map((servicio, index) => (
                            <ScaleIn 
                                key={servicio.titulo} 
                                delay={index * 0.2} 
                                duration={0.6}
                                threshold={0.2}
                            >
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 
                                              border border-gray-700 hover:bg-white/10 
                                              transition-all duration-300 h-full">
                                    <div className="text-4xl mb-4">{servicio.icono}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {servicio.titulo}
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        {servicio.descripcion}
                                    </p>
                                    <ul className="space-y-2">
                                        {servicio.caracteristicas.map((caracteristica, idx) => (
                                            <li key={idx} className="text-gray-400 flex items-center">
                                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                                                {caracteristica}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScaleIn>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <FadeIn direction="up" delay={0.3}>
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                                Como empresa de consultoría informática, brindamos servicios de 
                                asesoramiento e implementación de mejores prácticas en la gestión 
                                de Tecnologías de la Información (TI), enfocados en la transformación 
                                digital y la optimización de sistemas TI.
                            </p>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center px-8 py-4 bg-blue-600 
                                         text-white font-semibold rounded-lg transition-all 
                                         hover:bg-blue-700 hover:scale-105"
                            >
                                Contacte con un Especialista
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Sección de Planes de Soporte */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SlideIn direction="right" duration={1} threshold={0.3}>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    Planes de Soporte Personalizados
                                </h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    Contamos con planes de atención diseñados para su empresa, ajustados a sus necesidades específicas.
                                </p>
                                <div className="space-y-6">
                                    {planesAtencion.map((plan, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 
                                                          flex items-center justify-center">
                                                <span className="text-2xl">{plan.icon}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                    {plan.title}
                                                </h3>
                                                <p className="text-gray-600">{plan.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/soporte-tecnico.jpg"
                                    alt="Soporte Técnico Especializado"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </SlideIn>
                </div>
            </section>

            {/* Assessment de TI */}
            <section className="py-20 bg-gradient-to-r from-[#0a192f] to-[#1f77d4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up" stagger={true} threshold={0.4}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Assessment de TI
                            </h2>
                            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                                Evaluación completa para una Transformación Digital Sostenible
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {areasAssessment.map((area, index) => (
                                <ScaleIn 
                                    key={area.title} 
                                    delay={index * 0.1}
                                    threshold={0.2}
                                >
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl 
                                                  border border-white/20 hover:bg-white/20 
                                                  transition-all duration-300">
                                        <div className="text-3xl mb-4 text-blue-400">
                                            {area.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            {area.title}
                                        </h3>
                                        <p className="text-gray-300">
                                            {area.description}
                                        </p>
                                    </div>
                                </ScaleIn>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Implementación y Gestión */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up" threshold={0.3}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Servicios de Implementación y Gestión
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Soluciones tecnológicas avanzadas con gestión y monitoreo continuo
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {serviciosImplementacion.map((servicio, index) => (
                                <SlideIn 
                                    key={servicio.title}
                                    direction={index % 2 === 0 ? 'left' : 'right'}
                                    delay={index * 0.2}
                                >
                                    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl 
                                                  transition-all duration-300">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            {servicio.title}
                                        </h3>
                                        <ul className="space-y-3">
                                            {servicio.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <span className="text-blue-600 mt-1">•</span>
                                                    <span className="text-gray-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </SlideIn>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Monitoreo Continuo */}
            <section className="py-20 bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#0a192f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up" threshold={0.3}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Monitoreo Continuo y Optimización
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                El monitoreo constante de la infraestructura tecnológica es esencial 
                                para identificar y corregir problemas antes de que afecten las operaciones.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {serviciosMonitoreo.map((servicio, index) => (
                                <ScaleIn 
                                    key={servicio.title}
                                    delay={index * 0.2}
                                    threshold={0.2}
                                >
                                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 
                                                  border border-gray-700 hover:bg-white/10 
                                                  transition-all duration-300">
                                        <div className="text-4xl mb-6 text-blue-400">
                                            {servicio.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">
                                            {servicio.title}
                                        </h3>
                                        <p className="text-gray-300">
                                            {servicio.description}
                                        </p>
                                    </div>
                                </ScaleIn>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Otros Servicios */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up" threshold={0.3}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Otros Servicios para la Gestión Integral de TI
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otrosServicios.map((servicio, index) => (
                                <SlideIn 
                                    key={servicio.title}
                                    direction={index % 2 === 0 ? 'left' : 'right'}
                                    delay={index * 0.2}
                                >
                                    <div className="bg-gray-50 rounded-xl p-8 shadow-lg 
                                                  hover:shadow-xl transition-all duration-300 
                                                  border border-gray-100">
                                        <div className="text-4xl mb-6 text-blue-600">
                                            {servicio.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            {servicio.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {servicio.description}
                                        </p>
                                    </div>
                                </SlideIn>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-[#0a192f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeIn direction="up" duration={0.7} distance={30}>
                        <h2 className="text-3xl font-bold text-white mb-8">
                            ¿Listo para iniciar tu transformación digital?
                        </h2>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center px-8 py-4 bg-[#1f77d4] 
                                     text-white font-semibold rounded-lg transition-all 
                                     hover:bg-blue-600 hover:scale-105"
                        >
                            Contacta con un especialista
                        </Link>
                    </FadeIn>
                </div>
            </section>

            <ScrollToTop />
        </main>
    );
}

const planesAtencion = [
    {
        icon: '🔄',
        title: '24x7 Todo el Año',
        description: 'Soporte técnico ininterrumpido los 365 días del año'
    },
    {
        icon: '📅',
        title: '8x5 Horario Laboral',
        description: 'Atención de lunes a viernes en horario de oficina'
    },
    {
        icon: '⏱️',
        title: 'Bolsas de Horas',
        description: 'Planes flexibles ajustados a sus necesidades específicas'
    }
];

const areasAssessment = [
    {
        icon: '🌐',
        title: 'Redes y Data Centers',
        description: 'Evaluación completa de infraestructura de red y centros de datos'
    },
    {
        icon: '💾',
        title: 'Almacenamiento',
        description: 'Análisis de centros de almacenamiento y sistemas de respaldo'
    },
    {
        icon: '🖥️',
        title: 'Servidores y Aplicativos',
        description: 'Revisión de ambiente de servidores y aplicaciones empresariales'
    },
    {
        icon: '🖨️',
        title: 'Dispositivos y Usuarios',
        description: 'Evaluación de ambiente de impresión y dispositivos de usuarios'
    },
    {
        icon: '🛡️',
        title: 'Seguridad y Backup',
        description: 'Análisis de seguridad perimetral y sistemas de respaldo'
    },
    {
        icon: '📋',
        title: 'Políticas y Procesos',
        description: 'Revisión de políticas, procedimientos y flujos de valor'
    }
];

const serviciosImplementacion = [
    {
        title: 'Sistemas de Dominio',
        icon: '🔐',
        features: [
            'Directorio Activo (AD) para administración centralizada',
            'Servidores DNS para resolución de nombres',
            'Servidores DHCP para asignación de IPs'
        ]
    },
    {
        title: 'Bases de Datos',
        icon: '💽',
        features: [
            'Implementación de ORACLE y SQL Server',
            'Gestión en entornos On-premise y Azure',
            'Mantenimiento preventivo y correctivo'
        ]
    },
    {
        title: 'Servidores y Virtualización',
        icon: '🖥️',
        features: [
            'Servidores Linux (Red Hat, Debian, Ubuntu)',
            'Virtualización con VMware y Hyper-V',
            'Servidores de impresión centralizados'
        ]
    },
    {
        title: 'Almacenamiento y Respaldo',
        icon: '💾',
        features: [
            'Soluciones NAS para almacenamiento en red',
            'Sistemas de backup y recuperación',
            'Protección de datos críticos'
        ]
    }
];

const serviciosMonitoreo = [
    {
        title: 'Monitoreo de Redes',
        icon: '🌐',
        description: 'Identificación y resolución de problemas de red para asegurar que sus comunicaciones internas y externas funcionen sin interrupciones.'
    },
    {
        title: 'Monitoreo de Servidores',
        icon: '🖥️',
        description: 'Supervisión continua de servidores, bases de datos y aplicaciones para detectar fallos y optimizar su rendimiento.'
    },
    {
        title: 'Monitoreo de Seguridad',
        icon: '🛡️',
        description: 'Evaluación constante de la seguridad para proteger su infraestructura contra amenazas cibernéticas.'
    }
];

const otrosServicios = [
    {
        title: 'Auditoría y Evaluación de TI',
        icon: '📊',
        description: 'Realizamos auditorías de seguridad y rendimiento de su infraestructura para asegurar que sus sistemas operen al máximo de su capacidad.'
    },
    {
        title: 'Administración de Dispositivos',
        icon: '📱',
        description: 'Implementación de Microsoft Intune para gestionar dispositivos móviles y puntos finales de forma segura, protegiendo los datos corporativos.'
    },
    {
        title: 'Help Desk y Gestión',
        icon: '🎯',
        description: 'Implementación de un Service Desk para gestionar tickets de soporte, control de inventarios de equipos y dispositivos, y facilitar la comunicación entre departamentos.'
    }
];

const serviciosTransformacion = [
    {
        titulo: 'Infraestructura TI',
        descripcion: 'Diseño e implementación de infraestructura tecnológica escalable y robusta.',
        icono: '🖥️',
        caracteristicas: [
            'Servidores y virtualización',
            'Redes y comunicaciones',
            'Almacenamiento y respaldo',
            'Seguridad perimetral'
        ]
    },
    {
        titulo: 'Soporte 24/7',
        descripcion: 'Servicio de soporte técnico continuo para mantener tus operaciones funcionando sin interrupciones.',
        icono: '🔄',
        caracteristicas: [
            'Monitoreo proactivo',
            'Respuesta inmediata',
            'Soporte remoto y presencial',
            'Gestión de incidentes'
        ]
    },
    {
        titulo: 'Assessment TI',
        descripcion: 'Evaluación completa de tu infraestructura tecnológica para optimizar recursos y procesos.',
        icono: '📊',
        caracteristicas: [
            'Análisis de sistemas',
            'Evaluación de seguridad',
            'Optimización de recursos',
            'Recomendaciones estratégicas'
        ]
    },
    {
        titulo: 'Transformación Digital',
        descripcion: 'Implementación de soluciones innovadoras para modernizar tu empresa.',
        icono: '🚀',
        caracteristicas: [
            'Automatización de procesos',
            'Soluciones cloud',
            'Integración de sistemas',
            'Innovación tecnológica'
        ]
    },
    {
        titulo: 'Gestión de Datos',
        descripcion: 'Administración eficiente de bases de datos y sistemas de almacenamiento.',
        icono: '💾',
        caracteristicas: [
            'Bases de datos SQL y NoSQL',
            'Respaldo y recuperación',
            'Optimización de rendimiento',
            'Seguridad de datos'
        ]
    },
    {
        titulo: 'Ciberseguridad',
        descripcion: 'Protección integral de tu infraestructura y datos contra amenazas digitales.',
        icono: '🔒',
        caracteristicas: [
            'Auditorías de seguridad',
            'Protección contra malware',
            'Gestión de accesos',
            'Cumplimiento normativo'
        ]
    }
]; 
