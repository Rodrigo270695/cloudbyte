import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from '@/app/components/animations/FadeIn';
import ScaleIn from '@/app/components/animations/ScaleIn';
import SlideIn from '@/app/components/animations/SlideIn';
import ScrollToTop from '@/app/components/ScrollToTop';
import Badge from '@/app/components/ui/Badge';

export const metadata: Metadata = {
    title: "Cloud Byte | Ciberseguridad Empresarial",
    description: "Proteja su empresa contra amenazas cibernéticas con nuestras soluciones de seguridad avanzadas. Servicios de ciberseguridad integral: firewalls, EDR, pentesting, SIEM y más.",
    keywords: "ciberseguridad empresarial, seguridad informática, protección de datos, firewall, EDR, pentesting, SIEM, Cloud Byte, auditoría de seguridad",
};

// Definimos los servicios de ciberseguridad completos
const serviciosCiberseguridad = [
    {
        titulo: 'Firewall de Nueva Generación (NGFW)',
        descripcion: 'Implementación y configuración de firewalls avanzados basados en Hardware y Software, para proteger redes de intrusiones externas, filtrado de contenido, control de aplicaciones y análisis de tráfico en tiempo real.',
        icono: '🛡️'
    },
    {
        titulo: 'Seguridad para Redes Inalámbricas (Wi-Fi)',
        descripcion: 'Implementación de seguridad avanzada para redes Wi-Fi empresariales.',
        caracteristicas: [
            'Seguridad para redes internas y públicas',
            'Configuración WPA3',
            'Cifrado avanzado de comunicaciones'
        ],
        icono: '📡'
    },
    {
        titulo: 'Protección para Endpoints',
        descripcion: 'Soluciones completas de protección para dispositivos finales.',
        caracteristicas: [
            'Antivirus y Antimalware contra amenazas conocidas y desconocidas',
            'EDR (Endpoint Detection and Response)',
            'Implementación de Kaspersky, McAfee, Trend Micro'
        ],
        icono: '💻'
    },
    {
        titulo: 'Prevención de Pérdida de Datos (DLP)',
        descripcion: 'Protección contra la fuga de información sensible.',
        caracteristicas: [
            'Implementación de soluciones DLP',
            'Integración de Microsoft DLP',
            'Soluciones avanzadas como Forcepoint o Digital Guardian'
        ],
        icono: '🔒'
    },
    {
        titulo: 'Gestión de Identidades y Accesos (IAM)',
        descripcion: 'Control de accesos y autenticación avanzada.',
        caracteristicas: [
            'Autenticación multifactor (MFA)',
            'Gestión de identidades',
            'Single Sign-On (SSO)'
        ],
        icono: '🔑'
    },
    {
        titulo: 'Análisis de Amenazas e Inteligencia Cibernética',
        descripcion: 'Monitoreo y análisis proactivo de amenazas.',
        caracteristicas: [
            'Threat Intelligence actualizada',
            'Análisis en tiempo real',
            'Mitigación proactiva de riesgos'
        ],
        icono: '🔍'
    },
    {
        titulo: 'Pruebas de Penetración (Pentesting)',
        descripcion: 'Evaluación exhaustiva de seguridad.',
        caracteristicas: [
            'Pruebas de penetración',
            'Auditorías de seguridad',
            'Simulación de ataques'
        ],
        icono: '🎯'
    },
    {
        titulo: 'Protección de Aplicaciones Web (WAF)',
        descripcion: 'Seguridad específica para aplicaciones web.',
        caracteristicas: [
            'Protección contra SQL injection',
            'Defensa contra Cross-Site Scripting (XSS)',
            'Prevención de ataques de día cero'
        ],
        icono: '🌐'
    },
    {
        titulo: 'Gestión de Vulnerabilidades',
        descripcion: 'Identificación y corrección de vulnerabilidades.',
        caracteristicas: [
            'Evaluación con Qualys o Tenable',
            'Gestión continua de parches',
            'Remediación de vulnerabilidades'
        ],
        icono: '🔧'
    },
    {
        titulo: 'Monitoreo Continuo y SIEM',
        descripcion: 'Gestión centralizada de eventos de seguridad.',
        caracteristicas: [
            'Implementación de SIEM',
            'Análisis de logs en tiempo real',
            'Soluciones: Splunk, IBM QRadar, LogRhythm, Wazuh'
        ],
        icono: '📊'
    }
];

// Definimos los tipos de backup
const tiposBackup = [
    {
        tipo: 'Backup On-Premise',
        descripcion: 'Soluciones de respaldo local con RAID, tape drives, y NAS.',
        icono: '💾'
    },
    {
        tipo: 'Backup en la Nube',
        descripcion: 'Copias de seguridad en la nube para protección de datos críticos.',
        icono: '☁️'
    },
    {
        tipo: 'Backup en la Nube Privada',
        descripcion: 'Servidores dedicados en AWS, Azure o Google Cloud.',
        icono: '🔐'
    },
    {
        tipo: 'Backup Híbrido',
        descripcion: 'Combinación de copias locales y en la nube.',
        icono: '🔄'
    }
];

// Definimos los tipos específicos de backup
const tiposBackupEspecificos = [
    {
        tipo: 'Backup Completo o Full',
        descripcion: 'Copia de todos los datos seleccionados en su totalidad.'
    },
    {
        tipo: 'Backup Incremental',
        descripcion: 'Solo se respaldan los cambios desde la última copia.'
    },
    {
        tipo: 'Backup Diferencial',
        descripcion: 'Copia de cambios desde el último backup completo.'
    },
    {
        tipo: 'Backup Continuo',
        descripcion: 'Copias en tiempo real para mínima pérdida de datos.'
    },
    {
        tipo: 'Backup de Imágenes',
        descripcion: 'Copia exacta del sistema completo.'
    }
];

// Servicios adicionales
const serviciosAdicionales = [
    {
        titulo: 'Cifrado de Datos',
        descripcion: 'Protección de información sensible.',
        caracteristicas: [
            'Cifrado de datos en reposo y en tránsito',
            'Soluciones Vormetric y BitLocker'
        ],
        icono: '🔐'
    },
    {
        titulo: 'Cumplimiento y Auditorías',
        descripcion: 'Cumplimiento normativo y evaluaciones.',
        caracteristicas: [
            'GDPR, HIPAA, PCI-DSS, ISO 27001',
            'Auditorías de seguridad completas'
        ],
        icono: '📋'
    }
];

export default function CiberseguridadPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section con Efecto Matrix/Cyber */}
            <section className="relative h-[700px] overflow-hidden bg-[#020617]">
                {/* Fondo dinámico de ciberseguridad */}
                <div className="absolute inset-0">
                    {/* Capa base con gradiente */}
                    <div className="absolute inset-0 bg-gradient-radial from-blue-950 via-[#020617] to-black" />
                    
                    {/* Efecto Matrix mejorado */}
                    <div className="absolute inset-0 matrix-rain opacity-30" />
                    
                    {/* Grid digital con animación */}
                    <div className="absolute inset-0"
                         style={{
                             backgroundImage: `
                                 linear-gradient(to right, #193d6955 1px, transparent 1px),
                                 linear-gradient(to bottom, #193d6955 1px, transparent 1px)
                             `,
                             backgroundSize: '24px 24px',
                         }} />

                    {/* Elementos de diseño cibernético */}
                    <div className="absolute inset-0">
                        {/* Círculos de protección */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                      w-[800px] h-[800px] opacity-20">
                            <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full 
                                          animate-[spin_60s_linear_infinite]" />
                            <div className="absolute inset-[100px] border border-red-500/20 rounded-full 
                                          animate-[spin_40s_linear_infinite_reverse]" />
                            <div className="absolute inset-[200px] border border-cyan-500/20 rounded-full 
                                          animate-[spin_30s_linear_infinite]" />
                        </div>

                        {/* Partículas flotantes */}
                        <div className="absolute inset-0">
                            <div className="absolute h-2 w-2 bg-blue-500/50 rounded-full top-1/4 left-1/4 
                                          animate-float" />
                            <div className="absolute h-2 w-2 bg-red-500/50 rounded-full top-3/4 left-2/3 
                                          animate-float-delay" />
                            <div className="absolute h-2 w-2 bg-cyan-500/50 rounded-full top-1/2 left-1/3 
                                          animate-float-slow" />
                        </div>

                        {/* Líneas de conexión */}
                        <div className="absolute inset-0">
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r 
                                          from-transparent via-blue-500/20 to-transparent animate-pulse-slow" />
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r 
                                          from-transparent via-red-500/20 to-transparent animate-pulse-slow" />
                        </div>

                        {/* Hexágonos de seguridad */}
                        <div className="absolute inset-0 cyber-hexagons opacity-10" />
                    </div>

                    {/* Overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-b 
                                  from-transparent via-[#020617]/50 to-[#020617]" />
                </div>

                {/* Contenido principal con glassmorphism */}
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn direction="up" duration={0.8}>
                            <Badge text="THREAT PROTECTION ACTIVE" color="red" />

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 
                                       leading-tight tracking-tight">
                                Servicios de 
                                <span className="block text-transparent bg-clip-text 
                                               bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600
                                               animate-gradient-slow relative">
                                    Ciberseguridad Empresarial
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 
                                                  to-cyan-400/20 blur-xl opacity-50 -z-10"></div>
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed 
                                      font-light tracking-wide">
                                Protegemos su empresa contra amenazas cibernéticas avanzadas 
                                con soluciones de seguridad de última generación y monitoreo 24/7.
                            </p>

                            {/* CTA Buttons mejorados */}
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contacto"
                                      className="group relative inline-flex items-center gap-3 
                                               px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                                               text-white font-medium rounded-lg overflow-hidden
                                               hover:from-blue-700 hover:to-blue-800 
                                               transition-all duration-300">
                                    <span className="relative z-10 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" 
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" 
                                                  strokeWidth={2} 
                                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        Solicitar Evaluación
                                    </span>
                                    <div className="absolute inset-0 -translate-x-full hover:translate-x-0 
                                                  bg-gradient-to-r from-blue-700 to-blue-800 
                                                  transition-transform duration-300"></div>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Indicador de scroll */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-6 h-10 rounded-full border-2 border-blue-500/30 
                                  flex items-start justify-center p-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/70 
                                      animate-bounce"></div>
                    </div>
                </div>
            </section>

            {/* Después del Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-[#020617] to-[#0a192f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Introducción */}
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <FadeIn>
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Protección Integral para su Empresa
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                En un mundo cada vez más digitalizado, las amenazas cibernéticas se presentan 
                                como una de las mayores preocupaciones para las empresas. Se estima que las 
                                organizaciones pueden perder hasta un 70% de su valor debido a un ciberataque, 
                                y más del 80% de estos ataques provienen desde dentro de la propia empresa.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                En Cloud Byte, entendemos la magnitud de estos riesgos y ofrecemos soluciones 
                                integrales de seguridad informática para proteger a su organización de amenazas, 
                                proteger sus activos más valiosos y garantizar la continuidad operativa.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Servicios Principales */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {serviciosCiberseguridad.map((servicio, index) => (
                            <ScaleIn key={index} delay={index * 0.1}>
                                <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 
                                              hover:border-blue-500/30 transition-all duration-300
                                              backdrop-blur-sm">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                                                  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    
                                    <div className="relative z-10">
                                        <span className="text-4xl mb-4 block">{servicio.icono}</span>
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            {servicio.titulo}
                                        </h3>
                                        <p className="text-gray-400 mb-4">{servicio.descripcion}</p>
                                        
                                        {servicio.caracteristicas && (
                                            <ul className="mt-4 space-y-2">
                                                {servicio.caracteristicas.map((caracteristica, idx) => (
                                                    <li key={idx} className="flex items-start text-gray-300">
                                                        <svg className="w-5 h-5 mr-2 text-blue-500 mt-1 flex-shrink-0" 
                                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" 
                                                                  strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span>{caracteristica}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </ScaleIn>
                        ))}
                    </div>

                    {/* Sección de Backup */}
                    <section className="mt-20 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                                      rounded-3xl blur-3xl" />
                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-8">
                                Backup y Recuperación ante Desastres
                            </h3>
                            
                            {/* Tipos principales de backup */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {tiposBackup.map((tipo, index) => (
                                    <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10">
                                        <span className="text-3xl mb-4 block">{tipo.icono}</span>
                                        <h4 className="text-lg font-semibold text-white mb-2">{tipo.tipo}</h4>
                                        <p className="text-gray-400">{tipo.descripcion}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Tipos específicos de backup */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {tiposBackupEspecificos.map((tipo, index) => (
                                    <div key={index} className="flex items-start p-4 bg-white/5 rounded-lg">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3"></div>
                                        <div>
                                            <h5 className="text-white font-medium mb-1">{tipo.tipo}</h5>
                                            <p className="text-gray-400 text-sm">{tipo.descripcion}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Servicios Adicionales */}
                    <section className="mt-20">
                        <h3 className="text-2xl font-bold text-white mb-8 text-center">
                            Servicios Complementarios
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {serviciosAdicionales.map((servicio, index) => (
                                <div key={index} className="p-6 bg-white/5 rounded-2xl border border-white/10
                                                      hover:border-blue-500/30 transition-all duration-300">
                                    <span className="text-3xl mb-4 block">{servicio.icono}</span>
                                    <h4 className="text-xl font-semibold text-white mb-3">{servicio.titulo}</h4>
                                    <p className="text-gray-400 mb-4">{servicio.descripcion}</p>
                                    <ul className="space-y-2">
                                        {servicio.caracteristicas.map((caracteristica, idx) => (
                                            <li key={idx} className="flex items-center text-gray-300">
                                                <svg className="w-4 h-4 mr-2 text-blue-500" 
                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                                          strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {caracteristica}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>

            <ScrollToTop />
        </main>
    );
} 