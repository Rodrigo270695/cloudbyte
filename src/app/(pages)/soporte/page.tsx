import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from '@/app/components/animations/FadeIn';
import ScaleIn from '@/app/components/animations/ScaleIn';
import { FaDownload, FaClock, FaHeadset, FaTools, FaServer } from 'react-icons/fa';
import Badge from '@/app/components/ui/Badge';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Cloud Byte | Soporte Técnico Especializado",
    description: "Servicios de soporte técnico especializado 24/7. Planes flexibles adaptados a sus necesidades empresariales.",
    keywords: "soporte técnico, soporte 24/7, soporte TI, mantenimiento TI, help desk",
};

const planesSoporte = [
    {
        titulo: "Enterprise 24x7",
        nivel: "Nivel 1 - Soporte Continuo",
        descripcion: "Soporte ininterrumpido para empresas que requieren atención inmediata y constante.",
        caracteristicas: [
            "Atención 24x7 los 365 días",
            "Soporte remoto y presencial",
            "Escalamiento a proveedores",
            "Mantenimiento preventivo y correctivo",
            "Gestión ITIL de incidencias",
            "Actualizaciones de software",
            "Planificación de capacidad"
        ],
        destacado: true
    },
    {
        titulo: "Estándar 8x5",
        nivel: "Nivel 2 - Soporte Empresarial",
        descripcion: "Ideal para empresas que necesitan soporte en horario laboral.",
        caracteristicas: [
            "Atención L-V 9am a 5pm",
            "Soporte remoto y presencial",
            "Escalamiento a proveedores",
            "Mantenimiento programado",
            "Gestión de incidencias",
            "Actualizaciones de software",
            "Base de conocimientos"
        ],
        destacado: false
    },
    {
        titulo: "A Demanda",
        nivel: "Nivel 3 - Soporte bajo Solicitud",
        descripcion: "Flexibilidad total para soporte según necesidades específicas.",
        caracteristicas: [
            "Soporte flexible 8x5 o 24x7",
            "Atención multicanal",
            "Soporte en sitio",
            "Escalamiento a proveedores",
            "Gestión de incidencias",
            "Mantenimiento correctivo",
            "Bolsa de horas flexible"
        ],
        destacado: false
    }
];

const slas = [
    {
        nivel: "Crítica",
        impacto: "Alto",
        tiempo: "30 minutos",
        descripcion: "Problemas que afectan la operativa crítica del negocio.",
        ejemplos: "Caídas de servidores, interrupción en servicios clave",
        icono: "🔴"
    },
    {
        nivel: "Media",
        impacto: "Moderado",
        tiempo: "4 horas",
        descripcion: "Problemas que impactan parcialmente las operaciones.",
        ejemplos: "Fallos en aplicaciones secundarias, interrupciones menores",
        icono: "🟡"
    },
    {
        nivel: "Baja",
        impacto: "Bajo",
        tiempo: "8 horas",
        descripcion: "Problemas que no afectan significativamente las operaciones.",
        ejemplos: "Consultas de configuración, solicitudes de información",
        icono: "🟢"
    }
];

export default function SoportePage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section con animaciones */}
            <section className="relative h-[700px] overflow-hidden">
                {/* Fondo con efecto parallax */}
                <div className="absolute inset-0 scale-105">
                    <Image
                        src="/images/soporte.jpg"
                        alt="Soporte Técnico"
                        fill
                        className="object-cover brightness-[0.3] transform-gpu scale-105
                                 motion-safe:animate-subtle-zoom"
                        priority
                    />
                    
                    {/* Overlay gradiente y grid */}
                    <div className="absolute inset-0 bg-gradient-to-b 
                                  from-black/70 via-[#0a192f]/80 to-[#0a192f]" />
                    <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
                    
                    {/* Animaciones de soporte */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Puntos de conexión */}
                        <div className="support-dots">
                            <div className="support-dot support-dot-1"></div>
                            <div className="support-dot support-dot-2"></div>
                            <div className="support-dot support-dot-3"></div>
                            <div className="support-line support-line-1"></div>
                            <div className="support-line support-line-2"></div>
                        </div>

                        {/* Círculos de pulso */}
                        <div className="pulse-circles">
                            <div className="pulse-circle"></div>
                            <div className="pulse-circle delay-1"></div>
                            <div className="pulse-circle delay-2"></div>
                        </div>

                        {/* Iconos flotantes */}
                        <div className="floating-icons">
                            <FaHeadset className="floating-icon icon-1" />
                            <FaTools className="floating-icon icon-2" />
                            <FaServer className="floating-icon icon-3" />
                        </div>
                    </div>
                </div>

                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn direction="up" duration={0.8}>
                            <Badge text="SOPORTE TÉCNICO" color="blue" />

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                                Soporte Técnico
                                <span className="block text-transparent bg-clip-text 
                                               bg-gradient-to-r from-[#1f77d4] to-blue-400
                                               animate-gradient">
                                    Especializado
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                                Nuestro equipo de especialistas está dedicado a garantizar que su 
                                infraestructura tecnológica funcione sin problemas 24/7.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/contacto"
                                      className="group relative inline-flex items-center gap-2 
                                               px-8 py-4 bg-[#1f77d4] text-white font-medium 
                                               rounded-xl transition-all duration-300
                                               hover:bg-[#1f77d4]/90 hover:scale-105">
                                    <span>Solicitar Soporte</span>
                                    <FaHeadset className="w-5 h-5" />
                                </Link>

                                <a href="https://rustdesk.com/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="group relative inline-flex items-center gap-2 
                                            px-8 py-4 bg-white/10 text-white font-medium 
                                            rounded-xl transition-all duration-300
                                            hover:bg-white/20">
                                    <span>Descargar RustDesk</span>
                                    <FaDownload className="w-5 h-5 transition-transform 
                                                         group-hover:translate-y-1" />
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Indicador de scroll */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 
                                  flex items-start justify-center p-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* Planes de Soporte */}
            <section className="py-20 bg-[#0a192f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-16 text-center">
                            Nuestros Planes de Soporte
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {planesSoporte.map((plan, index) => (
                                <ScaleIn key={index} delay={index * 0.1}>
                                    <div className={`h-full p-8 rounded-xl transition-all duration-300
                                                   flex flex-col ${plan.destacado 
                                                   ? 'bg-[#1f77d4]/10 border-2 border-[#1f77d4]' 
                                                   : 'bg-white/5 border border-white/10'}`}>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {plan.titulo}
                                        </h3>
                                        <p className="text-[#1f77d4] font-medium mb-4">
                                            {plan.nivel}
                                        </p>
                                        <p className="text-gray-400 mb-6">
                                            {plan.descripcion}
                                        </p>
                                        <ul className="space-y-3 mb-8 flex-grow">
                                            {plan.caracteristicas.map((item, idx) => (
                                                <li key={idx} className="flex items-center text-gray-300">
                                                    <svg className="w-5 h-5 mr-3 text-[#1f77d4]" 
                                                         fill="none" viewBox="0 0 24 24" 
                                                         stroke="currentColor">
                                                        <path strokeLinecap="round" 
                                                              strokeLinejoin="round" 
                                                              strokeWidth={2} 
                                                              d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href="/contacto"
                                              className={`text-center py-3 px-6 rounded-lg 
                                                        transition-all duration-300 ${plan.destacado
                                                        ? 'bg-[#1f77d4] text-white hover:bg-[#1f77d4]/90'
                                                        : 'bg-white/10 text-white hover:bg-white/20'}`}>
                                            Solicitar Plan
                                        </Link>
                                    </div>
                                </ScaleIn>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* SLAs */}
            <section className="py-20 bg-[#0a192f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-16 text-center">
                            Acuerdos de Nivel de Servicio (SLA)
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {slas.map((sla, index) => (
                                <ScaleIn key={index} delay={index * 0.1}>
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                                        <div className="flex items-center mb-4">
                                            <span className="text-2xl mr-3">{sla.icono}</span>
                                            <div>
                                                <h3 className="text-xl font-semibold text-white">
                                                    {sla.nivel}
                                                </h3>
                                                <p className="text-[#1f77d4]">
                                                    Impacto {sla.impacto}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-4 text-white">
                                            <FaClock className="mr-2" />
                                            <span>Respuesta en {sla.tiempo}</span>
                                        </div>
                                        <p className="text-gray-400 mb-4">
                                            {sla.descripcion}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Ejemplos: {sla.ejemplos}
                                        </p>
                                    </div>
                                </ScaleIn>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-[#0a192f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeIn direction="up">
                        <h2 className="text-3xl font-bold text-white mb-8">
                            ¿Necesita soporte técnico especializado?
                        </h2>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center px-8 py-4 bg-[#1f77d4] 
                                     text-white font-semibold rounded-lg transition-all 
                                     hover:bg-[#1f77d4]/90 hover:scale-105 duration-300"
                        >
                            Contáctenos ahora
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
} 