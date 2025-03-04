import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from '@/app/components/animations/FadeIn';
import ScaleIn from '@/app/components/animations/ScaleIn';
import { 
    FaServer, 
    FaNetworkWired, 
    FaShieldAlt, 
    FaVideo, 
    FaMicrochip,
    FaTools,
    FaKey,
    FaHeadset
} from 'react-icons/fa';
import ScrollToTop from '@/app/components/ScrollToTop';
import Badge from '@/app/components/ui/Badge';

export const metadata: Metadata = {
    title: "Cloud Byte | Infraestructura TI",
    description: "Soluciones integrales de infraestructura TI: redes, servidores, IoT, videovigilancia y más. Optimice su infraestructura tecnológica con Cloud Byte.",
    keywords: "infraestructura TI, redes empresariales, servidores, IoT, videovigilancia, Cloud Byte",
};

const solucionesInfraestructura = [
    {
        titulo: "Redes y Conectividad",
        descripcion: "Implementación de switches, routers, firewalls y VPN para una conectividad segura y eficiente.",
        icono: <FaNetworkWired className="w-12 h-12 text-[#1f77d4]" />,
        caracteristicas: [
            "Switching de alta disponibilidad",
            "Routers avanzados",
            "Firewalls de última generación",
            "VPN empresarial"
        ]
    },
    {
        titulo: "Servidores y Almacenamiento",
        descripcion: "Soluciones de servidores físicos, virtuales y almacenamiento optimizado para empresas.",
        icono: <FaServer className="w-12 h-12 text-[#1f77d4]" />,
        caracteristicas: [
            "Virtualización VMware/Hyper-V",
            "Data Centers eficientes",
            "Almacenamiento NAS",
            "Sistemas de respaldo"
        ]
    },
    {
        titulo: "Internet de las Cosas (IoT)",
        descripcion: "Implementación de dispositivos IoT para automatización y monitoreo en tiempo real.",
        icono: <FaMicrochip className="w-12 h-12 text-[#1f77d4]" />,
        caracteristicas: [
            "IoT empresarial",
            "Sensores inteligentes",
            "Monitoreo remoto",
            "Redes IoT seguras"
        ]
    },
    {
        titulo: "Videovigilancia",
        descripcion: "Sistemas de videovigilancia inteligente con monitoreo remoto y almacenamiento en la nube.",
        icono: <FaVideo className="w-12 h-12 text-[#1f77d4]" />,
        caracteristicas: [
            "Cámaras IP inteligentes",
            "Monitoreo 24/7",
            "Almacenamiento cloud",
            "Alertas en tiempo real"
        ]
    }
];

const beneficios = [
    {
        titulo: "Reducción de Costos",
        descripcion: "Optimización de recursos y reducción de costos operativos",
        icono: "💰"
    },
    {
        titulo: "Escalabilidad",
        descripcion: "Infraestructura que crece con tu empresa",
        icono: "📈"
    },
    {
        titulo: "Seguridad Robusta",
        descripcion: "Protección integral de datos y sistemas",
        icono: "🛡️"
    },
    {
        titulo: "Alta Disponibilidad",
        descripcion: "Garantía de continuidad del negocio",
        icono: "⚡"
    }
];

// Añadir nuevas constantes para la información detallada
const descripcionGeneral = {
    titulo: "Infraestructura de TI - Cloud Byte",
    descripcion: `En Cloud Byte, entendemos que una infraestructura de TI sólida y bien diseñada es esencial 
                  para impulsar la productividad de su empresa y garantizar la continuidad del negocio. 
                  Nuestra misión es proporcionar soluciones integrales que cubran todas las necesidades tecnológicas, 
                  desde servidores y redes hasta plataformas de colaboración en la nube.`
};

const serviciosDetallados = [
    {
        titulo: "Consultoría y Diseño",
        descripcion: "Evaluación y diseño personalizado de infraestructura TI",
        caracteristicas: [
            "Análisis de infraestructura actual",
            "Diseño personalizado de soluciones",
            "Optimización de recursos",
            "Planificación estratégica"
        ]
    },
    {
        titulo: "Gestión de Licencias",
        descripcion: "Gestión eficiente de licencias de software empresarial",
        caracteristicas: [
            "Asesoría en adquisición",
            "Gestión de renovaciones",
            "Automatización de licencias",
            "Auditoría de software"
        ]
    },
    {
        titulo: "Soporte Técnico 24/7",
        descripcion: "Soporte continuo y mantenimiento proactivo",
        caracteristicas: [
            "Monitoreo 24/7",
            "Mantenimiento preventivo",
            "Soporte remoto y presencial",
            "Resolución rápida de incidentes"
        ]
    }
];

export default function InfraestructuraPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section con animaciones */}
            <section className="relative h-[700px] overflow-hidden">
                {/* Fondo con efecto parallax */}
                <div className="absolute inset-0 scale-105">
                    <Image
                        src="/images/infraestructura.jpg"
                        alt="Infraestructura TI" 
                        fill
                        className="object-cover brightness-[0.3] transform-gpu scale-105
                                 motion-safe:animate-subtle-zoom"
                        priority
                    />
                    
                    {/* Overlay gradiente y grid */}
                    <div className="absolute inset-0 bg-gradient-to-b 
                                  from-black/70 via-[#0a192f]/80 to-[#0a192f]" />
                    <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
                    
                    {/* Animación de infraestructura */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Líneas de conexión */}
                        <div className="network-lines">
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                        </div>
                        
                        {/* Nodos de red */}
                        <div className="network-nodes">
                            <div className="node node-1"></div>
                            <div className="node node-2"></div>
                            <div className="node node-3"></div>
                            <div className="node node-4"></div>
                        </div>
                        
                        {/* Servidores animados */}
                        <div className="servers">
                            <div className="server server-1"></div>
                            <div className="server server-2"></div>
                        </div>

                        {/* Animación de red mesh */}
                        <div className="network-mesh">
                            <div className="network-dot network-dot-1"></div>
                            <div className="network-dot network-dot-2"></div>
                            <div className="network-dot network-dot-3"></div>
                            <div className="network-dot network-dot-4"></div>
                            <div className="network-dot network-dot-5"></div>
                            
                            <div className="network-line network-line-1"></div>
                            <div className="network-line network-line-2"></div>
                            <div className="network-line network-line-3"></div>
                            <div className="network-line network-line-4"></div>
                        </div>
                    </div>
                </div>

                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn direction="up" duration={0.8}>
                            <Badge text="IT INFRASTRUCTURE" color="blue" />

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                                Infraestructura TI
                                <span className="block text-transparent bg-clip-text 
                                               bg-gradient-to-r from-[#1f77d4] to-blue-400
                                               animate-gradient">
                                    Para Tu Empresa
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                                Soluciones integrales que impulsan la productividad y garantizan 
                                la continuidad de su negocio con tecnología de vanguardia.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/contacto"
                                      className="group relative inline-flex items-center gap-2 
                                               px-8 py-4 bg-[#1f77d4] text-white font-medium 
                                               rounded-xl transition-all duration-300
                                               hover:bg-[#1f77d4]/90 hover:scale-105">
                                    <span>Solicitar Información</span>
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" 
                                              strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Indicador de scroll mejorado */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 
                                  flex items-start justify-center p-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* Descripción General */}
            <section className="py-20 bg-[#0a192f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Soluciones Integrales de Infraestructura
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                {descripcionGeneral.descripcion}
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Beneficios */}
            <section className="py-20 bg-[#0a192f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-16 text-center">
                            Beneficios de Nuestra Infraestructura
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {beneficios.map((beneficio, index) => (
                                <ScaleIn key={index} delay={index * 0.1}>
                                    <div className="group h-full bg-[#1f2a38] p-8 rounded-xl 
                                                  border border-[#1f77d4]/20 hover:border-[#1f77d4]/40 
                                                  transition-all duration-300 flex flex-col min-h-[280px] 
                                                  shadow-lg hover:shadow-xl">
                                        <div className="mb-6 flex justify-center">
                                            <span className="text-4xl">{beneficio.icono}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-4 text-center">
                                            {beneficio.titulo}
                                        </h3>
                                        <p className="text-gray-400 group-hover:text-gray-300 
                                                    transition-colors flex-grow text-center">
                                            {beneficio.descripcion}
                                        </p>
                                    </div>
                                </ScaleIn>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Soluciones Principales */}
            <section className="py-20 bg-[#0a192f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-16 text-center">
                            Nuestras Soluciones
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {solucionesInfraestructura.map((solucion, index) => (
                                <ScaleIn key={index} delay={index * 0.1}>
                                    <div className="group h-full bg-[#0c1e3b] p-8 rounded-xl 
                                                  border border-[#1f77d4]/20 hover:border-[#1f77d4]/40 
                                                  transition-all duration-300 flex flex-col min-h-[280px]">
                                        <div className="mb-6">
                                            {solucion.icono}
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-4">
                                            {solucion.titulo}
                                        </h3>
                                        <p className="text-gray-400 group-hover:text-gray-300 
                                                    transition-colors mb-6">
                                            {solucion.descripcion}
                                        </p>
                                        <ul className="list-disc list-inside text-gray-400 
                                                     space-y-2 mt-auto">
                                            {solucion.caracteristicas.map((caracteristica, idx) => (
                                                <li key={idx} className="group-hover:text-gray-300 
                                                                       transition-colors">
                                                    {caracteristica}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScaleIn>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Servicios Adicionales */}
            <section className="py-20 bg-[#0a192f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviciosDetallados.map((servicio, index) => (
                            <ScaleIn key={index} delay={index * 0.1}>
                                <div className="p-6 bg-white/5 rounded-xl
                                              border border-[#1f77d4]/10 hover:border-[#1f77d4]/30
                                              transition-all duration-300">
                                    <h3 className="text-xl font-semibold text-white mb-4">
                                        {servicio.titulo}
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        {servicio.descripcion}
                                    </p>
                                    <ul className="space-y-2">
                                        {servicio.caracteristicas.map((item, idx) => (
                                            <li key={idx} className="flex items-center text-gray-300">
                                                <svg className="w-4 h-4 mr-2 text-[#1f77d4]" 
                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                                          strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScaleIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final - Siempre al último */}
            <section className="py-20 bg-[#0a192f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeIn direction="up">
                        <h2 className="text-3xl font-bold text-white mb-8">
                            ¿Listo para iniciar tu transformación digital?
                        </h2>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center px-8 py-4 bg-[#1f77d4] 
                                     text-white font-semibold rounded-lg transition-all 
                                     hover:bg-[#1f77d4]/90 hover:scale-105 duration-300"
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