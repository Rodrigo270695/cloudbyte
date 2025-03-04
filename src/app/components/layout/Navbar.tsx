'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import navLinks from './Navbar/NavLinks';
import type { Route } from 'next';

// Define interfaces para los tipos
interface MenuItem {
    name: string;
    href: string;
    description: string;
    icon: React.ReactNode;
}

// Define la interfaz para los links
interface NavLink {
    title: string;
    href: Route;  // Usamos el tipo Route de Next.js
}

// Componente DropdownMenu mejorado
const DropdownMenu = ({ title, items, isActive }: { title: string, items: MenuItem[], isActive: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const pathname = usePathname();

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
    };

    // Solo dividir en columnas si es el menú de Soluciones
    const shouldSplitColumns = title === 'Soluciones';
    const midPoint = shouldSplitColumns ? Math.ceil(items.length / 2) : items.length;
    const leftColumn = items.slice(0, midPoint);
    const rightColumn = items.slice(midPoint);

    return (
        <div className="relative group">
            <button
                className={`px-4 py-2.5 rounded-full font-medium
                          transition-all duration-300 flex items-center gap-1.5
                          ${isActive 
                            ? 'text-blue-600 bg-blue-50/80 border border-blue-100' 
                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/60 hover:border-blue-50'
                          } group border border-transparent`}
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {title}
                <svg 
                    className={`w-4 h-4 transition-transform duration-200
                              ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}
                              ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
            </button>

            {isOpen && (
                <div
                    className={`absolute left-0 mt-2 rounded-2xl shadow-xl
                             backdrop-blur-sm bg-white/95 transform transition-all duration-200
                             border border-blue-100/50 ${shouldSplitColumns ? 'w-[600px]' : 'w-[300px]'}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={`${shouldSplitColumns ? 'flex' : ''}`}>
                        <div className={`${shouldSplitColumns ? 'flex-1 border-r border-gray-50' : ''}`}>
                            {leftColumn.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center px-5 py-3 hover:bg-blue-50/50 group cursor-pointer
                                             transition-all duration-200 first:rounded-tl-2xl last:rounded-bl-2xl"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="flex items-center justify-center w-10 h-10 rounded-lg 
                                                   bg-blue-50/50 group-hover:bg-blue-100/50 group-hover:text-blue-600
                                                   transition-all duration-200 text-blue-500">
                                        {item.icon}
                                    </span>
                                    <div className="ml-4">
                                        <div className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                                            {item.name}
                                        </div>
                                        <div className="text-xs text-gray-500 group-hover:text-gray-600 mt-0.5">
                                            {item.description}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {shouldSplitColumns && rightColumn.length > 0 && (
                            <div className="flex-1">
                                {rightColumn.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center px-5 py-3 hover:bg-blue-50/50 group cursor-pointer
                                                 transition-all duration-200 first:rounded-tr-2xl last:rounded-br-2xl"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="flex items-center justify-center w-10 h-10 rounded-lg 
                                                       bg-blue-50/50 group-hover:bg-blue-100/50 group-hover:text-blue-600
                                                       transition-all duration-200 text-blue-500">
                                            {item.icon}
                                        </span>
                                        <div className="ml-4">
                                            <div className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                                                {item.name}
                                            </div>
                                            <div className="text-xs text-gray-500 group-hover:text-gray-600 mt-0.5">
                                                {item.description}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Simplifica la función isActiveLink
    const isActiveLink = (href: Route | undefined): boolean => {
        if (!href) return false;
        return pathname === href;
    };

    // Función para verificar si un submenu tiene un item activo
    const hasActiveSubmenu = (submenu: MenuItem[]) => {
        return submenu.some(item => isActiveLink(item.href as Route));
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        setIsOpen(false); // Cerrar menú al cambiar de ruta
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300
            ${scrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100/50' 
                : 'bg-white/50 backdrop-blur-sm py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo mejorado */}
                    <Link href="/"
                          className="flex items-center space-x-3 group">
                        <div className="relative w-10 h-10 overflow-hidden rounded-xl
                                      shadow-lg shadow-[#1f77d4]/20 group-hover:shadow-[#1f77d4]/30
                                      transition-all duration-300 group-hover:scale-105
                                      border border-[#1f77d4]/10 group-hover:border-[#1f77d4]/20">
                            <Image
                                src="/logos/cloudbyte.png"
                                alt="Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-extrabold font-['Inter'] tracking-tight
                                         bg-gradient-to-r from-[#1f77d4] to-[#0a192f] 
                                         bg-clip-text text-transparent
                                         drop-shadow-sm">
                                CloudByte
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu con mejoras visuales */}
                    <div className="hidden md:flex items-center gap-x-1">
                        {navLinks.map((link) => (
                            link.submenu ? (
                                <DropdownMenu
                                    key={link.title}
                                    title={link.title}
                                    items={link.submenu}
                                    isActive={hasActiveSubmenu(link.submenu)}
                                />
                            ) : (
                                <Link
                                    key={link.title}
                                    href={link.href || '/'}
                                    className={`px-4 py-2.5 rounded-full font-medium
                                             transition-all duration-300 border
                                             ${isActiveLink(link.href)
                                                ? 'bg-blue-50/80 text-blue-600 border-blue-100'
                                                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/60 border-transparent hover:border-blue-50'
                                             }`}
                                >
                                    {link.title}
                                </Link>
                            )
                        ))}

                        {/* Botón CTA mejorado */}
                        <Link
                            href="/contacto"
                            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 
                                     text-white rounded-full font-medium transition-all duration-300
                                     hover:from-blue-700 hover:to-blue-800 hover:shadow-lg 
                                     hover:shadow-blue-200 hover:scale-105
                                     active:scale-95 active:shadow-inner"
                        >
                            Contáctenos
                        </Link>
                    </div>

                    {/* Mobile Menu Button mejorado */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-blue-50/60 transition-colors"
                        aria-label="Menú"
                    >
                        <div className="w-6 h-6 relative flex items-center justify-center">
                            <span className={`absolute h-0.5 w-5 bg-blue-600 transform transition-all duration-300
                                ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                            <span className={`absolute h-0.5 w-5 bg-blue-600 transform transition-all duration-300
                                ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay mejorado */}
            <div className={`
                fixed inset-0 bg-white/95 backdrop-blur-sm z-30 
                transition-all duration-300 ease-in-out 
                transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                md:hidden top-[60px] border-t border-gray-100/50
            `}>
                <div className="bg-white px-4 py-6 space-y-4 overflow-y-auto max-h-[calc(100vh-5rem)]">
                    {navLinks.map((link) => (
                        <div key={link.title} className="border-b border-gray-100 last:border-0">
                            {link.submenu ? (
                                <div className="py-3">
                                    <div className={`font-medium px-4 py-2
                                        ${hasActiveSubmenu(link.submenu)
                                            ? 'text-blue-600'
                                            : 'text-gray-800'
                                        }`}>
                                        {link.title}
                                    </div>
                                    <div className="space-y-2 mt-2">
                                        {link.submenu.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center px-4 py-2
                                                    ${isActiveLink(item.href as Route)
                                                        ? 'text-blue-600 bg-blue-50'
                                                        : 'text-gray-600 hover:text-blue-600'
                                                    }`}
                                            >
                                                <span className="mr-3 text-lg">{item.icon}</span>
                                                <span className="font-medium">{item.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={link.href || '/'}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-4 font-medium
                                        ${isActiveLink(link.href)
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-gray-700 hover:text-blue-600'
                                        }`}
                                >
                                    {link.title}
                                </Link>
                            )}
                        </div>
                    ))}
                    
                    <Link
                        href="/contacto"
                        onClick={() => setIsOpen(false)}
                        className="block w-full px-6 py-3 bg-blue-600 text-white rounded-xl
                                 font-medium text-center transition-all duration-300
                                 hover:bg-blue-700 active:bg-blue-800 active:scale-95
                                 shadow-lg shadow-blue-200"
                    >
                        Contáctenos
                    </Link>
                </div>
            </div>
        </nav>
    );
}

// Componente para links del menú desktop
export const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="px-4 py-2 rounded-lg text-gray-700 font-medium
                 transition-all duration-300
                 hover:text-blue-600 hover:bg-blue-50"
    >
        {children}
    </Link>
);

// Componente para links del menú mobile
export const MobileNavLink = ({
    href,
    children,
    onClick
}: {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
}) => (
    <Link
        href={href}
        onClick={onClick}
        className="block px-4 py-3 text-lg text-gray-700
                 border-b border-gray-100 transition-colors
                 hover:bg-gray-50 hover:text-blue-600"
    >
        {children}
    </Link>
);