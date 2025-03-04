import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen relative bg-gradient-to-b from-gray-50 to-white">
            {/* Efectos de fondo modernos */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.03]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 
                              w-[90vw] md:w-[800px] h-[50vh] md:h-[600px] 
                              bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 
                              blur-3xl rounded-full opacity-50" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8 md:py-16 min-h-screen 
                          flex flex-col items-center justify-center">
                <div className="w-full max-w-4xl mx-auto text-center">
                    {/* Número 404 con diseño moderno y animación */}
                    <div className="relative mb-8 md:mb-12">
                        <span className="text-[120px] md:text-[180px] lg:text-[220px] font-black 
                                     leading-none tracking-tight
                                     bg-clip-text text-transparent 
                                     bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
                                     select-none animate-gradient-x">
                            404
                        </span>
                        <div className="absolute -inset-4 bg-gradient-to-b from-white/0 to-white 
                                      blur-sm -z-10" />
                    </div>

                    {/* Contenido */}
                    <div className="space-y-6 md:space-y-8 px-4">
                        <div className="space-y-2">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                                ¡Oops! Página no encontrada
                            </h1>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Parece que has llegado a un destino digital inexistente. 
                                No te preocupes, te ayudamos a volver al camino correcto.
                            </p>
                        </div>

                        {/* Acciones */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <Link
                                href="/"
                                className="group flex items-center gap-2 text-sm font-semibold
                                         px-6 py-3 bg-gray-900 text-white rounded-full
                                         transition-all duration-300 hover:bg-gray-800
                                         shadow-lg shadow-gray-900/25 hover:shadow-gray-900/35
                                         hover:translate-y-[-2px] active:translate-y-0
                                         w-full md:w-auto justify-center"
                            >
                                <svg 
                                    className="w-5 h-5 transition-transform duration-300
                                             group-hover:-translate-x-1" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                    />
                                </svg>
                                <span>Volver al inicio</span>
                            </Link>
                            <Link
                                href="/contacto"
                                className="group flex items-center gap-2 text-sm font-semibold
                                         px-6 py-3 bg-white text-gray-900 rounded-full
                                         transition-all duration-300
                                         border-2 border-gray-100 hover:border-gray-200
                                         hover:bg-gray-50 active:bg-gray-100
                                         w-full md:w-auto justify-center"
                            >
                                <span>Contactar soporte</span>
                                <svg 
                                    className="w-5 h-5 transition-transform duration-300
                                             group-hover:translate-x-1" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8"
                                    />
                                </svg>
                            </Link>
                        </div>

                        {/* Enlaces rápidos */}
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
                            <Link href="/servicios-ti" 
                                  className="hover:text-blue-600 transition-colors">
                                Servicios
                            </Link>
                            <span className="hidden md:inline">•</span>
                            <Link href="/blog" 
                                  className="hover:text-blue-600 transition-colors">
                                Blog
                            </Link>
                            <span className="hidden md:inline">•</span>
                            <Link href="/faq" 
                                  className="hover:text-blue-600 transition-colors">
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 