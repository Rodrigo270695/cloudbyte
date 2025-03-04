'use client';

import Link from "next/link";
import Badge from '@/app/components/ui/Badge';
import ScrollToTop from '@/app/components/ScrollToTop';
import { FaShieldAlt, FaWindows, FaFileAlt, FaEnvelope, FaCheck, FaServer, FaLock } from 'react-icons/fa';
import ProductSection from '@/app/components/ProductSection';

// Importar los datos de productos
import { 
    productosDestacados, 
    productosAntivirus, 
    otrosProductos, 
    productosMac, 
    nuevosIngresos 
} from '@/app/data/productos';

export default function LicenciasPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section 2025 - Diseño Neomórfico con Glassmorphism (sin motion) */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1930] via-[#112240] to-[#1a365d] py-20">
                {/* Elementos decorativos de fondo */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Malla de gradiente */}
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
                    
                    {/* Círculos de luz con animación CSS */}
                    <div 
                        className="absolute -top-20 -left-20 w-[40rem] h-[40rem] rounded-full bg-blue-500/5 blur-[100px] animate-pulse"
                        style={{ animationDuration: '8s' }}
                    ></div>
                    
                    <div 
                        className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] rounded-full bg-indigo-500/5 blur-[80px] animate-pulse"
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
                    <div className="absolute text-blue-400/10 text-5xl left-[15%] top-[20%] animate-float-slow">
                        <FaWindows />
                    </div>
                    <div className="absolute text-blue-400/10 text-4xl left-[75%] top-[15%] animate-float-slow"
                         style={{ animationDelay: '2s' }}>
                        <FaShieldAlt />
                    </div>
                    <div className="absolute text-blue-400/10 text-5xl left-[25%] top-[65%] animate-float-slow"
                         style={{ animationDelay: '1.5s' }}>
                        <FaFileAlt />
                    </div>
                    <div className="absolute text-blue-400/10 text-4xl left-[65%] top-[60%] animate-float-slow"
                         style={{ animationDelay: '3s' }}>
                        <FaServer />
                    </div>
                    <div className="absolute text-blue-400/10 text-3xl left-[45%] top-[30%] animate-float-slow"
                         style={{ animationDelay: '2.5s' }}>
                        <FaLock />
                    </div>
                </div>
                
                {/* Contenido principal */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 flex flex-col lg:flex-row items-center gap-16">
                    {/* Columna de texto */}
                    <div className="flex-1 z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <Badge text="LICENCIAS 100% ORIGINALES" />
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            <span className="block">Software original</span>
                            <span className="block text-blue-400">al mejor precio</span>
                        </h1>
                        
                        <p className="text-blue-100/80 text-lg mb-8 max-w-2xl">
                            Adquiere licencias originales de Microsoft Office, Windows, antivirus y más software profesional con entrega inmediata y soporte técnico incluido.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-10">
                            <Link 
                                href="#productos-destacados"
                                className="relative overflow-hidden group px-6 py-3 bg-blue-600 text-white font-medium rounded-xl inline-flex items-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                            >
                                <span className="relative z-10">Ver productos</span>
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
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs border-2 border-blue-900">
                                    <FaCheck />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs border-2 border-blue-900">
                                    <FaWindows />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white text-xs border-2 border-blue-900">
                                    <FaShieldAlt />
                                </div>
                            </div>
                            <div className="text-blue-100/70 text-sm">
                                <span className="font-semibold text-white">+1000</span> clientes satisfechos
                            </div>
                        </div>
                    </div>
                    
                    {/* Columna de imagen/ilustración */}
                    <div className="flex-1 relative z-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="relative">
                            {/* Tarjeta de producto principal */}
                            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                        <FaWindows className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-1">Windows 11 Pro</h3>
                                        <p className="text-blue-100/70 text-sm mb-3">Sistema operativo con funciones avanzadas</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-blue-400">S/. 23</span>
                                            <span className="text-xs text-blue-300/70 line-through">S/. 30</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Tarjetas flotantes secundarias con animación CSS */}
                            <div 
                                className="absolute -top-6 -right-6 bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10 shadow-lg w-48 animate-float-slow"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                        <FaFileAlt className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-white">Office 2021</h4>
                                        <span className="text-xs text-blue-100/70">S/. 26</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div 
                                className="absolute -bottom-16 -left-4 bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10 shadow-lg w-44 animate-float-slow"
                                style={{ animationDelay: '1s' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                                        <FaShieldAlt className="w-5 h-5 text-red-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-white">Antivirus</h4>
                                        <span className="text-xs text-blue-100/70">S/. 20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Indicador de desplazamiento con CSS */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center p-1 animate-bounce-slow">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-scroll-indicator"></div>
                    </div>
                </div>
            </section>
            
            {/* Secciones de productos reutilizando los componentes existentes */}
            <ProductSection
                id="productos-destacados"
                title="Productos Destacados"
                subtitle="Nuestras licencias más populares con entrega inmediata y garantía de activación."
                badgeText="DESTACADOS"
                badgeColor="blue"
                buttonColor="blue"
                productBadgeText="Popular"
                products={productosDestacados}
                bgColor="bg-white"
            />
            
            <ProductSection
                id="antivirus"
                title="Antivirus y Seguridad"
                subtitle="Protege tus dispositivos contra amenazas digitales con soluciones de seguridad premium."
                badgeText="PROTECCIÓN"
                badgeColor="red"
                buttonColor="red"
                productBadgeText="Seguridad"
                products={productosAntivirus}
                bgColor="bg-gray-50"
            />
            
            <ProductSection
                id="otros-productos"
                title="Otros Productos"
                subtitle="Descubre más soluciones de software para potenciar tu productividad."
                badgeText="VARIEDAD"
                badgeColor="purple"
                buttonColor="purple"
                productBadgeText="Software"
                products={otrosProductos}
                bgColor="bg-white"
            />
            
            <ProductSection
                id="office-mac"
                title="Office para Mac"
                subtitle="Soluciones de productividad Microsoft diseñadas específicamente para el ecosistema Apple."
                badgeText="PARA USUARIOS MAC"
                badgeColor="orange"
                buttonColor="orange"
                productBadgeText="Para Mac"
                products={productosMac}
                bgColor="bg-gray-50"
            />
            
            <ProductSection
                id="nuevos-ingresos"
                title="Nuevos Ingresos"
                subtitle="Las últimas incorporaciones a nuestro catálogo de licencias originales."
                badgeText="RECIÉN LLEGADOS"
                badgeColor="green"
                buttonColor="green"
                productBadgeText="Nuevo"
                products={nuevosIngresos}
                bgColor="bg-white"
            />
            
            <ScrollToTop />
        </main>
    );
} 