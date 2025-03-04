import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Fondo base con gradiente oscuro */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black" />
            
            {/* Patrones y efectos decorativos */}
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.05]" />
            <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-[0.1] mix-blend-overlay" />
            
            {/* Efectos de luz y gradientes */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r 
                          from-transparent via-blue-500/50 to-transparent" />
            <div className="absolute inset-0">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            {/* Contenido del footer con fondo semitransparente */}
            <div className="relative">
                <div className="mx-auto w-full max-w-7xl px-8 py-12 lg:py-16">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                        {/* Columna de la marca */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white/10 p-2">
                                    <Image
                                        src="/logos/cloudbyte.png"
                                        alt="CloudByte Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 
                                             bg-clip-text text-transparent">
                                    CloudByte
                                </span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Impulsamos la transformación digital de tu empresa con soluciones 
                                tecnológicas innovadoras y servicios de clase mundial.
                            </p>
                            <div className="flex items-center space-x-4">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                   className="p-2 rounded-full bg-white/5 hover:bg-blue-500/20 transition-colors
                                            text-gray-400 hover:text-blue-300 backdrop-blur-sm">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                   className="p-2 rounded-full bg-white/5 hover:bg-blue-500/20 transition-colors
                                            text-gray-400 hover:text-blue-300 backdrop-blur-sm">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Columna de Enlaces Rápidos */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                                Enlaces Rápidos
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/servicios-ti" 
                                          className="text-gray-400 hover:text-blue-300 transition-colors">
                                        Servicios TI
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/desarrollo-web" 
                                          className="text-gray-400 hover:text-blue-300 transition-colors">
                                        Desarrollo Web
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/hosting" 
                                          className="text-gray-400 hover:text-blue-300 transition-colors">
                                        Hosting & Dominios
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/soporte" 
                                          className="text-gray-400 hover:text-blue-300 transition-colors">
                                        Soporte Técnico
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Columna de Empresa */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                                Empresa
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/about" 
                                          className="text-gray-400 hover:text-blue-300 transition-colors">
                                        Sobre Nosotros
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/casos" 
                                          className="text-gray-400 hover:text-blue-300 transition-colors">
                                        Casos de Éxito
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" 
                                          className="text-gray-400 hover:text-blue-300 transition-colors">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contacto" 
                                          className="text-gray-400 hover:text-blue-300 transition-colors">
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Columna de Contacto */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                                Contacto
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                    <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <span className="text-gray-400 leading-relaxed">
                                        Chiclayo, Perú
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <a href="mailto:soporte@cloud-byte.com" 
                                       className="text-gray-400 hover:text-blue-300 transition-colors">
                                        soporte@cloud-byte.com
                                    </a>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    <a href="tel:+51976709804" 
                                       className="text-gray-400 hover:text-blue-300 transition-colors">
                                        +51 976 709 804
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Línea divisoria con efecto de luz */}
                    <div className="relative mt-12 pt-8">
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r 
                                      from-transparent via-gray-700 to-transparent" />
                        
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-500 text-sm">
                                © {new Date().getFullYear()} CloudByte. Todos los derechos reservados.
                            </p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <Link href="/privacidad" 
                                      className="text-sm text-gray-500 hover:text-blue-300 transition-colors">
                                    Política de Privacidad
                                </Link>
                                <Link href="/terminos" 
                                      className="text-sm text-gray-500 hover:text-blue-300 transition-colors">
                                    Términos de Servicio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 