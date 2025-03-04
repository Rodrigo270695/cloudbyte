import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from '@/app/components/animations/FadeIn';
import ScaleIn from '@/app/components/animations/ScaleIn';
import { FaCloud, FaShieldAlt, FaServer, FaClock, FaLock, FaSync, FaDatabase, FaHdd } from 'react-icons/fa';
import ScrollToTop from '@/app/components/ScrollToTop';
import Badge from '@/app/components/ui/Badge';

export const metadata: Metadata = {
    title: "Cloud Byte | Soluciones de Respaldo",
    description: "Servicios profesionales de backup y respaldo de datos. Soluciones ESET Xopero Cloud y Bacula para empresas.",
    keywords: "respaldo de datos, backup empresarial, ESET Xopero, Bacula, cloud backup, recuperación de datos",
};

const beneficiosXopero = [
    {
        titulo: "Copia de seguridad en la nube",
        descripcion: "Almacenamiento seguro en servidores cloud con restauración rápida de archivos, sistemas y configuraciones",
        icono: <FaCloud className="w-12 h-12 text-[#1f77d4]" />
    },
    {
        titulo: "Respaldo Automático",
        descripcion: "Copias de seguridad periódicas y automáticas sin intervención manual",
        icono: <FaClock className="w-12 h-12 text-[#1f77d4]" />
    },
    {
        titulo: "Cifrado de Datos",
        descripcion: "Protección mediante cifrado AES-256 para datos en reposo y tránsito",
        icono: <FaLock className="w-12 h-12 text-[#1f77d4]" />
    },
    {
        titulo: "Recuperación Rápida",
        descripcion: "Restauración inmediata en caso de fallos, minimizando el tiempo de inactividad",
        icono: <FaSync className="w-12 h-12 text-[#1f77d4]" />
    }
];

const beneficiosBacula = [
    {
        titulo: "Backup Flexible",
        descripcion: "Copias completas, incrementales y diferenciales para optimizar espacio y tiempos",
        icono: <FaServer className="w-12 h-12 text-[#1f77d4]" />
    },
    {
        titulo: "Múltiples Plataformas",
        descripcion: "Compatible con Linux, Windows y macOS",
        icono: <FaShieldAlt className="w-12 h-12 text-[#1f77d4]" />
    },
    {
        titulo: "Almacenamiento Versátil",
        descripcion: "Respaldo en discos locales, cintas magnéticas o sistemas cloud",
        icono: <FaHdd className="w-12 h-12 text-[#1f77d4]" />
    },
    {
        titulo: "Gestión Web",
        descripcion: "Interfaz web para administración y monitoreo de tareas",
        icono: <FaDatabase className="w-12 h-12 text-[#1f77d4]" />
    }
];

// Añadir nuevas características detalladas
const caracteristicasDetalladas = [
    {
        titulo: "Backup Incremental",
        descripcion: "Solo se respaldan los datos modificados desde la última copia",
        icono: <FaDatabase className="w-8 h-8 text-[#1f77d4]" />,
        stats: "Ahorra hasta 60% de espacio",
        statsColor: "text-[#1f77d4]"
    },
    {
        titulo: "Cifrado AES-256",
        descripcion: "Máxima seguridad para tus datos en reposo y tránsito",
        icono: <FaLock className="w-8 h-8 text-[#1f77d4]" />,
        stats: "Estándar militar",
        statsColor: "text-[#1f77d4]"
    },
    {
        titulo: "Recuperación Rápida",
        descripcion: "Restauración inmediata de archivos y sistemas",
        icono: <FaSync className="w-8 h-8 text-[#1f77d4]" />,
        stats: "RPO < 15 minutos",
        statsColor: "text-[#1f77d4]"
    }
];

export default function RespaldosPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section con animación de datos/backup */}
            <section className="relative h-[700px] overflow-hidden bg-[#0a192f]">
                {/* Fondo dinámico con animación de datos */}
                <div className="absolute inset-0">
                    {/* Gradiente base */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1f77d4]/20 to-[#0a192f]" />
                    
                    {/* Animación de datos/backup */}
                    <div className="data-backup-container">
                        <div className="data-stream data-1"></div>
                        <div className="data-stream data-2"></div>
                        <div className="data-stream data-3"></div>
                        <div className="data-block block-1"></div>
                        <div className="data-block block-2"></div>
                    </div>

                    {/* Grid y partículas */}
                    <div className="absolute inset-0">
                        <div className="backup-particles"></div>
                        <div className="backup-grid opacity-10"></div>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <Badge text="BACKUP & RECOVERY" color="green" />

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                                Soluciones de Respaldo
                                <span className="block text-[#1f77d4]">Para Tu Empresa</span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-2xl mb-8">
                                Protege tus datos críticos con nuestras soluciones de backup empresarial.
                                Garantizamos la continuidad de tu negocio con tecnología de vanguardia.
                            </p>

                            <Link href="/contacto"
                                  className="inline-flex items-center gap-2 px-8 py-4 
                                           bg-[#1f77d4] text-white font-medium rounded-lg 
                                           hover:bg-[#1f77d4]/90 transition-all duration-300">
                                <span>Solicitar Información</span>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Nueva sección de introducción */}
            <section className="py-16 bg-[#0a192f]">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Protección Integral de Datos Empresariales
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                En el entorno actual de negocios, la protección de la información es crucial. 
                                La pérdida de datos puede tener un impacto devastador en cualquier organización, 
                                desde la interrupción de las operaciones diarias hasta el daño irreparable a la 
                                reputación de la empresa.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Nueva sección de características detalladas */}
            <section className="relative py-16 bg-[#0a192f]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caracteristicasDetalladas.map((caracteristica, index) => (
                            <ScaleIn key={index} delay={index * 0.1}>
                                <div className="group relative p-8 rounded-2xl 
                                              bg-[#0a192f]/80 backdrop-blur-sm
                                              border border-[#1f77d4]/10 hover:border-[#1f77d4]/30
                                              transition-all duration-300">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 rounded-xl bg-[#1f77d4]/10">
                                                {caracteristica.icono}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">
                                                    {caracteristica.titulo}
                                                </h3>
                                                <span className={`text-sm font-mono ${caracteristica.statsColor}`}>
                                                    {caracteristica.stats}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-gray-400">{caracteristica.descripcion}</p>
                                    </div>
                                    
                                    {/* Efecto de hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r 
                                                  from-[#1f77d4]/0 via-[#1f77d4]/5 to-[#1f77d4]/0 
                                                  opacity-0 group-hover:opacity-100 
                                                  transition-opacity duration-500 rounded-2xl" />
                                </div>
                            </ScaleIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sección de estadísticas */}
            <section className="py-16 bg-gradient-to-b from-[#0a192f] to-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <FadeIn delay={0.1}>
                            <div className="text-center p-6 glass-dark rounded-xl border-gradient">
                                <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
                                <div className="text-gray-400">Disponibilidad</div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="text-center p-6 glass-dark rounded-xl border-gradient">
                                <div className="text-4xl font-bold text-gradient mb-2">15min</div>
                                <div className="text-gray-400">RPO</div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="text-center p-6 glass-dark rounded-xl border-gradient">
                                <div className="text-4xl font-bold text-gradient mb-2">1hr</div>
                                <div className="text-gray-400">RTO</div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="text-center p-6 glass-dark rounded-xl border-gradient">
                                <div className="text-4xl font-bold text-gradient mb-2">256bit</div>
                                <div className="text-gray-400">Cifrado</div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Contenido Principal con las secciones existentes mejoradas */}
            <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="container mx-auto px-4">
                    {/* Xopero ESET */}
                    <div className="bg-white/5 rounded-2xl p-8 mb-16 glass-dark
                                  border border-[#1f77d4]/10">
                        <div className="max-w-3xl mb-12">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <FaCloud className="text-[#1f77d4]" />
                                Respaldo en la Nube con XOPERO ESET
                            </h3>
                            <p className="text-gray-300">
                                Xopero Cloud ofrece soluciones de respaldo seguras y escalables que protegen 
                                los datos en entornos físicos, virtuales y en la nube, facilitando la 
                                recuperación ante desastres.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {beneficiosXopero.map((beneficio, index) => (
                                <ScaleIn key={index} delay={index * 0.1}>
                                    <div className="group h-full flex flex-col text-center p-6 
                                                  bg-white/5 rounded-xl
                                                  border border-transparent hover:border-[#1f77d4]/20
                                                  transition-all duration-300 hover:bg-[#1f77d4]/5
                                                  hover-lift shadow-modern-hover">
                                        <div className="mb-4 flex justify-center transform 
                                                      group-hover:scale-110 transition-transform duration-300">
                                            {beneficio.icono}
                                        </div>
                                        <h4 className="text-xl font-semibold text-white mb-4">
                                            {beneficio.titulo}
                                        </h4>
                                        <p className="text-gray-400 group-hover:text-gray-300 
                                                    transition-colors flex-grow">
                                            {beneficio.descripcion}
                                        </p>
                                    </div>
                                </ScaleIn>
                            ))}
                        </div>

                        {/* Beneficios adicionales */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 h-32 bg-white/5 rounded-xl border border-[#1f77d4]/10 
                                          flex flex-col justify-center">
                                <h4 className="text-white font-semibold mb-2">Escalabilidad</h4>
                                <p className="text-gray-400">Adaptable según las necesidades de la empresa</p>
                            </div>
                            <div className="p-6 h-32 bg-white/5 rounded-xl border border-[#1f77d4]/10 
                                          flex flex-col justify-center">
                                <h4 className="text-white font-semibold mb-2">Flexibilidad</h4>
                                <p className="text-gray-400">Compatible con entornos híbridos (on-premise y cloud)</p>
                            </div>
                            <div className="p-6 h-32 bg-white/5 rounded-xl border border-[#1f77d4]/10 
                                          flex flex-col justify-center">
                                <h4 className="text-white font-semibold mb-2">Protección Proactiva</h4>
                                <p className="text-gray-400">Opciones avanzadas de cifrado y seguridad</p>
                            </div>
                        </div>
                    </div>

                    {/* Bacula */}
                    <div className="bg-white/5 rounded-2xl p-8 glass-dark
                                  border border-[#1f77d4]/10">
                        <div className="max-w-3xl mb-12">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <FaServer className="text-[#1f77d4]" />
                                Respaldo Bacula OnPremise
                            </h3>
                            <p className="text-gray-300">
                                Bacula es una solución de copia de seguridad y recuperación de datos 
                                altamente flexible y extensible que se adapta a entornos pequeños, 
                                medianos y grandes.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {beneficiosBacula.map((beneficio, index) => (
                                <ScaleIn key={index} delay={index * 0.1}>
                                    <div className="group h-full flex flex-col text-center p-6 
                                                  bg-white/5 rounded-xl
                                                  border border-transparent hover:border-[#1f77d4]/20
                                                  transition-all duration-300 hover:bg-[#1f77d4]/5
                                                  hover-lift shadow-modern-hover">
                                        <div className="mb-4 flex justify-center transform 
                                                      group-hover:scale-110 transition-transform duration-300">
                                            {beneficio.icono}
                                        </div>
                                        <h4 className="text-xl font-semibold text-white mb-4">
                                            {beneficio.titulo}
                                        </h4>
                                        <p className="text-gray-400 group-hover:text-gray-300 
                                                    transition-colors flex-grow">
                                            {beneficio.descripcion}
                                        </p>
                                    </div>
                                </ScaleIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-[#0a192f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeIn direction="up" duration={0.7} distance={30}>
                        <h2 className="text-3xl font-bold text-white mb-8">
                            ¿Listo para proteger los datos de tu empresa?
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