"use client"

import Link from "next/link";
import FadeIn from '@/app/components/animations/FadeIn';
import Badge from '@/app/components/ui/Badge';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import ScrollToTop from '@/app/components/ScrollToTop';
import ScaleIn from '@/app/components/animations/ScaleIn';
import SlideIn from '@/app/components/animations/SlideIn';
import useEmblaCarousel from 'embla-carousel-react';

const logos = [
    { src: '/logos/react', alt: 'React' },
    { src: '/logos/vue', alt: 'Vue' },
    { src: '/logos/nextjs', alt: 'Next.js' },
    { src: '/logos/angular', alt: 'Angular' },
    { src: '/logos/laravel', alt: 'Laravel' },
    { src: '/logos/dart', alt: 'Dart' }
];

const calculatePosition = (angle: number, radius: number) => {
    const x = Math.round(Math.cos((angle * Math.PI) / 180) * radius * 1000) / 1000;
    const y = Math.round(Math.sin((angle * Math.PI) / 180) * radius * 1000) / 1000;
    return { x, y };
};

const demos = [
    {
        title: "Control de Asistencia",
        image: "/images/demos/control-asistencia.png",
        description: "Sistema para el control de asistencia de empleados.",
        demoLink: "/demos/control-asistencia"
    },
    {
        title: "Inventario de Productos",
        image: "/images/demos/inventario-productos.png",
        description: "Gestión eficiente del inventario de productos.",
        demoLink: "/demos/inventario-productos"
    },
    {
        title: "Inventario de Parque Informático",
        image: "/images/demos/parque-informatico.png",
        description: "Control y gestión del parque informático.",
        demoLink: "/demos/parque-informatico"
    },
    {
        title: "Sistema de Canchas",
        image: "/images/demos/sistema-canchas.png",
        description: "Reservas y gestión de canchas deportivas.",
        demoLink: "/demos/sistema-canchas"
    },
    {
        title: "Sistema de Cochera",
        image: "/images/demos/sistema-cochera.png",
        description: "Gestión de espacios de cochera.",
        demoLink: "/demos/sistema-cochera"
    },
    {
        title: "Sistema de Ventas",
        image: "/images/demos/sistema-ventas.png",
        description: "Optimización del proceso de ventas.",
        demoLink: "/demos/sistema-ventas"
    }
];

// Primero, definimos los artículos del blog
const blogPosts = [
    {
        titulo: "El Futuro de la IA en el Desarrollo de Software",
        descripcion: "Descubre cómo la Inteligencia Artificial está transformando la manera en que desarrollamos software.",
        categoria: "Inteligencia Artificial",
        fecha: "2024",
        tiempo: "5 min",
        imagen: "/images/blog/ia-desarrollo.png",
        autor: {
            nombre: "Dr. Ana Martínez",
            rol: "CTO",
            avatar: "/images/team/ana.png"
        }
    },
    {
        titulo: "Arquitecturas Cloud-Native: Tendencias 2025",
        descripcion: "Explora las últimas tendencias en arquitecturas cloud-native y microservicios.",
        categoria: "Cloud Computing",
        fecha: "2024",
        tiempo: "4 min",
        imagen: "/images/blog/cloud-native.png",
        autor: {
            nombre: "Carlos Rivera",
            rol: "Cloud Architect",
            avatar: "/images/team/carlos.png"
        }
    },
    {
        titulo: "DevSecOps: Seguridad en el Desarrollo Moderno",
        descripcion: "Implementa prácticas de seguridad efectivas en tu pipeline de desarrollo.",
        categoria: "Seguridad",
        fecha: "2024",
        tiempo: "6 min",
        imagen: "/images/blog/devsecops.png",
        autor: {
            nombre: "Laura González",
            rol: "Security Lead",
            avatar: "/images/team/laura.png"
        }
    }
];

// Define la interfaz para las partículas
interface Particle {
    top: string;
    left: string;
    animationDelay: string;
    animationDuration: string;
}

export default function DesarrolloSoftwarePage() {
    // Definición de testimonios con más detalles
    const testimonios = [
        {
            texto: "El servicio fue excepcional y superó nuestras expectativas. La implementación fue rápida y el equipo mostró un gran profesionalismo en cada etapa del proyecto.",
            autor: {
                nombre: "Juan Pérez",
                cargo: "Director de Tecnología",
                empresa: "Empresa XYZ",
                avatar: "/images/testimonials/avatar1.png",
                rating: 5
            },
            destacado: true
        },
        {
            texto: "Gracias a Cloud Byte, hemos optimizado nuestra infraestructura y reducido costos operativos en un 40%. Su equipo técnico es excepcional.",
            autor: {
                nombre: "María López",
                cargo: "CEO",
                empresa: "Compañía ABC",
                avatar: "/images/testimonials/avatar2.png",
                rating: 5
            },
            destacado: false
        },
        {
            texto: "Recomiendo sus servicios a cualquier empresa que busque mejorar su infraestructura tecnológica. El soporte post-implementación ha sido extraordinario.",
            autor: {
                nombre: "Carlos García",
                cargo: "CTO",
                empresa: "Startup 123",
                avatar: "/images/testimonials/avatar3.png",
                rating: 5
            },
            destacado: false
        }
    ];

    // Define una interfaz para la posición
    interface IconPosition {
        x: number;
        y: number;
    }

    // Usa el tipo correcto en el useState
    const [iconPositions, setIconPositions] = useState<IconPosition[]>([]);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [isHovered, setIsHovered] = useState(false);
    const [rotationAngle, setRotationAngle] = useState(0);

    useEffect(() => {
        const positions = logos.map((_, index) => {
            const angle = index * 60; // Calcular el ángulo
            const radius = 160; // Radio del círculo
            return {
                x: Math.cos((angle * Math.PI) / 180) * radius,
                y: Math.sin((angle * Math.PI) / 180) * radius,
            };
        });
        setIconPositions(positions);
    }, []);

    useEffect(() => {
        // Generar las posiciones de las partículas una sola vez
        const particlesArray = Array.from({ length: 20 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
        }));
        setParticles(particlesArray);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setRotationAngle((prev) => (prev + 1) % 360);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <main className="min-h-screen">
            {/* Hero Section Desarrollo de Software */}
            <section className="relative h-[90vh] overflow-hidden bg-[#0a192f]">
                {/* Fondo Dinámico */}
                <div className="absolute inset-0">
                    {/* Gradiente Base */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0a192f]/95 to-[#1f77d4]/10" />

                    {/* Grid Animado para Desarrollo de Software */}
                    <div className="absolute inset-0 w-full h-full bg-[url('/patterns/software-grid.svg')] opacity-20 
                                  animate-float-slow" />

                    {/* Efecto Parallax */}
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1f77d4]/10 
                                      rounded-full blur-3xl animate-pulse-slow" />
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1f77d4]/5 
                                      rounded-full blur-3xl animate-float" />
                    </div>

                    {/* Partículas Flotantes */}
                    <div className="absolute inset-0 overflow-hidden">
                        {particles.map((particle, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 bg-[#1f77d4]/30 rounded-full 
                                         animate-floating"
                                style={{
                                    top: particle.top,
                                    left: particle.left,
                                    animationDelay: particle.animationDelay,
                                    animationDuration: particle.animationDuration
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Contenido Principal */}
                <div className="relative h-full flex items-center z-30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid xl:grid-cols-2 gap-16 items-center">
                            {/* Texto y CTA */}
                            <FadeIn direction="up" duration={0.8}>
                                <div className="space-y-8 max-w-3xl">
                                    {/* Badge */}
                                    <Badge text="DESARROLLO DE SOFTWARE" color="blue" />

                                    {/* Slogan Principal */}
                                    <div className="space-y-2">
                                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                            <span className="block text-white opacity-95">
                                                Impulsa tu
                                            </span>
                                            <span className="block text-transparent bg-clip-text 
                                                           bg-gradient-to-r from-[#1f77d4] via-blue-400 
                                                           to-[#1f77d4] animate-gradient bg-300%">
                                                negocio
                                            </span>
                                            <span className="block text-white opacity-95 text-3xl md:text-4xl lg:text-5xl">
                                                con soluciones personalizadas
                                            </span>
                                        </h1>
                                    </div>

                                    <p className="text-xl text-gray-300 max-w-2xl animate-fade-in-up delay-300">
                                        Creamos software a medida que se adapta a las necesidades de tu empresa,
                                        potenciando tu transformación digital.
                                    </p>

                                    <div className="flex flex-wrap gap-4 animate-fade-in-up delay-500">
                                        <Link
                                            href="/contacto"
                                            className="group relative overflow-hidden inline-flex items-center gap-2 
                                                     px-8 py-4 bg-[#1f77d4] text-white font-medium rounded-xl 
                                                     transition-all duration-300 hover:scale-105 
                                                     shadow-lg hover:shadow-[#1f77d4]/50"
                                        >
                                            {/* Efecto Shine */}
                                            <div className="absolute inset-0 w-1/2 h-full transform -skew-x-12 
                                                          bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                                          translate-x-[-200%] group-hover:translate-x-[200%] 
                                                          transition-transform duration-1000" />

                                            <span className="relative z-10">Inicia tu Proyecto</span>
                                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>

                                        <Link
                                            href="/servicios-ti"
                                            className="group relative overflow-hidden inline-flex items-center gap-2 
                                                     px-8 py-4 bg-white/5 text-white font-medium rounded-xl 
                                                     backdrop-blur-sm border border-white/10 
                                                     transition-all duration-300 hover:bg-white/10"
                                        >
                                            <span>Descubre Nuestras Soluciones</span>
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#1f77d4] 
                                                          group-hover:animate-ping" />
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Elemento Visual Derecho */}
                            <FadeIn direction="left" duration={1} delay={0.2}>
                                <div className="relative h-[500px] hidden xl:block">
                                    {/* Círculo Principal con Logos */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {/* Círculo exterior luminoso */}
                                        <div className="absolute w-80 h-80 rounded-full border-2 border-[#1f77d4] 
                                                      shadow-[0_0_15px_#1f77d4]" />

                                        {/* Contenedor de los logos que gira */}
                                        <div className="relative w-80 h-80">
                                            {logos.map((logo, index) => {
                                                const angle = (index * 60 + rotationAngle) % 360;
                                                const { x, y } = calculatePosition(angle, 160);
                                                const [hovered, setHovered] = useState(false);

                                                return (
                                                    <div
                                                        key={logo.alt}
                                                        className="absolute w-16 h-16 rounded-full bg-[#0a192f] 
                                                                 flex items-center justify-center shadow-lg 
                                                                 border border-[#1f77d4]/30"
                                                        style={{
                                                            transform: `translate(${x}px, ${y}px)`,
                                                            left: '50%',
                                                            top: '50%',
                                                            marginLeft: '-32px',
                                                            marginTop: '-32px',
                                                            transition: 'all 0.5s ease-in-out'
                                                        }}
                                                        onMouseEnter={() => {
                                                            setHovered(true);
                                                            setIsHovered(true);
                                                        }}
                                                        onMouseLeave={() => {
                                                            setHovered(false);
                                                            setIsHovered(false);
                                                        }}
                                                    >
                                                        <picture>
                                                            <source srcSet={`${logo.src}.webp`} type="image/webp" />
                                                            <source srcSet={`${logo.src}.png`} type="image/png" />
                                                            <Image
                                                                src={`${logo.src}.webp`}
                                                                alt={logo.alt}
                                                                width={40}
                                                                height={40}
                                                                loading="lazy"
                                                                className={`object-contain transition-transform duration-300
                                                                          ${hovered ? 'scale-125' : ''}`}
                                                            />
                                                        </picture>
                                                        {hovered && (
                                                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                                                                        bg-[#1f77d4] text-white text-sm rounded px-2 py-1">
                                                                {logo.alt}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Círculo central luminoso */}
                                        <div className="absolute w-32 h-32 rounded-full bg-[#1f77d4]/20 
                                                              blur-lg animate-pulse" />
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator Mejorado */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
                    <div className="w-6 h-10 rounded-full border-2 border-[#1f77d4]/30 
                                  flex items-start justify-center p-2 animate-pulse">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1f77d4] animate-bounce" />
                    </div>
                </div>
            </section>

            {/* Sección de Tipos de Software */}
            <section className="py-20 relative overflow-hidden">
                {/* Fondo Dinámico que mantiene coherencia con el hero */}
                <div className="absolute inset-0">
                    {/* Gradiente Base */}
                    <div className="absolute inset-0 bg-[#0a192f]" />

                    {/* Grid Animado */}
                    <div className="absolute inset-0 w-full h-full bg-[url('/patterns/software-grid.svg')] opacity-20" />

                    {/* Efectos de Luz */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1f77d4]/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1f77d4]/5 rounded-full blur-3xl" />
                    </div>

                    {/* Partículas sutiles */}
                    <div className="absolute inset-0 opacity-30">
                        {particles.map((particle, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-[#1f77d4]/20 rounded-full animate-floating"
                                style={{
                                    top: particle.top,
                                    left: particle.left,
                                    animationDelay: particle.animationDelay,
                                    animationDuration: particle.animationDuration
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeIn direction="up" duration={0.8}>
                        <div className="flex flex-col items-center mb-16">
                            <Badge text="SOLUCIONES" color="blue" />
                            <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mt-6 mb-4">
                                Desarrollamos Software para
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-[#1f77d4] to-blue-400 rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Tarjeta Escritorio */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#1f77d4] to-blue-400 rounded-xl 
                                              blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                                <div className="relative h-full bg-[#1f2937] border border-[#1f77d4]/20 rounded-xl p-8
                                              backdrop-blur-xl hover:border-[#1f77d4]/40 transition-all duration-300">
                                    <div className="flex flex-col items-center">
                                        <div className="mb-6 p-4 bg-[#0a192f] rounded-full">
                                            <svg className="w-8 h-8 text-[#1f77d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4">Software de Escritorio</h3>
                                        <p className="text-gray-300 mb-6 text-center">
                                            Creamos aplicaciones de escritorio personalizadas que mejoran la productividad y la eficiencia de tu empresa.
                                        </p>
                                        <Link href="/escritorio"
                                            className="inline-flex items-center gap-2 text-[#1f77d4] hover:text-blue-400 
                                                       transition-colors duration-300">
                                            <span>Ver más</span>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta Web */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#1f77d4] to-blue-400 rounded-xl 
                                              blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                                <div className="relative h-full bg-[#1f2937] border border-[#1f77d4]/20 rounded-xl p-8
                                              backdrop-blur-xl hover:border-[#1f77d4]/40 transition-all duration-300">
                                    <div className="flex flex-col items-center">
                                        <div className="mb-6 p-4 bg-[#0a192f] rounded-full">
                                            <svg className="w-8 h-8 text-[#1f77d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4">Desarrollo Web</h3>
                                        <p className="text-gray-300 mb-6 text-center">
                                            Desarrollamos soluciones web escalables y seguras que se adaptan a las necesidades de tu negocio.
                                        </p>
                                        <Link href="/web"
                                            className="inline-flex items-center gap-2 text-[#1f77d4] hover:text-blue-400 
                                                       transition-colors duration-300">
                                            <span>Ver más</span>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta Móvil */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#1f77d4] to-blue-400 rounded-xl 
                                              blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                                <div className="relative h-full bg-[#1f2937] border border-[#1f77d4]/20 rounded-xl p-8
                                              backdrop-blur-xl hover:border-[#1f77d4]/40 transition-all duration-300">
                                    <div className="flex flex-col items-center">
                                        <div className="mb-6 p-4 bg-[#0a192f] rounded-full">
                                            <svg className="w-8 h-8 text-[#1f77d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4">Desarrollo Móvil</h3>
                                        <p className="text-gray-300 mb-6 text-center">
                                            Creamos aplicaciones móviles intuitivas y atractivas para iOS y Android que conectan con tus usuarios.
                                        </p>
                                        <Link href="/movil"
                                            className="inline-flex items-center gap-2 text-[#1f77d4] hover:text-blue-400 
                                                       transition-colors duration-300">
                                            <span>Ver más</span>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Sección de Tecnologías */}
            <section className="py-20 relative overflow-hidden">
                {/* Fondo que mantiene coherencia */}
                <div className="absolute inset-0">
                    {/* Base color */}
                    <div className="absolute inset-0 bg-[#0a192f]" />

                    {/* Grid sutil */}
                    <div className="absolute inset-0 w-full h-full bg-[url('/patterns/software-grid.svg')] opacity-10" />

                    {/* Efectos de luz sutiles */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1f77d4]/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#1f77d4]/5 rounded-full blur-3xl" />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeIn>
                        <div className="flex flex-col items-center mb-16">
                            <Badge text="TECNOLOGÍAS" color="blue" />
                            <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mt-6 mb-4">
                                Lenguajes de Programación y Tecnologías
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-[#1f77d4] to-blue-400 rounded-full" />
                            <p className="mt-6 text-gray-400 text-center max-w-2xl">
                                Utilizamos las últimas tecnologías y frameworks para desarrollar soluciones robustas y escalables que impulsan el éxito de tu negocio.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Lenguajes de Programación */}
                            <ScaleIn delay={0.1}>
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1f77d4] to-blue-400 rounded-xl 
                                                  blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                                    <div className="relative h-full bg-[#1f2937] border border-[#1f77d4]/20 rounded-xl p-8
                                                  backdrop-blur-xl hover:border-[#1f77d4]/40 transition-all duration-300">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-xl font-bold text-white">Lenguajes de Programación</h3>
                                            <svg className="w-8 h-8 text-[#1f77d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                    d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                            </svg>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['Java', 'C++', 'C#', 'Python', 'PHP', 'JavaScript', 'Dart', 'TypeScript'].map((lang, index) => (
                                                <div key={index} className="flex items-center space-x-2 text-gray-300 group-hover:text-gray-200 transition-colors">
                                                    <div className="w-2 h-2 rounded-full bg-[#1f77d4]" />
                                                    <span>{lang}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScaleIn>

                            {/* Frameworks */}
                            <ScaleIn delay={0.2}>
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1f77d4] to-blue-400 rounded-xl 
                                                  blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                                    <div className="relative h-full bg-[#1f2937] border border-[#1f77d4]/20 rounded-xl p-8
                                                  backdrop-blur-xl hover:border-[#1f77d4]/40 transition-all duration-300">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-xl font-bold text-white">Frameworks</h3>
                                            <svg className="w-8 h-8 text-[#1f77d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                            </svg>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            {['Node.js', 'Express', 'Vue', 'Laravel', 'Flutter', 'React', 'Next.js', 'Spring', 'Angular', 'Svelte'].map((framework, index) => (
                                                <div key={index} className="flex items-center space-x-2 text-gray-300 group-hover:text-gray-200 transition-colors">
                                                    <div className="w-2 h-2 rounded-full bg-[#1f77d4]" />
                                                    <span>{framework}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScaleIn>

                            {/* Bases de Datos */}
                            <ScaleIn delay={0.3}>
                                <div className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#1f77d4] to-blue-400 rounded-xl 
                                                  blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                                    <div className="relative h-full bg-[#1f2937] border border-[#1f77d4]/20 rounded-xl p-8
                                                  backdrop-blur-xl hover:border-[#1f77d4]/40 transition-all duration-300">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-xl font-bold text-white">Bases de Datos</h3>
                                            <svg className="w-8 h-8 text-[#1f77d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                            </svg>
                                        </div>
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-lg font-semibold text-[#1f77d4] mb-3">Relacionales</h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {['MySQL', 'SQL Server', 'Postgres', 'Oracle', 'MariaDB'].map((db, index) => (
                                                        <div key={index} className="flex items-center space-x-2 text-gray-300 group-hover:text-gray-200 transition-colors">
                                                            <div className="w-2 h-2 rounded-full bg-[#1f77d4]" />
                                                            <span>{db}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-[#1f77d4] mb-3">No Relacionales</h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {['MongoDB', 'Cassandra'].map((db, index) => (
                                                        <div key={index} className="flex items-center space-x-2 text-gray-300 group-hover:text-gray-200 transition-colors">
                                                            <div className="w-2 h-2 rounded-full bg-[#1f77d4]" />
                                                            <span>{db}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScaleIn>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Sección de Ver Demos */}
            <section className="py-20 bg-[#0a192f] relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="right" duration={0.8}>
                        <div className="flex flex-col items-center mb-16">
                            <Badge text="VER DEMOS" color="blue" />
                            <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mt-6 mb-4">
                                Explora Nuestros Sistemas
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-[#1f77d4] to-blue-400 rounded-full" />
                            <p className="mt-6 text-gray-400 text-center max-w-2xl">
                                Descubre cómo nuestros sistemas pueden optimizar la gestión de tu negocio.
                            </p>
                        </div>
                        
                        <ScaleIn>
                            <DemoCards />
                        </ScaleIn>
                    </FadeIn>
                </div>
            </section>

            {/* Sección de Testimonios Mejorada */}
{/*             <section className="py-24 bg-gradient-to-b from-[#0a192f] to-[#0d1b2a] relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-[#1f77d4] rounded-full filter blur-[100px]" />
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <Badge text="TESTIMONIOS" color="blue" />
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">
                                Lo que dicen nuestros clientes
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-[#1f77d4] to-blue-400 rounded-full mx-auto" />
                            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                                Descubre por qué las empresas confían en nosotros para sus soluciones tecnológicas
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonios.map((testimonio, index) => (
                                <ScaleIn key={index} delay={index * 0.1}>
                                    <div className={`group relative bg-[#1f2937]/30 backdrop-blur-xl rounded-2xl 
                                                  overflow-hidden border border-white/5 transition-all duration-500
                                                  ${testimonio.destacado ? 'ring-2 ring-[#1f77d4]' : 'hover:border-[#1f77d4]/30'}
                                                  hover:shadow-2xl hover:shadow-[#1f77d4]/10`}>
                                        

                                        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                            <svg className="w-8 h-8 text-[#1f77d4]" fill="currentColor" viewBox="0 0 32 32">
                                                <path d="M10 8v8H6v-8h4zm12 0v8h-4v-8h4zm-11 8v6H7a4 4 0 01-4-4v-2h4zm12 0v6h-4a4 4 0 01-4-4v-2h4z" />
                                            </svg>
                                        </div>

                                        <div className="p-8">

                                            <div className="mb-6">
                                                <RatingStars rating={testimonio.autor.rating} />
                                            </div>


                                            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                                                "{testimonio.texto}"
                                            </p>

                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    <Image
                                                        src={testimonio.autor.avatar}
                                                        alt={testimonio.autor.nombre}
                                                        width={48}
                                                        height={48}
                                                        className="rounded-full border-2 border-[#1f77d4]"
                                                    />
                                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1f2937]" />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-semibold">
                                                        {testimonio.autor.nombre}
                                                    </h4>
                                                    <p className="text-sm text-gray-400">
                                                        {testimonio.autor.cargo}
                                                    </p>
                                                    <p className="text-sm text-[#1f77d4]">
                                                        {testimonio.autor.empresa}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {testimonio.destacado && (
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-[#1f77d4]/80 backdrop-blur-sm rounded-full 
                                                               text-sm text-white font-medium">
                                                    Destacado
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </ScaleIn>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section> */}

            {/* Sección de Blog */}
            <section className="py-24 bg-gradient-to-b from-[#0a192f] to-[#0d1b2a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <Badge text="BLOG & ARTÍCULOS" color="blue" />
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">
                                Últimas Tendencias y Conocimientos
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-[#1f77d4] to-blue-400 rounded-full mx-auto" />
                            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                                Mantente actualizado con las últimas tendencias en tecnología y mejores prácticas de desarrollo.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => (
                                <ScaleIn key={index} delay={index * 0.1}>
                                    <div className="group relative bg-[#1f2937]/30 backdrop-blur-xl rounded-2xl 
                                                  overflow-hidden border border-white/5 hover:border-[#1f77d4]/30 
                                                  transition-all duration-300 hover:shadow-2xl hover:shadow-[#1f77d4]/10">
                                        {/* Imagen del Post */}
                                        <div className="relative h-48 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent z-10 opacity-60" />
                                            <Image
                                                src={post.imagen}
                                                alt={post.titulo}
                                                fill
                                                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-4 left-4 z-20">
                                                <span className="px-3 py-1 bg-[#1f77d4]/80 backdrop-blur-sm rounded-full 
                                                               text-sm text-white font-medium">
                                                    {post.categoria}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Contenido del Post */}
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="text-sm text-gray-400">{post.tiempo}</span>
                                                </div>
                                                <span className="text-gray-500">•</span>
                                                <span className="text-sm text-gray-400">{post.fecha}</span>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1f77d4] transition-colors">
                                                {post.titulo}
                                            </h3>
                                            <p className="text-gray-400 mb-6 line-clamp-2">
                                                {post.descripcion}
                                            </p>

                                            {/* Autor */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={post.autor.avatar}
                                                        alt={post.autor.nombre}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full border-2 border-[#1f77d4]"
                                                    />
                                                    <div>
                                                        <h4 className="text-sm font-medium text-white">
                                                            {post.autor.nombre}
                                                        </h4>
                                                        <p className="text-xs text-gray-400">
                                                            {post.autor.rol}
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <Link href={`/blog/${post.titulo.toLowerCase().replace(/ /g, '-')}`}
                                                      className="text-[#1f77d4] hover:text-blue-400 transition-colors">
                                                    <span className="sr-only">Leer más</span>
                                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ScaleIn>
                            ))}
                        </div>

                        {/* CTA para ver más artículos */}
                        <div className="text-center mt-16">
                            <Link href="/blog"
                                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1f77d4]/10 
                                           text-[#1f77d4] font-medium rounded-lg border border-[#1f77d4]/20 
                                           hover:bg-[#1f77d4]/20 transition-all duration-300">
                                Ver todos los artículos
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Sección de CTA Final */}
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

const DemoCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
                <div key={index} className="bg-[#1f2937] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                    <div className="relative h-48">
                        <Image
                            src={demo.image}
                            alt={demo.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                        <p className="text-gray-300 mb-4">{demo.description}</p>
                        <a href={demo.demoLink} className="inline-flex items-center gap-2 text-[#1f77d4] hover:text-blue-400 transition-colors duration-300">
                            <span>Ver Demo</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Componente de Estrellas
const RatingStars = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};