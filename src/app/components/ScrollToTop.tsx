'use client';

import { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const toggleVisibility = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        setScrollProgress(scrolled);
        setIsVisible(winScroll > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 
                             size-14 rounded-2xl rotate-45
                             bg-gradient-to-br from-[#1f77d4]/10 to-[#1f77d4]/30
                             backdrop-blur-md
                             shadow-[inset_0_0_10px_rgba(31,119,212,0.2)]
                             border border-white/10
                             hover:shadow-[inset_0_0_20px_rgba(31,119,212,0.4)]
                             transition-all duration-500 ease-out
                             group z-50
                             before:absolute before:inset-[2px]
                             before:rounded-2xl before:bg-[#0a192f]
                             before:z-[-1]
                             after:absolute after:inset-0
                             after:rounded-2xl after:bg-gradient-to-br
                             after:from-[#1f77d4]/0 after:to-[#1f77d4]/20
                             after:z-[-2] after:blur-md
                             animate-fade-in"
                    aria-label="Scroll to top"
                >
                    <div className="relative -rotate-45">
                        {/* Anillo de progreso */}
                        <svg 
                            className="absolute inset-0 size-full -rotate-90"
                            viewBox="0 0 100 100"
                        >
                            <circle
                                className="stroke-[#1f77d4]/20"
                                cx="50"
                                cy="50"
                                r="46"
                                strokeWidth="2"
                                fill="none"
                            />
                            <circle
                                className="stroke-[#1f77d4] transition-all duration-300"
                                cx="50"
                                cy="50"
                                r="46"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="289.027"
                                strokeDashoffset={289.027 - (scrollProgress * 289.027) / 100}
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Icono central */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <FaChevronUp 
                                className="w-5 h-5 text-[#1f77d4] 
                                         transform group-hover:-translate-y-0.5 
                                         transition-all duration-300
                                         group-hover:text-white"
                            />
                        </div>

                        {/* Efecto de brillo */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 
                                      group-hover:opacity-100 transition-opacity 
                                      duration-500 bg-gradient-to-t 
                                      from-[#1f77d4]/0 via-[#1f77d4]/10 to-[#1f77d4]/0" />
                    </div>
                </button>
            )}
        </>
    );
} 