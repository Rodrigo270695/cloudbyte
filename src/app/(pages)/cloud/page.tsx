import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from '@/app/components/animations/FadeIn';
import ScaleIn from '@/app/components/animations/ScaleIn';
import SlideIn from '@/app/components/animations/SlideIn';
import { FaCloud, FaMicrosoft, FaShieldAlt, FaDatabase, FaFolder, FaEnvelope } from 'react-icons/fa';
import ScrollToTop from '@/app/components/ScrollToTop';

export const metadata: Metadata = {
    title: "Cloud Byte | Cloud Computing",
    description: "Soluciones de Cloud Computing empresarial: AWS, Azure, Google Cloud. Migración a la nube, arquitectura cloud y optimización de recursos cloud.",
    keywords: "cloud computing, AWS, Azure, Google Cloud, migración cloud, arquitectura cloud, Cloud Byte, nube empresarial",
};

// Servicios principales de Cloud Computing
const serviciosCloud = [
    {
        titulo: 'Microsoft Azure',
        descripcion: 'Azure es un conjunto de servicios en la nube que permite construir, administrar e implementar aplicaciones sobre una gran red de datacenters gestionados por Microsoft.',
        caracteristicas: [
            'Infraestructura como servicio (IAAS)',
            'Plataforma como Servicio (PAAS)',
            'Software como servicio (SAAS)',
            'Máquinas Virtuales y Backup',
            'Desarrollo de aplicaciones web'
        ],
        icono: <FaCloud className="w-16 h-16 text-[#1f77d4] mb-4" />
    },
    {
        titulo: 'Microsoft 365',
        descripcion: 'Aumente su productividad y colaboración entre organizaciones, manteniendo una experiencia de Office completa y familiar.',
        caracteristicas: [
            'Exchange Online - Correo profesional',
            'SharePoint Online - Compartir archivos',
            'Teams - Videoconferencia empresarial',
            'OneDrive - 1TB de almacenamiento',
            'Office 365 y Windows 10 Enterprise'
        ],
        icono: <FaMicrosoft className="w-16 h-16 text-[#1f77d4] mb-4" />
    },
    {
        titulo: 'Anti-Spam y Antivirus Cloud',
        descripcion: 'Elimine el spam y los virus antes que lleguen al buzón de correo, previamente filtrado por los servidores Cloud Antispam.',
        caracteristicas: [
            'Filtrado avanzado de correos',
            'Protección en tiempo real',
            'Gestión centralizada',
            'Reportes detallados'
        ],
        icono: <FaShieldAlt className="w-16 h-16 text-[#1f77d4] mb-4" />
    },
    {
        titulo: 'Respaldo en la Nube',
        descripcion: 'Cloud Backup es un servicio de respaldo de seguridad en la nube que permite asegurar su información y la continuidad de su negocio.',
        caracteristicas: [
            'Backup de servidores y PCs',
            'Recuperación rápida de datos',
            'Almacenamiento seguro',
            'Monitoreo continuo'
        ],
        icono: <FaDatabase className="w-16 h-16 text-[#1f77d4] mb-4" />
    },
    {
        titulo: 'Almacenamiento Empresarial',
        descripcion: 'Cloud storage permite almacenar todos sus documentos y trabajos, compartiéndolos de forma segura a través de Internet.',
        caracteristicas: [
            'Almacenamiento escalable',
            'Acceso desde cualquier dispositivo',
            'Sincronización automática',
            'Compartición segura'
        ],
        icono: <FaFolder className="w-16 h-16 text-[#1f77d4] mb-4" />
    },
    {
        titulo: 'Migración de Correo',
        descripcion: 'Realizamos la migración de su correo hacia Microsoft 365 para aprovechar todas sus ventajas productivas.',
        caracteristicas: [
            'Migración sin pérdida de datos',
            'Continuidad del servicio',
            'Soporte especializado',
            'Configuración optimizada'
        ],
        icono: <FaEnvelope className="w-16 h-16 text-[#1f77d4] mb-4" />
    }
];

// Beneficios del Cloud Computing
const beneficiosCloud = [
    {
        titulo: 'Agilidad e Innovación',
        descripcion: 'Acelere sus procesos empresariales y manténgase a la vanguardia tecnológica.',
        icono: '🚀'
    },
    {
        titulo: 'Reducción de Costos',
        descripcion: 'Bajos costos de mantenimiento y ahorro significativo en equipos.',
        icono: '💰'
    },
    {
        titulo: 'Implementación Rápida',
        descripcion: 'Velocidad de implementación y administración simplificada.',
        icono: '⚡'
    },
    {
        titulo: 'Tecnología Actualizada',
        descripcion: 'Mantenga su infraestructura siempre con las últimas actualizaciones.',
        icono: '🔄'
    }
];

// Tecnologías Cloud con iconos de Simple Icons
const tecnologiasCloud = [
    {
        nombre: 'Amazon Web Services',
        icono: (
            <svg role="img" viewBox="0 0 24 24" className="h-12 w-12 text-[#FF9900]" fill="currentColor">
                <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.423-.879.71-2.563.695-2.994z"/>
            </svg>
        ),
        servicios: ['EC2', 'S3', 'RDS', 'Lambda']
    },
    {
        nombre: 'Microsoft Azure',
        icono: (
            <svg role="img" viewBox="0 0 24 24" className="h-12 w-12 text-[#0078D4]" fill="currentColor">
                <path d="M13.874 5.239L9.863 17.16 3.763 12.77 0 11.469l3.763 1.301-3.763 4.46L24 18.988l-3.763-4.46 2.342-6.989-8.705-2.3zm-2.7-3.038L8.215 4.3l1.279 3.037z"/>
            </svg>
        ),
        servicios: ['Virtual Machines', 'Blob Storage', 'Azure SQL', 'Functions']
    },
    {
        nombre: 'Google Cloud',
        icono: (
            <svg role="img" viewBox="0 0 24 24" className="h-12 w-12 text-[#4285F4]" fill="currentColor">
                <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193v-.013H6.845a2.566 2.566 0 0 1-1.842-.741 2.598 2.598 0 0 1 1.842-4.48h2.396c.406-2.425 2.525-4.189 4.988-4.189a5.183 5.183 0 0 1 1.595.246l-.006-.007c-2.75-1.848-6.46-.581-7.422 2.147a6.152 6.152 0 0 0-.391 2.364c-2.132-.068-3.241 1.157-3.241 2.324h0a3.175 3.175 0 0 0 3.241 3.175h5.193v-.011h5.193c2.027-.04 2.087-2.89.012-2.89h-5.206v-.013H6.845a.343.343 0 0 1-.391-.391c.033-.327.362-.49.391-.49h2.396v-.013h7.437c.472.011 1.088-.29 1.438-.666-.166-4.225-6.524-5.135-7.694-.29H8.043c-1.476.013-2.642 1.32-2.642 2.89 0 1.553 1.17 2.867 2.642 2.89h10.387c3.534.068 3.534-5.193 0-5.262v-.518c.013-2.351-2.2-4.258-4.523-3.832-1.614.29-2.838 1.614-3.241 3.241H8.043c-2.972 0-3.24 4.146 0 4.146h10.387c.465 0 .89.354.89.89 0 .508-.425.877-.89.877H8.043c-2.577-.04-4.752-2.26-4.752-4.91s2.175-4.856 4.752-4.897z"/>
            </svg>
        ),
        servicios: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Functions']
    }
];

export default function CloudPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section con efecto de nubes */}
            <section className="relative h-[700px] overflow-hidden bg-[#0a192f]">
                {/* Fondo dinámico con nubes */}
                <div className="absolute inset-0">
                    {/* Gradiente base */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1f77d4]/20 to-[#0a192f]" />
                    
                    {/* Nubes animadas */}
                    <div className="clouds-container">
                        <div className="cloud cloud-1"></div>
                        <div className="cloud cloud-2"></div>
                        <div className="cloud cloud-3"></div>
                        <div className="cloud cloud-4"></div>
                    </div>

                    {/* Partículas y grid */}
                    <div className="absolute inset-0">
                        <div className="cloud-particles"></div>
                        <div className="cloud-grid opacity-10"></div>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            {/* Badge de Cloud */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 
                                          rounded-full bg-[#1f77d4]/10 border border-[#1f77d4]/20 
                                          backdrop-blur-sm mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full 
                                                   rounded-full bg-[#1f77d4] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 
                                                   bg-[#1f77d4]"></span>
                                </span>
                                <span className="text-[#1f77d4] font-mono text-sm">
                                    CLOUD SOLUTIONS
                                </span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                                Cloud Computing
                                <span className="block text-[#1f77d4]">Empresarial</span>
                            </h1>

                            <p className="text-xl text-gray-300 max-w-2xl mb-8">
                                Transforme su negocio con soluciones cloud escalables, 
                                seguras y eficientes. Expertos en AWS, Azure y Google Cloud.
                            </p>

                            <Link href="/contacto"
                                  className="inline-flex items-center gap-2 px-8 py-4 
                                           bg-[#1f77d4] text-white font-medium rounded-lg 
                                           hover:bg-[#1f77d4]/90 transition-all duration-300">
                                <span>Cotizar Ahora</span>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Contenido principal */}
            <section className="py-20 bg-gradient-to-b from-[#0a192f] to-[#0a192f]/95">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Grid de servicios */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviciosCloud.map((servicio, index) => (
                            <ScaleIn key={index} delay={index * 0.1}>
                                <div className="group h-full relative p-8 rounded-2xl 
                                              bg-[#0a192f]/95 border border-[#1f77d4]/10 
                                              hover:border-[#1f77d4]/30 transition-all duration-300
                                              flex flex-col">
                                    <div className="flex flex-col items-center text-center mb-6">
                                        {servicio.icono}
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            {servicio.titulo}
                                        </h3>
                                        <p className="text-gray-400 mb-6">{servicio.descripcion}</p>
                                    </div>
                                    <ul className="space-y-2 mb-6 flex-grow">
                                        {servicio.caracteristicas.map((caracteristica, idx) => (
                                            <li key={idx} className="flex items-center text-gray-300">
                                                <svg className="w-4 h-4 mr-2 text-[#1f77d4]" 
                                                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                                          strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {caracteristica}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={`/cloud/${servicio.titulo.toLowerCase().replace(/ /g, '-')}`}
                                          className="inline-flex items-center justify-center w-full px-4 py-2 
                                                   bg-[#1f77d4]/10 hover:bg-[#1f77d4]/20 
                                                   border border-[#1f77d4]/20 hover:border-[#1f77d4]/30 
                                                   text-[#1f77d4] rounded-lg transition-all duration-300
                                                   mt-auto group-hover:bg-[#1f77d4]/15">
                                        <span>Más Información</span>
                                        <svg className="w-4 h-4 ml-2 transition-transform duration-300 
                                                      group-hover:translate-x-1" 
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" 
                                                  strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </ScaleIn>
                        ))}
                    </div>

                    {/* Sección de beneficios */}
                    <section className="mt-20">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            Beneficios del Cloud Computing
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {beneficiosCloud.map((beneficio, index) => (
                                <div key={index} className="text-center p-6">
                                    <span className="text-5xl mb-4 block">{beneficio.icono}</span>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {beneficio.titulo}
                                    </h3>
                                    <p className="text-gray-400">{beneficio.descripcion}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Sección de tecnologías */}
                    <section className="mt-20">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">
                            Tecnologías Cloud
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {tecnologiasCloud.map((tech, index) => (
                                <div key={index} className="p-6 bg-white/5 rounded-xl 
                                                         border border-[#1f77d4]/10 text-center
                                                         hover:border-[#1f77d4]/30 transition-all duration-300">
                                    <div className="flex justify-center mb-6">
                                        {tech.icono}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-4">
                                        {tech.nombre}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {tech.servicios.map((servicio, idx) => (
                                            <span key={idx} className="px-3 py-1 rounded-full 
                                                             bg-[#1f77d4]/10 text-[#1f77d4] 
                                                             text-sm">
                                                {servicio}
                                            </span>
                                        ))}
                                    </div>
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