import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from '@/app/components/animations/FadeIn';
import ScaleIn from '@/app/components/animations/ScaleIn';
import SlideIn from '@/app/components/animations/SlideIn';
import AnimatedCounter from '@/app/components/AnimatedCounter';
import { FaServer, FaCloud, FaShieldAlt, FaCode, FaHeadset, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';
import ScrollToTop from '@/app/components/ScrollToTop';
import Badge from '@/app/components/ui/Badge';

export const metadata: Metadata = {
    title: "Cloud Byte | Sobre Nosotros",
    description: "Conozca más sobre Cloud Byte, empresa líder en servicios de TI y transformación digital con más de 10 años de experiencia en el mercado.",
};

// Datos para la sección de estadísticas
const estadisticas = [
    { numero: 10, texto: "Años de experiencia", icono: "🏆" },
    { numero: 500, texto: "Clientes satisfechos", icono: "🤝" },
    { numero: 1200, texto: "Proyectos completados", icono: "✅" },
    { numero: 24, texto: "Soporte 24/7", icono: "🔄" }
];

// Datos para la sección de valores
const valores = [
    {
        titulo: "Innovación",
        descripcion: "Buscamos constantemente nuevas soluciones tecnológicas para ofrecer servicios de vanguardia.",
        icono: <FaLightbulb className="w-10 h-10 text-[#1f77d4]" />
    },
    {
        titulo: "Compromiso",
        descripcion: "Nos comprometemos con cada proyecto para garantizar resultados excepcionales y duraderos.",
        icono: <FaHandshake className="w-10 h-10 text-[#1f77d4]" />
    },
    {
        titulo: "Excelencia",
        descripcion: "Mantenemos los más altos estándares de calidad en todos nuestros servicios y soluciones.",
        icono: <FaUsers className="w-10 h-10 text-[#1f77d4]" />
    }
];

// Datos para la sección de servicios principales
const serviciosPrincipales = [
    {
        titulo: "Infraestructura TI",
        descripcion: "Diseño e implementación de infraestructuras tecnológicas robustas y escalables.",
        icono: <FaServer className="w-12 h-12 text-[#1f77d4]" />,
        enlace: "/infraestructura"
    },
    {
        titulo: "Cloud Computing",
        descripcion: "Soluciones en la nube para optimizar recursos y mejorar la accesibilidad.",
        icono: <FaCloud className="w-12 h-12 text-[#1f77d4]" />,
        enlace: "/cloud"
    },
    {
        titulo: "Ciberseguridad",
        descripcion: "Protección integral contra amenazas digitales y gestión de vulnerabilidades.",
        icono: <FaShieldAlt className="w-12 h-12 text-[#1f77d4]" />,
        enlace: "/ciberseguridad"
    },
    {
        titulo: "Desarrollo Software",
        descripcion: "Creación de aplicaciones y sistemas personalizados para necesidades específicas.",
        icono: <FaCode className="w-12 h-12 text-[#1f77d4]" />,
        enlace: "/desarrollo-software"
    },
    {
        titulo: "Soporte Técnico",
        descripcion: "Asistencia especializada para mantener sus sistemas funcionando óptimamente.",
        icono: <FaHeadset className="w-12 h-12 text-[#1f77d4]" />,
        enlace: "/soporte"
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] overflow-hidden bg-[#0a192f]">
                {/* Fondo con efecto parallax */}
                <div className="absolute inset-0">
                    {/* Gradiente base */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#1f77d4]/10" />
                    
                    {/* Patrón de fondo */}
                    <div className="absolute inset-0 w-full h-full bg-[url('/patterns/circuit-board.svg')] opacity-10" />
                    
                    {/* Efecto de luz */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1f77d4]/20 rounded-full filter blur-[100px] animate-pulse-slow" />
                    <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#1f77d4]/10 rounded-full filter blur-[80px] animate-pulse-slow animation-delay-2000" />
                </div>
                
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <FadeIn>
                            <Badge text="SOBRE NOSOTROS" color="blue" />
                            
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 mt-4">
                                Transformamos el futuro
                                <span className="block text-[#1f77d4]">con tecnología</span>
                            </h1>
                            
                            <p className="text-xl text-gray-300 max-w-2xl mb-8">
                                Somos una empresa líder en servicios de TI y transformación digital, 
                                comprometida con la innovación y la excelencia tecnológica.
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contacto"
                                      className="group relative inline-flex items-center gap-2 
                                               px-8 py-4 bg-[#1f77d4] text-white font-medium 
                                               rounded-xl transition-all duration-300
                                               hover:bg-[#1f77d4]/90 hover:scale-105">
                                    <span>Contáctenos</span>
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" 
                                              strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                                
                                <Link href="/servicios-ti"
                                      className="group relative inline-flex items-center gap-2 
                                               px-8 py-4 bg-white/5 text-white font-medium 
                                               rounded-xl backdrop-blur-sm border border-white/10 
                                               transition-all duration-300 hover:bg-white/10">
                                    <span>Nuestros Servicios</span>
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" 
                                              strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
            
            {/* Sección de Nuestra Historia */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <FadeIn>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-[#1f77d4]/5 rounded-2xl transform -rotate-2"></div>
                                <div className="relative overflow-hidden rounded-xl shadow-xl">
                                    <Image
                                        src="/images/about-team.jpg"
                                        alt="Equipo de Cloud Byte"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-[#1f77d4] text-white p-4 rounded-lg shadow-lg">
                                    <p className="font-bold">Desde 2020</p>
                                </div>
                            </div>
                        </FadeIn>
                        
                        <div>
                            <FadeIn delay={0.2}>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Nuestra Historia
                                </h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Cloud Byte nació en 2020 con una visión clara: transformar la manera en que las empresas 
                                    utilizan la tecnología. Comenzamos como un pequeño equipo de especialistas en TI 
                                    apasionados por la innovación y el servicio al cliente.
                                </p>
                                <p className="text-lg text-gray-700 mb-6">
                                    A lo largo de los años, hemos crecido hasta convertirnos en un referente en el sector, 
                                    expandiendo nuestros servicios para cubrir todas las necesidades tecnológicas de las 
                                    empresas modernas: desde infraestructura y cloud computing hasta ciberseguridad y 
                                    desarrollo de software.
                                </p>
                                <p className="text-lg text-gray-700">
                                    Hoy, con más de una década de experiencia, seguimos comprometidos con nuestra misión 
                                    original: proporcionar soluciones tecnológicas de vanguardia que impulsen el éxito 
                                    de nuestros clientes.
                                </p>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Sección de Estadísticas */}
            <section className="py-16 bg-[#0a192f] relative overflow-hidden">
                <div className="absolute inset-0">
                    {/* Patrón de fondo */}
                    <div className="absolute inset-0 w-full h-full bg-[url('/patterns/circuit-board.svg')] opacity-5" />
                    
                    {/* Efectos de luz */}
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1f77d4]/10 rounded-full filter blur-[80px]" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1f77d4]/5 rounded-full filter blur-[100px]" />
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white">
                                Cloud Byte en Números
                            </h2>
                        </div>
                    </FadeIn>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {estadisticas.map((stat, index) => (
                            <ScaleIn key={index} delay={index * 0.1}>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center
                                              hover:bg-white/10 transition-all duration-300 hover:border-[#1f77d4]/30">
                                    <div className="text-4xl mb-4 text-[#1f77d4]">{stat.icono}</div>
                                    <div className="text-4xl font-bold text-white mb-2">
                                        <AnimatedCounter end={stat.numero} />
                                        {stat.numero === 24 ? "/7" : "+"}
                                    </div>
                                    <div className="text-gray-400">{stat.texto}</div>
                                </div>
                            </ScaleIn>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Sección de Valores */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Nuestros Valores
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Los principios que guían nuestro trabajo y definen nuestra cultura empresarial
                            </p>
                        </div>
                    </FadeIn>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {valores.map((valor, index) => (
                            <ScaleIn key={index} delay={index * 0.1}>
                                <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100
                                              hover:shadow-md hover:border-[#1f77d4]/20 transition-all duration-300">
                                    <div className="mb-6 p-4 bg-[#1f77d4]/10 rounded-full inline-block">
                                        {valor.icono}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        {valor.titulo}
                                    </h3>
                                    <p className="text-gray-600">
                                        {valor.descripcion}
                                    </p>
                                </div>
                            </ScaleIn>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Sección de Servicios Principales */}
            <section className="py-20 bg-gradient-to-b from-[#0a192f] to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    {/* Patrón de fondo */}
                    <div className="absolute inset-0 w-full h-full bg-[url('/patterns/circuit-board.svg')] opacity-5" />
                    
                    {/* Efectos de luz */}
                    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#1f77d4]/10 rounded-full filter blur-[100px]" />
                    <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-[#1f77d4]/5 rounded-full filter blur-[80px]" />
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Nuestros Servicios Principales
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Soluciones tecnológicas integrales para impulsar su negocio
                            </p>
                        </div>
                    </FadeIn>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviciosPrincipales.map((servicio, index) => (
                            <ScaleIn key={index} delay={index * 0.1}>
                                <Link href={servicio.enlace} className="block h-full">
                                    <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8
                                                  hover:bg-white/10 transition-all duration-300 hover:border-[#1f77d4]/30
                                                  flex flex-col">
                                        <div className="mb-6 p-4 bg-[#1f77d4]/10 rounded-full inline-block
                                                      group-hover:bg-[#1f77d4]/20 transition-all duration-300">
                                            {servicio.icono}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4">
                                            {servicio.titulo}
                                        </h3>
                                        <p className="text-gray-400 mb-6 flex-grow">
                                            {servicio.descripcion}
                                        </p>
                                        <div className="inline-flex items-center text-[#1f77d4] group-hover:translate-x-2 transition-transform duration-300">
                                            <span className="mr-2">Conocer más</span>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </ScaleIn>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Sección de Misión y Visión */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <FadeIn>
                            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 h-full">
                                <div className="mb-6 p-4 bg-[#1f77d4]/10 rounded-full inline-block">
                                    <svg className="w-10 h-10 text-[#1f77d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Nuestra Misión
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Proporcionar soluciones tecnológicas innovadoras y de alta calidad que 
                                    impulsen la transformación digital de nuestros clientes, optimizando 
                                    sus procesos y potenciando su competitividad en el mercado.
                                </p>
                                <p className="text-gray-700">
                                    Nos comprometemos a ofrecer un servicio excepcional, adaptado a las 
                                    necesidades específicas de cada empresa, con un enfoque centrado en 
                                    resultados tangibles y sostenibles.
                                </p>
                            </div>
                        </FadeIn>
                        
                        <FadeIn delay={0.2}>
                            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 h-full">
                                <div className="mb-6 p-4 bg-[#1f77d4]/10 rounded-full inline-block">
                                    <svg className="w-10 h-10 text-[#1f77d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Nuestra Visión
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Ser reconocidos como líderes en la industria de servicios tecnológicos, 
                                    destacando por nuestra capacidad de anticiparnos a las tendencias del 
                                    mercado y por ofrecer soluciones que marquen la diferencia.
                                </p>
                                <p className="text-gray-700">
                                    Aspiramos a construir relaciones duraderas con nuestros clientes, 
                                    convirtiéndonos en su socio tecnológico de confianza y contribuyendo 
                                    activamente a su crecimiento y éxito a largo plazo.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
            
            {/* CTA Final */}
            <section className="py-20 bg-[#0a192f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeIn direction="up">
                        <h2 className="text-3xl font-bold text-white mb-8">
                            ¿Listo para transformar su negocio con tecnología?
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
            
            <ScrollToTop />
        </main>
    );
} 