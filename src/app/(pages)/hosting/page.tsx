'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaServer, FaRocket, FaShieldAlt, FaHeadset, FaCheckCircle, FaCogs, FaChartLine, FaUserTie, FaMoneyBillWave, FaLock, FaCheck, FaDatabase, FaCloud, FaGlobe, FaEnvelope, FaBolt, FaArrowRight, FaPhone, FaWhatsapp } from 'react-icons/fa';
import DecorativeBackground from '@/app/components/ui/DecorativeBackground';
import SectionHeader from '@/app/components/ui/SectionHeader';
import FeatureCard from '@/app/components/ui/FeatureCard';
import PlanCard from '@/app/components/ui/PlanCard';
import PeriodSelector from '@/app/components/ui/PeriodSelector';
import Badge from '@/app/components/ui/Badge';
import PlanesSection from '@/app/components/hosting/PlanesSection';

export default function HostingPage() {
    const [activeTab, setActiveTab] = useState('mensual');

    return (
        <main className="min-h-screen">
            {/* Hero Section 2025 - Diseño Neomórfico con Glassmorphism para Hosting */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1930] via-[#112240] to-[#1a365d] py-20">
                {/* Elementos decorativos de fondo */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Malla de gradiente */}
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
                    
                    {/* Círculos de luz con animación CSS */}
                    <div 
                        className="absolute -top-20 -left-20 w-[40rem] h-[40rem] rounded-full bg-cyan-500/5 blur-[100px] animate-pulse"
                        style={{ animationDuration: '8s' }}
                    ></div>
                    
                    <div 
                        className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] rounded-full bg-blue-500/5 blur-[80px] animate-pulse"
                        style={{ animationDuration: '10s', animationDelay: '1s' }}
                    ></div>
                    
                    {/* Elementos flotantes con CSS */}
                    <div className="absolute inset-0">
                        {/* Círculos decorativos */}
                        <div className="absolute w-16 h-16 rounded-full bg-white/5 backdrop-blur-md left-[20%] top-[30%] animate-float-slow"></div>
                        <div className="absolute w-12 h-12 rounded-full bg-white/5 backdrop-blur-md left-[70%] top-[20%] animate-float-slow" 
                             style={{ animationDelay: '2s' }}></div>
                        <div className="absolute w-20 h-20 rounded-full bg-white/5 backdrop-blur-md left-[40%] top-[60%] animate-float-slow"
                             style={{ animationDelay: '1s' }}></div>
                        <div className="absolute w-14 h-14 rounded-full bg-white/5 backdrop-blur-md left-[80%] top-[70%] animate-float-slow"
                             style={{ animationDelay: '3s' }}></div>
                        <div className="absolute w-10 h-10 rounded-full bg-white/5 backdrop-blur-md left-[10%] top-[50%] animate-float-slow"
                             style={{ animationDelay: '2.5s' }}></div>
                    </div>
                    
                    {/* Iconos flotantes temáticos con CSS */}
                    <div className="absolute text-cyan-400/10 text-5xl left-[15%] top-[20%] animate-float-slow">
                        <FaServer />
                    </div>
                    <div className="absolute text-cyan-400/10 text-4xl left-[75%] top-[15%] animate-float-slow"
                         style={{ animationDelay: '2s' }}>
                        <FaDatabase />
                    </div>
                    <div className="absolute text-cyan-400/10 text-5xl left-[25%] top-[65%] animate-float-slow"
                         style={{ animationDelay: '1.5s' }}>
                        <FaCloud />
                    </div>
                    <div className="absolute text-cyan-400/10 text-4xl left-[65%] top-[60%] animate-float-slow"
                         style={{ animationDelay: '3s' }}>
                        <FaGlobe />
                    </div>
                    <div className="absolute text-cyan-400/10 text-3xl left-[45%] top-[30%] animate-float-slow"
                         style={{ animationDelay: '2.5s' }}>
                        <FaLock />
                    </div>
                </div>
                
                {/* Contenido principal */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 flex flex-col lg:flex-row items-center gap-16">
                    {/* Columna de texto */}
                    <div className="flex-1 z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <Badge text="HOSTING PROFESIONAL" />
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            <span className="block">Cloud Hosting</span>
                            <span className="block text-cyan-400">de alto rendimiento</span>
                        </h1>
                        
                        <p className="text-blue-100/80 text-lg mb-8 max-w-2xl">
                            Alojamiento web optimizado con tecnología NVMe, certificados SSL gratuitos, panel cPanel y soporte técnico 24/7 para tu sitio web o aplicación.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-10">
                            <Link 
                                href="#planes"
                                className="relative overflow-hidden group px-6 py-3 bg-cyan-600 text-white font-medium rounded-xl inline-flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
                            >
                                <span className="relative z-10">Ver planes</span>
                                <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                
                                {/* Efecto de brillo en hover */}
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out"></div>
                            </Link>
                            
                            <Link 
                                href="/contacto"
                                className="px-6 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium rounded-xl inline-flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
                            >
                                <FaEnvelope className="w-4 h-4" />
                                <span>Contactar</span>
                            </Link>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white text-xs border-2 border-blue-900">
                                    <FaCheck />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs border-2 border-blue-900">
                                    <FaServer />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white text-xs border-2 border-blue-900">
                                    <FaShieldAlt />
                                </div>
                            </div>
                            <div className="text-blue-100/70 text-sm">
                                <span className="font-semibold text-white">99.9%</span> de tiempo de actividad garantizado
                            </div>
                        </div>
                    </div>
                    
                    {/* Columna de imagen/ilustración */}
                    <div className="flex-1 relative z-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="relative">
                            {/* Tarjeta de producto principal */}
                            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                        <FaServer className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-1">Plan Premium</h3>
                                        <p className="text-blue-100/70 text-sm mb-3">Hosting optimizado para sitios profesionales</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-cyan-400">S/. 55.86</span>
                                            <span className="text-xs text-blue-300/70">/mes</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <ul className="space-y-2">
                                        <li className="flex items-center text-sm text-blue-100/70">
                                            <FaCheck className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                            <span>10 GB SSD NVMe</span>
                                        </li>
                                        <li className="flex items-center text-sm text-blue-100/70">
                                            <FaCheck className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                            <span>Transferencia Ilimitada</span>
                                        </li>
                                        <li className="flex items-center text-sm text-blue-100/70">
                                            <FaCheck className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                            <span>SSL Gratis + cPanel</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            {/* Tarjetas flotantes secundarias con animación CSS */}
                            <div 
                                className="absolute -top-6 -right-6 bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10 shadow-lg w-48 animate-float-slow"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                        <FaGlobe className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-white">Dominio .COM</h4>
                                        <span className="text-xs text-blue-100/70">S/. 54.90 /año</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div 
                                className="absolute -bottom-16 -left-4 bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10 shadow-lg w-44 animate-float-slow"
                                style={{ animationDelay: '1s' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                                        <FaShieldAlt className="w-5 h-5 text-teal-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-white">SSL Gratis</h4>
                                        <span className="text-xs text-blue-100/70">Incluido</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Indicador de desplazamiento con CSS */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <div className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex justify-center p-1 animate-bounce-slow">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-scroll-indicator"></div>
                    </div>
                </div>
            </section>

            {/* Por qué elegirnos - Diseño 2025 con componentes reutilizables */}
            <section id="por-que-elegirnos" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <DecorativeBackground />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <SectionHeader
                        badge="BENEFICIOS"
                        badgeColor="blue"
                        title="¿Por qué elegirnos?"
                        description="Descubre las ventajas que nos diferencian y hacen de nuestro servicio la mejor opción para tu proyecto web."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<FaServer />}
                            title="Infraestructura de Vanguardia"
                            description="Nuestros servidores cuentan con procesadores de última generación Intel Xeon Quad Core, con Discos Duros SSD NVMe, SAS y SATA con arreglos RAID para máximo rendimiento."
                            colorScheme="blue"
                            delay="0.4s"
                        />

                        <FeatureCard
                            icon={<FaRocket />}
                            title="Alta velocidad y Conectividad"
                            description="Nuestros Centros de Datos cuentan con 8 distintos proveedores de Internet, asegurando una alta redundancia y conectividad, acumulando en total alrededor de 250 Gbps de capacidad."
                            colorScheme="indigo"
                            delay="0.5s"
                        />

                        <FeatureCard
                            icon={<FaShieldAlt />}
                            title="Seguridad y Confiabilidad"
                            description="Contamos con sistemas de seguridad física y lógica, con monitoreo 24/7, sistemas de detección y extinción de incendios, y múltiples capas de seguridad para proteger sus datos."
                            colorScheme="cyan"
                            delay="0.6s"
                        />

                        <FeatureCard
                            icon={<FaHeadset />}
                            title="Soporte Técnico 24/7"
                            description="Nuestro equipo de soporte está compuesto por profesionales altamente calificados que responden cada consulta y requerimiento de forma seria, responsable y profesional en el mejor tiempo."
                            colorScheme="green"
                            delay="0.7s"
                        />

                        <FeatureCard
                            icon={<FaUserTie />}
                            title="Experiencia y Trayectoria"
                            description="Conocemos el negocio desde hace más de 20 años y sabemos lo que necesita. Con más de 10,000 Sitios Webs alojados que hacen uso intensivo de todos nuestros servicios y soluciones."
                            colorScheme="purple"
                            delay="0.8s"
                        />
                    </div>
                </div>
            </section>

            {/* Planes de Hosting con diseño 2025 */}
            <PlanesSection />

            {/* Sección de Registro de Dominios - Diseño Personalizado 2025 */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white">
                {/* Elementos decorativos de fondo */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-radial from-purple-100/40 to-transparent opacity-70"></div>
                    <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] rounded-full bg-gradient-radial from-blue-100/30 to-transparent opacity-50"></div>
                    <svg className="absolute top-20 left-10 text-indigo-200 w-64 h-64 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M42.7,-73.4C55.9,-67.7,67.4,-57.5,76.3,-44.5C85.2,-31.5,91.6,-15.7,90.5,-0.6C89.5,14.4,81.1,28.9,71.6,41.8C62.2,54.7,51.8,66.1,39,73.4C26.2,80.7,11.1,83.9,-3.2,88.8C-17.5,93.7,-35,100.3,-48.2,95.9C-61.4,91.6,-70.2,76.3,-76.6,60.8C-83,45.3,-87,29.7,-88.9,13.8C-90.8,-2.1,-90.6,-18.3,-84.6,-31.6C-78.6,-44.9,-66.8,-55.3,-53.5,-60.9C-40.2,-66.5,-25.4,-67.3,-11.3,-70.8C2.8,-74.3,16.9,-80.5,29.5,-79.1C42.1,-77.7,53.2,-68.7,42.7,-73.4Z" transform="translate(100 100)" />
                    </svg>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <SectionHeader
                        badge="DOMINIOS"
                        badgeColor="purple"
                        title="Registro de Dominios"
                        description="Asegura tu presencia en línea con un dominio profesional. Ofrecemos una amplia variedad de extensiones para tu negocio o proyecto personal."
                    />
                    
                    {/* Dominios destacados con diseño hexagonal */}
                    <div className="flex flex-wrap justify-center gap-6 mb-16">
                        {/* Dominio .COM */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="relative bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden p-6 w-[280px] h-[280px] flex flex-col justify-between transition-transform duration-300 group-hover:translate-y-[-5px]">
                                <div>
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-4">
                                        Global
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-800 mb-1">.COM</h3>
                                    <p className="text-gray-500 text-sm mb-4">Dominio comercial internacional</p>
                                    <div className="text-2xl font-bold text-gray-900 mb-1">S/. 54.90</div>
                                    <div className="text-gray-500 text-sm">+ IGV / año</div>
                                </div>
                                <ul className="mt-4 space-y-1">
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Reconocimiento mundial
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Ideal para negocios
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Dominio .PE */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="relative bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden p-6 w-[280px] h-[280px] flex flex-col justify-between transition-transform duration-300 group-hover:translate-y-[-5px]">
                                <div>
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-medium mb-4">
                                        Recomendado
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-800 mb-1">.PE</h3>
                                    <p className="text-gray-500 text-sm mb-4">Dominio país Perú</p>
                                    <div className="text-2xl font-bold text-gray-900 mb-1">S/. 117.80</div>
                                    <div className="text-gray-500 text-sm">+ IGV / año</div>
                                </div>
                                <ul className="mt-4 space-y-1">
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Dominio corto y memorable
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Identidad peruana
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Dominio .ORG */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                            <div className="relative bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden p-6 w-[280px] h-[280px] flex flex-col justify-between transition-transform duration-300 group-hover:translate-y-[-5px]">
                                <div>
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium mb-4">
                                        Organizaciones
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-800 mb-1">.ORG</h3>
                                    <p className="text-gray-500 text-sm mb-4">Dominio para organizaciones</p>
                                    <div className="text-2xl font-bold text-gray-900 mb-1">S/. 59.90</div>
                                    <div className="text-gray-500 text-sm">+ IGV / año</div>
                                </div>
                                <ul className="mt-4 space-y-1">
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Ideal para ONGs
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Transmite confianza
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* Tabla de precios con diseño moderno */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-gray-100">
                        <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600">
                            <h3 className="text-xl font-bold text-white">Lista de Precios de Dominios</h3>
                            <p className="text-indigo-100 text-sm">Todos los precios no incluyen IGV</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                            {/* Columna 1 */}
                            <div className="p-6">
                                <h4 className="font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Dominios Globales</h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">.COM</span>
                                        <span className="text-gray-600">S/. 54.90</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">.NET</span>
                                        <span className="text-gray-600">S/. 64.90</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">.ORG</span>
                                        <span className="text-gray-600">S/. 59.90</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">.INFO</span>
                                        <span className="text-gray-600">S/. 119.90</span>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Columna 2 */}
                            <div className="p-6">
                                <h4 className="font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Dominios Especiales</h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">.NAME</span>
                                        <span className="text-gray-600">S/. 39.90</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">.US</span>
                                        <span className="text-gray-600">S/. 79.90</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">.BIZ</span>
                                        <span className="text-gray-600">S/. 89.90</span>
                                    </li>
                                </ul>
                            </div>
                            
                            {/* Columna 3 */}
                            <div className="p-6">
                                <h4 className="font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Dominios Premium</h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">.PE</span>
                                        <span className="text-gray-600">S/. 117.80</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">.WS</span>
                                        <span className="text-gray-600">S/. 129.90</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">.TV</span>
                                        <span className="text-gray-600">S/. 169.90</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* Información de DNS y Beneficios con diseño de tarjetas con iconos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Tarjeta de DNS */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="p-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                            <div className="p-8">
                                <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Sobre cambio de DNS</h3>
                                <p className="text-gray-600 mb-6">
                                    Si ya cuenta con un dominio registrado en cualquier otra empresa y desea acceder a
                                    nuestro servicio de Hosting, sólo debe consignarle nuestros DNS.
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                                        <h4 className="font-bold text-gray-800 mb-2">DNS PRIMARIO:</h4>
                                        <p className="text-indigo-600 font-medium">ns1.hpserverdns.com</p>
                                    </div>

                                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                                        <h4 className="font-bold text-gray-800 mb-2">DNS SECUNDARIO:</h4>
                                        <p className="text-indigo-600 font-medium">ns2.hpserverdns.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                
                        {/* Tarjeta de Beneficios */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="p-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                            <div className="p-8">
                                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Beneficios incluidos</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Redirección gratuita incluida con cada dominio</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Panel de control intuitivo para gestionar tus dominios</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Protección de privacidad WHOIS disponible</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Renovación automática opcional</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Soporte técnico especializado 24/7</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final - Diseño 2025 con colores corporativos */}
            <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0a192f] via-[#0f2344] to-[#0a192f]">
                {/* Elementos decorativos de fondo */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-radial from-[#1f77d4]/10 to-transparent opacity-70"></div>
                    <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] rounded-full bg-gradient-radial from-[#1f77d4]/10 to-transparent opacity-50"></div>
                    
                    {/* Patrones geométricos */}
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
                    
                    {/* Formas flotantes */}
                    <div className="absolute w-20 h-20 rounded-full bg-[#1f77d4]/10 blur-xl top-20 left-[20%] animate-float-slow"></div>
                    <div className="absolute w-32 h-32 rounded-full bg-[#1f77d4]/10 blur-xl bottom-20 right-[20%] animate-float-slow" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute w-16 h-16 rounded-full bg-[#1f77d4]/10 blur-xl top-1/2 left-[70%] animate-float-slow" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl overflow-hidden">
                        {/* Elemento decorativo de la tarjeta */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#1f77d4]/20 to-[#1f77d4]/10 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-[#1f77d4]/20 to-[#0a192f]/30 rounded-full blur-2xl"></div>
                        
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                            <div className="lg:max-w-2xl">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#1f77d4]/20 text-[#1f77d4] text-xs font-medium mb-6">
                                    SOPORTE ESPECIALIZADO 24/7
                                </div>
                                
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                    ¿Necesitas ayuda con tu proyecto web?
                                </h2>
                                
                                <p className="text-white/80 text-lg mb-8">
                                    Nuestro equipo de expertos está listo para asesorarte y encontrar la solución perfecta para tus necesidades de hosting y dominios. Contáctanos hoy mismo.
                                </p>
                                
                                <div className="flex flex-wrap gap-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-[#1f77d4]/20 flex items-center justify-center">
                                            <FaHeadset className="w-5 h-5 text-[#1f77d4]" />
                                        </div>
                                        <span className="text-white/90">Soporte técnico 24/7</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-[#1f77d4]/20 flex items-center justify-center">
                                            <FaBolt className="w-5 h-5 text-[#1f77d4]" />
                                        </div>
                                        <span className="text-white/90">Respuesta rápida</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-[#1f77d4]/20 flex items-center justify-center">
                                            <FaUserTie className="w-5 h-5 text-[#1f77d4]" />
                                        </div>
                                        <span className="text-white/90">Asesoría personalizada</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full lg:w-auto">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
                                    <h3 className="text-xl font-semibold text-white mb-6">Contáctanos ahora</h3>
                                    
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-3 text-white/90">
                                            <FaEnvelope className="w-5 h-5 text-[#1f77d4]" />
                                            <span>soporte@cloud-byte.com</span>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 text-white/90">
                                            <FaWhatsapp className="w-5 h-5 text-[#1f77d4]" />
                                            <span>+51 976709804</span>
                                        </div>
                                    </div>
                                    
                                    <Link 
                                        href="/contacto"
                                        className="w-full relative overflow-hidden group px-6 py-3 bg-[#1f77d4] text-white font-medium rounded-xl inline-flex items-center justify-center gap-2 shadow-lg shadow-[#1f77d4]/25 hover:shadow-[#1f77d4]/40 transition-all duration-300 hover:scale-105"
                                    >
                                        <span className="relative z-10">Contactar ahora</span>
                                        <FaArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                                        
                                        {/* Efecto de brillo en hover */}
                                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Logos de clientes o partners */}
{/*                     <div className="mt-16 text-center">
                        <p className="text-white/50 text-sm mb-8">Empresas que confían en nuestros servicios</p>
                        
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            <div className="w-24 h-12 bg-white/5 backdrop-blur-md rounded-lg flex items-center justify-center">
                                <div className="text-white/30 font-bold text-lg">EMPRESA 1</div>
                            </div>
                            <div className="w-24 h-12 bg-white/5 backdrop-blur-md rounded-lg flex items-center justify-center">
                                <div className="text-white/30 font-bold text-lg">EMPRESA 2</div>
                            </div>
                            <div className="w-24 h-12 bg-white/5 backdrop-blur-md rounded-lg flex items-center justify-center">
                                <div className="text-white/30 font-bold text-lg">EMPRESA 3</div>
                            </div>
                            <div className="w-24 h-12 bg-white/5 backdrop-blur-md rounded-lg flex items-center justify-center">
                                <div className="text-white/30 font-bold text-lg">EMPRESA 4</div>
                            </div>
                            <div className="w-24 h-12 bg-white/5 backdrop-blur-md rounded-lg flex items-center justify-center">
                                <div className="text-white/30 font-bold text-lg">EMPRESA 5</div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </main>
    );
} 