"use client"

import { useEffect, useRef } from 'react';

const partners = [
    {
        nombre: "McAfee",
        color: "#C01818",
        icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 4.8233L1.5793 0v19.1767L12 24l10.4207-4.8233V0zm6.172 11.626l-6.143 2.8428-6.1438-2.8429V6.6894l6.1439 2.8418 6.1429-2.8418z"/></svg>
    },
    {
        nombre: "Microsoft Azure",
        color: "#0078D4",
        icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505v.014L13.23 2.7z"/></svg>
    },
    {
        nombre: "TeamViewer",
        color: "#004680",
        icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M22.597 24H1.406A1.41 1.41 0 0 1 0 22.594V1.406A1.41 1.41 0 0 1 1.406 0h21.191a1.41 1.41 0 0 1 1.406 1.406v21.188A1.41 1.41 0 0 1 22.597 24zM11.911 2.109c-5.405.047-9.763 4.482-9.802 9.89-.04 5.507 4.381 9.885 9.89 9.89 5.415.003 9.796-4.5 9.802-9.89.007-5.392-4.39-9.843-9.89-9.89zM12 18.96c-3.811 0-6.95-3.139-6.95-6.95S8.189 5.06 12 5.06s6.95 3.139 6.95 6.95-3.139 6.95-6.95 6.95zm1.85-6.95l-5.1 2.925V9.085l5.1 2.925z"/></svg>
    },
    {
        nombre: "AnyDesk",
        color: "#EF443B",
        icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.322 3.677L0 12l8.322 8.323L16.645 12zm7.371.01l-1.849 1.85 6.49 6.456-6.49 6.49 1.85 1.817L24 11.993Z"/></svg>
    },
    {
        nombre: "Microsoft",
        color: "#5E5E5E",
        icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623"/></svg>
    },
    {
        nombre: "Kaspersky",
        color: "#006D5C",
        icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M23.99 7.027L12.191.159.393 7.027v9.736l11.798 6.869 11.799-6.869zm-2.755 7.99l-9.043 5.27-9.043-5.27V8.773l9.043-5.27 9.043 5.27z"/></svg>
    }
];

const InfiniteLogoCarousel = () => {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scrollerRef.current) return;

        const scrollerContent = Array.from(scrollerRef.current.children);
        const scrollWidth = scrollerRef.current.scrollWidth;
        
        // Duplicar el contenido una sola vez
        scrollerContent.forEach(item => {
            const clone = item.cloneNode(true);
            scrollerRef.current?.appendChild(clone);
        });

        const animation = scrollerRef.current.animate(
            [
                { transform: 'translateX(0)' },
                { transform: `translateX(-${scrollWidth}px)` }
            ],
            {
                duration: 40000, // Más lento para mejor efecto
                iterations: Infinity,
                easing: 'linear'
            }
        );

        const pauseAnimation = () => animation.pause();
        const playAnimation = () => animation.play();
        
        scrollerRef.current.addEventListener('mouseenter', pauseAnimation);
        scrollerRef.current.addEventListener('mouseleave', playAnimation);

        return () => {
            if (scrollerRef.current) {
                scrollerRef.current.removeEventListener('mouseenter', pauseAnimation);
                scrollerRef.current.removeEventListener('mouseleave', playAnimation);
            }
            animation.cancel();
        };
    }, []);

    return (
        <div className="relative w-full overflow-hidden">
            <div 
                ref={scrollerRef}
                className="flex gap-16 py-12"
                style={{ width: 'max-content' }}
            >
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="flex-none group relative"
                    >
                        <div className="w-32 h-32 flex items-center justify-center
                                      bg-gray-50 rounded-2xl border border-gray-100
                                      hover:border-blue-200 transition-all duration-300
                                      hover:bg-white hover:shadow-lg">
                            <div className="w-16 h-16 text-gray-400 group-hover:text-[var(--partner-color)] 
                                          transition-colors duration-300"
                                 style={{"--partner-color": partner.color} as React.CSSProperties}>
                                {partner.icon}
                            </div>
                        </div>
                        {/* Tooltip con el nombre */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                      bg-gray-900 text-white text-sm py-1 px-3 rounded-lg whitespace-nowrap">
                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2
                                          border-4 border-transparent border-b-gray-900" />
                            {partner.nombre}
                        </div>
                    </div>
                ))}
            </div>
            {/* Gradientes para suavizar los bordes */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
    );
};

export default InfiniteLogoCarousel; 