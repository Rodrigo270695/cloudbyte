import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from '@/app/components/animations/FadeIn';
import ScrollToTop from '@/app/components/ScrollToTop';
import ScaleIn from '@/app/components/animations/ScaleIn';
import AnimatedCounter from '@/app/components/AnimatedCounter';
import InfiniteLogoCarousel from '@/app/components/InfiniteLogoCarousel';
import Badge from '@/app/components/ui/Badge';


// Datos estructurados para SEO
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CloudByte",
    "url": "https://www.cloud-byte.com",
    "logo": "https://www.cloud-byte.com/images/cloudbyte.png",
    "description": "Empresa líder en servicios de TI y transformación digital en Latinoamérica. Ofrecemos soluciones en cloud computing, ciberseguridad, infraestructura TI y soporte técnico.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ciudad",
        "addressCountry": "PE"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+51 976709804",
        "contactType": "customer service",
        "email": "contacto@cloudbyte.com"
    }
};

export const metadata: Metadata = {
    metadataBase: new URL('https://www.cloud-byte.com'),
    title: "CloudByte | Servicios TI y Transformación Digital Empresarial",
    description: "Impulsa la transformación digital de tu empresa con CloudByte. Expertos en servicios TI, cloud computing, ciberseguridad y soporte técnico 24/7.",
    keywords: "servicios TI, cloud computing, ciberseguridad, soporte técnico, transformación digital, infraestructura TI, CloudByte",
    openGraph: {
        type: 'website',
        locale: 'es_PE',
        url: 'https://www.cloud-byte.com',
        siteName: 'CloudByte',
        title: 'CloudByte | Impulsa tu Transformación Digital',
        description: 'Soluciones tecnológicas innovadoras para empresas. Cloud computing, ciberseguridad y servicios TI.',
        images: [
            {
                url: '/images/og-cloudbyte.jpg',
                width: 1200,
                height: 630,
                alt: 'CloudByte Servicios TI'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        site: '@CloudByte',
        creator: '@CloudByte'
    },
    alternates: {
        canonical: 'https://www.cloud-byte.com',
        languages: {
            'es': 'https://www.cloud-byte.com'
        }
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'tu-codigo-de-verificacion',
    }
};

const servicesData = [
    {
        title: "Servicios TI",
        description: "Soluciones tecnológicas integrales para tu empresa",
        icon: "🔧",
        href: "/servicios-ti"
    },
    {
        title: "Ciberseguridad",
        description: "Protección avanzada contra amenazas digitales",
        icon: "🔒",
        href: "/ciberseguridad"
    },
    {
        title: "Cloud Computing",
        description: "Servicios en la nube escalables y seguros",
        icon: "☁️",
        href: "/cloud-computing"
    },
    {
        title: "Soluciones de Respaldo",
        description: "Soluciones de respaldo para tu empresa",
        icon: "💾",
        href: "/respaldos"
    },
    {
        title: "Infraestructura TI",
        description: "Diseño y gestión de infraestructura tecnológica",
        icon: "🖥️",
        href: "/infraestructura"
    },
    {
        title: "Soporte Técnico",
        description: "Asistencia técnica especializada 24/7",
        icon: "🛠️",
        href: "/soporte"
    },
    {
        title: "Desarrollo de Software Empresarial",
        description: "Soluciones digitales personalizadas y escalables para tu negocio",
        icon: "💻",
        href: "/desarrollo-software"
    },
    {
        title: "Licenciamiento Corporativo",
        description: "Gestión y distribución autorizada de software premium",
        icon: "🔑",
        href: "/licencias"
    },
    {
        title: "Hosting & Dominios",
        description: "Alojamiento web de alto rendimiento y registro de dominios",
        icon: "🌐",
        href: "/hosting"
    }
];

// Definimos el array con los valores diferenciales
const valoresDiferenciales = [
    {
        titulo: "Garantía",
        descripcion: "Nuestros productos y servicios cuentan con garantía de atención y soporte técnico.",
        icono: "🛡️"
    },
    {
        titulo: "Metodología",
        descripcion: "Usamos metodologías de trabajo alineadas a las mejores prácticas en TI.",
        icono: "📈"
    },
    {
        titulo: "Asesoría comercial",
        descripcion: "Evaluamos cada requerimiento y proponemos la mejor solución.",
        icono: "🤝"
    },
    {
        titulo: "Clientes satisfechos",
        descripcion: "Entregamos los proyectos y servicios en los plazos acordados.",
        icono: "⭐"
    },
    {
        titulo: "Personal calificado",
        descripcion: "Nuestros ingenieros cuentan con certificaciones y amplia experiencia.",
        icono: "👨‍💻"
    },
    {
        titulo: "Cobertura nacional",
        descripcion: "Atención a nivel nacional con soporte remoto y presencial.",
        icono: "🌎"
    }
];

// Definimos la interfaz para los props
interface ValorDiferencialCardProps {
    titulo: string;
    descripcion: string;
    icono: React.ReactNode;
    delay: number;
}

// Componente para la tarjeta de valor diferencial
const ValorDiferencialCard = ({ titulo, descripcion, icono, delay }: ValorDiferencialCardProps) => (
    <ScaleIn delay={delay}>
        <div className="group relative bg-white p-8 rounded-2xl shadow-xl
                      border border-gray-100 hover:border-blue-200
                      transition-all duration-300 hover:shadow-2xl
                      hover:shadow-blue-100">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-transparent
                          group-hover:from-blue-50 rounded-2xl transition-all duration-500" />
            <div className="relative">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-3xl">{icono}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{titulo}</h3>
                <p className="text-gray-600">{descripcion}</p>
            </div>
        </div>
    </ScaleIn>
);

// Componente para la sección completa
const ValorDiferencialSection = () => (
    <section className="py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
            <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <FadeIn>
                <div className="text-center mb-20">
                    <Badge text="¿POR QUÉ ELEGIRNOS?" color="blue" />
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nuestro Valor
                        <span className="text-transparent bg-clip-text 
                                       bg-gradient-to-r from-blue-600 to-indigo-600">
                            {" "}Diferencial
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {valoresDiferenciales.map((valor, index) => (
                        <ValorDiferencialCard
                            key={index}
                            {...valor}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </FadeIn>
        </div>
    </section>
);

// Datos de estadísticas
const estadisticas = [
    {
        numero: 500,
        texto: "Clientes Satisfechos",
        icono: "👥",
        sufijo: "+"
    },
    {
        numero: 99.9,
        texto: "Disponibilidad",
        icono: "⚡",
        sufijo: "%"
    },
    {
        numero: 1000,
        texto: "Proyectos Completados",
        icono: "🎯",
        sufijo: "+"
    },
    {
        numero: 10,
        texto: "Años de Experiencia",
        icono: "⭐",
        sufijo: "+"
    },
    {
        numero: 24,
        texto: "Soporte Disponible",
        icono: "🔧",
        sufijo: "/7"
    },
    {
        numero: 100,
        texto: "Certificaciones",
        icono: "📜",
        sufijo: "+"
    }
];

export default function HomePage() {
    return (
        <>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen">
                {/* Hero Section Ultra Moderno 2025 */}
                <section className="relative h-[90vh] overflow-hidden bg-[#0a192f]">
                    {/* Fondo Dinámico */}
                    <div className="absolute inset-0">
                        {/* Gradiente Base */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0a192f]/95 to-[#1f77d4]/10" />

                        {/* Grid Animado */}
                        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-20 
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
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-2 h-2 bg-[#1f77d4]/30 rounded-full 
                                             animate-floating"
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 5}s`,
                                        animationDuration: `${5 + Math.random() * 10}s`
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Contenido Principal */}
                    <div className="relative h-full flex items-center z-30">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Texto y CTA */}
                                <FadeIn direction="up" duration={0.8}>
                                    <div className="space-y-8">
                                        {/* Slogan Principal */}
                                        <div className="space-y-2">
                                            <span className="text-[#1f77d4] font-medium tracking-wider">
                                                CLOUD BYTE
                                            </span>
                                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                                <span className="block text-white opacity-95">
                                                    Transforma tu
                                                </span>
                                                <span className="block text-transparent bg-clip-text 
                                                               bg-gradient-to-r from-[#1f77d4] via-blue-400 
                                                               to-[#1f77d4] animate-gradient bg-300%">
                                                    negocio
                                                </span>
                                                <span className="block text-white opacity-95 text-3xl md:text-4xl lg:text-5xl">
                                                    un byte a la vez
                                                </span>
                                            </h1>
                                        </div>

                                        <p className="text-xl text-gray-300 max-w-2xl animate-fade-in-up delay-300">
                                            Potenciamos la transformación digital de tu empresa con soluciones
                                            tecnológicas innovadoras y personalizadas para la era moderna.
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

                                                <span className="relative z-10">Inicia tu Transformación</span>
                                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>

                                            <Link
                                                href="/servicios"
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
                                    <div className="relative h-[400px] hidden lg:block">
                                        {/* Círculos Flotantes */}
                                        <div className="absolute inset-0">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 
                                                          -translate-y-1/2 w-64 h-64 rounded-full 
                                                          border-2 border-[#1f77d4]/30 animate-spin-slow" />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 
                                                          -translate-y-1/2 w-80 h-80 rounded-full 
                                                          border-2 border-[#1f77d4]/20 animate-reverse-spin" />
                                        </div>

                                        {/* Iconos Tecnológicos Flotantes */}
                                        {['⚡', '🔒', '☁️', '🔧'].map((icon, index) => (
                                            <div
                                                key={index}
                                                className="absolute w-12 h-12 bg-[#0a192f]/90 
                                                         rounded-xl flex items-center justify-center 
                                                         text-2xl shadow-lg animate-float"
                                                style={{
                                                    top: `${25 + (index * 25)}%`,
                                                    left: `${20 + (index * 20)}%`,
                                                    animationDelay: `${index * 0.5}s`
                                                }}
                                            >
                                                {icon}
                                            </div>
                                        ))}
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

                {/* Servicios Principales con diseño premium y efecto glassmorphism */}
                <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0a192f] to-[#0a192f]/95">
                    {/* Efectos de fondo */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-5" />
                        {/* Esferas de luz con blur */}
                        <div className="absolute top-20 right-0 w-96 h-96 bg-[#1f77d4]/10 rounded-full blur-3xl animate-pulse-slow" />
                        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#1f77d4]/5 rounded-full blur-3xl animate-float" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <FadeIn>
                            <div className="text-center mb-20">
                                <Badge text="NUESTROS SERVICIOS" color="blue" />
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Soluciones que
                                    <span className="text-transparent bg-clip-text 
                                                   bg-gradient-to-r from-[#1f77d4] to-blue-400">
                                        {" "}Impulsan tu Negocio
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                    Transformamos empresas con tecnología de vanguardia y servicios personalizados
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {servicesData.map((service, index) => (
                                    <ScaleIn key={index} delay={index * 0.1}>
                                        <Link href={service.href}
                                            className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-2xl
                                                       border border-white/10 hover:border-[#1f77d4]/30
                                                       transition-all duration-500 hover:-translate-y-2
                                                       flex flex-col h-full">
                                            {/* Efecto de brillo en hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#1f77d4]/0 to-transparent
                                                          group-hover:from-[#1f77d4]/10 rounded-2xl transition-all duration-500" />

                                            <div className="relative flex flex-col h-full">
                                                {/* Icono con efecto de hover */}
                                                <div className="mb-6 p-4 rounded-2xl bg-[#1f77d4]/10 w-16 h-16
                                                              flex items-center justify-center
                                                              group-hover:bg-[#1f77d4]/20 transition-all duration-300">
                                                    <span className="text-3xl transform transition-transform 
                                                                   duration-300 group-hover:scale-110">
                                                        {service.icon}
                                                    </span>
                                                </div>

                                                {/* Contenido */}
                                                <h3 className="text-2xl font-bold text-white mb-4">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-400 mb-6 flex-grow">
                                                    {service.description}
                                                </p>

                                                {/* Botón de explorar */}
                                                <div className="inline-flex items-center text-[#1f77d4] mt-auto
                                                              group-hover:translate-x-2 transition-transform duration-300">
                                                    <span className="font-semibold">Explorar Solución</span>
                                                    <svg className="w-5 h-5 ml-2 transition-transform duration-300"
                                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </Link>
                                    </ScaleIn>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </section>

                <ValorDiferencialSection />

                {/* Sección de Estadísticas con diseño impactante */}
                <section className="py-32 relative overflow-hidden bg-[#0a192f]">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
                        <div className="absolute top-0 w-full h-px bg-gradient-to-r 
                                      from-transparent via-[#1f77d4]/20 to-transparent" />
                        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r 
                                      from-transparent via-[#1f77d4]/20 to-transparent" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                            {estadisticas.map((stat, index) => (
                                <FadeIn key={index} delay={index * 0.1}>
                                    <div className="text-center p-8 backdrop-blur-sm bg-white/5 rounded-2xl
                                                  border border-[#1f77d4]/10 hover:border-[#1f77d4]/30 
                                                  transition-all duration-300 group">
                                        <div className="text-4xl mb-4">{stat.icono}</div>
                                        <div className="text-5xl font-bold text-[#1f77d4] mb-2 
                                                      flex items-center justify-center">
                                            <AnimatedCounter end={stat.numero} />
                                            <span className="ml-1">{stat.sufijo}</span>
                                        </div>
                                        <div className="text-gray-400 font-medium group-hover:text-gray-300 
                                                      transition-colors duration-300">
                                            {stat.texto}
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                <PartnersSection />

                {/* CTA Final con diseño llamativo */}
                <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0a192f] to-[#1f77d4]">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-10" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <FadeIn>
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-white mb-8">
                                    ¿Listo para transformar tu negocio?
                                </h2>
                                <Link href="/contacto"
                                    className="inline-flex items-center px-8 py-4 bg-white text-[#0a192f] 
                                               font-semibold rounded-xl transition-all duration-300 
                                               hover:bg-[#1f77d4] hover:text-white hover:scale-105">
                                    Comienza Ahora
                                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                <ScrollToTop />
            </main>
        </>
    );
}

const PartnersSection = () => (
    <section className="py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
            <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <FadeIn>
                <div className="text-center mb-20">
                    <Badge text="Partners Tecnológicos" color="blue" />
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nuestros{" "}
                        <span className="text-transparent bg-clip-text 
                                     bg-gradient-to-r from-blue-600 to-indigo-600">
                            Socios Estratégicos
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Trabajamos con las mejores empresas tecnológicas para brindarte soluciones de clase mundial
                    </p>
                </div>

                <InfiniteLogoCarousel />
            </FadeIn>
        </div>
    </section>
);
