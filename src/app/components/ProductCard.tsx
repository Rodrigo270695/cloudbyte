'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaCheck, FaShoppingCart, FaRegHeart, FaInfoCircle } from 'react-icons/fa';

interface ProductCardProps {
    product: {
        id: string;
        nombre: string;
        descripcion: string;
        precio: string;
        imagen: string;
        caracteristicas: string[];
    };
    badgeText: string;
    badgeColor: string;
    buttonColor: string;
    index: number;
}

export default function ProductCard({ product, badgeText, badgeColor, buttonColor, index }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    
    // Para efecto 3D
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);
    
    // Suavizar el movimiento
    const springConfig = { damping: 25, stiffness: 150 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);
    
    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        x.set(mouseX);
        y.set(mouseY);
    }
    
    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    }
    
    // Mapeo de colores para los diferentes estilos
    const colorMap: Record<string, { 
        gradient: string, 
        softGradient: string,
        button: string, 
        hover: string, 
        text: string,
        shadow: string,
        border: string,
        lightBg: string,
        darkBg: string,
        badge: string,
        glow: string
    }> = {
        blue: {
            gradient: "bg-gradient-to-r from-blue-600 to-indigo-600",
            softGradient: "bg-gradient-to-br from-blue-50 to-indigo-50/50",
            button: "bg-gradient-to-r from-blue-600 to-blue-700",
            hover: "hover:from-blue-700 hover:to-blue-800",
            text: "text-blue-600",
            shadow: "shadow-blue-500/20",
            border: "border-blue-100",
            lightBg: "bg-blue-50",
            darkBg: "bg-blue-900",
            badge: "bg-blue-600",
            glow: "shadow-blue-500/30"
        },
        red: {
            gradient: "bg-gradient-to-r from-red-600 to-rose-600",
            softGradient: "bg-gradient-to-br from-red-50 to-rose-50/50",
            button: "bg-gradient-to-r from-red-600 to-red-700",
            hover: "hover:from-red-700 hover:to-red-800",
            text: "text-red-600",
            shadow: "shadow-red-500/20",
            border: "border-red-100",
            lightBg: "bg-red-50",
            darkBg: "bg-red-900",
            badge: "bg-red-600",
            glow: "shadow-red-500/30"
        },
        purple: {
            gradient: "bg-gradient-to-r from-purple-600 to-violet-600",
            softGradient: "bg-gradient-to-br from-purple-50 to-violet-50/50",
            button: "bg-gradient-to-r from-purple-600 to-purple-700",
            hover: "hover:from-purple-700 hover:to-purple-800",
            text: "text-purple-600",
            shadow: "shadow-purple-500/20",
            border: "border-purple-100",
            lightBg: "bg-purple-50",
            darkBg: "bg-purple-900",
            badge: "bg-purple-600",
            glow: "shadow-purple-500/30"
        },
        orange: {
            gradient: "bg-gradient-to-r from-orange-500 to-amber-600",
            softGradient: "bg-gradient-to-br from-orange-50 to-amber-50/50",
            button: "bg-gradient-to-r from-orange-500 to-orange-600",
            hover: "hover:from-orange-600 hover:to-orange-700",
            text: "text-orange-600",
            shadow: "shadow-orange-500/20",
            border: "border-orange-100",
            lightBg: "bg-orange-50",
            darkBg: "bg-orange-900",
            badge: "bg-orange-600",
            glow: "shadow-orange-500/30"
        },
        green: {
            gradient: "bg-gradient-to-r from-green-600 to-emerald-600",
            softGradient: "bg-gradient-to-br from-green-50 to-emerald-50/50",
            button: "bg-gradient-to-r from-green-600 to-green-700",
            hover: "hover:from-green-700 hover:to-green-800",
            text: "text-green-600",
            shadow: "shadow-green-500/20",
            border: "border-green-100",
            lightBg: "bg-green-50",
            darkBg: "bg-green-900",
            badge: "bg-green-600",
            glow: "shadow-green-500/30"
        }
    };

    const colors = colorMap[buttonColor] || colorMap.blue;

    return (
        <motion.div 
            className="h-full perspective-1000"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
        >
            <motion.div 
                className={`
                    bg-white rounded-2xl overflow-hidden h-full
                    border border-gray-100 transition-all duration-300
                    ${isHovered ? `shadow-xl ${colors.shadow}` : 'shadow-md'}
                    relative backdrop-blur-sm
                `}
                style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    transformStyle: "preserve-3d",
                    transformPerspective: 1000
                }}
                whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
            >
                {/* Fondo decorativo con gradiente - SIN OPACIDAD EN HOVER */}
                <div className={`absolute inset-0 ${colors.softGradient}`}></div>
                
                {/* Contenido del producto */}
                <div className="relative z-10">
                    <div className="relative h-64 flex items-center justify-center p-6 overflow-hidden group">
                        {/* Badge con diseño moderno y animación */}
                        <motion.div 
                            className={`
                                absolute top-3 right-3 ${colors.badge} text-white 
                                text-xs font-bold px-3 py-1.5 rounded-full
                                shadow-sm z-10
                            `}
                            initial={{ opacity: 0, scale: 0.8, x: 10 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: `0 0 10px 0 ${colors.glow}`
                            }}
                        >
                            {badgeText}
                        </motion.div>
                        
                        {/* Botón de favorito */}
                        <motion.button
                            className={`
                                absolute top-3 left-3 z-10 w-8 h-8 rounded-full
                                flex items-center justify-center bg-white
                                border border-gray-100
                                ${colors.text} transition-all duration-300
                                hover:bg-white hover:shadow-md
                            `}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaRegHeart size={14} />
                        </motion.button>
                        
                        {/* Botón de información */}
                        <motion.button
                            className={`
                                absolute bottom-3 left-3 z-10 w-8 h-8 rounded-full
                                flex items-center justify-center bg-white
                                border border-gray-100
                                ${colors.text} transition-all duration-300
                                hover:bg-white hover:shadow-md
                            `}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setShowInfo(!showInfo)}
                        >
                            <FaInfoCircle size={14} />
                        </motion.button>
                        
                        {/* Imagen del producto con animación */}
                        <motion.div 
                            className="relative w-48 h-48"
                            animate={{ 
                                scale: isHovered ? 1.05 : 1,
                                y: isHovered ? -5 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            style={{ 
                                transformStyle: "preserve-3d",
                                translateZ: 30
                            }}
                        >
                            <Image
                                src={product.imagen}
                                alt={product.nombre}
                                fill
                                className="object-contain drop-shadow-xl"
                            />
                        </motion.div>
                    </div>
                    
                    <div className="p-6 relative">
                        {/* Línea decorativa */}
                        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                        
                        {/* Nombre del producto */}
                        <motion.h3 
                            className="text-xl font-bold text-gray-900 mb-2 line-clamp-1"
                            style={{ 
                                transformStyle: "preserve-3d",
                                translateZ: 30
                            }}
                        >
                            {product.nombre}
                        </motion.h3>
                        
                        {/* Descripción */}
                        <motion.p 
                            className="text-gray-600 mb-4 h-12 line-clamp-2 text-sm"
                            style={{ 
                                transformStyle: "preserve-3d",
                                translateZ: 20
                            }}
                        >
                            {product.descripcion}
                        </motion.p>
                        
                        {/* Precio con efecto de profundidad */}
                        <motion.div 
                            className="flex items-baseline mb-4"
                            style={{ 
                                transformStyle: "preserve-3d",
                                translateZ: 40
                            }}
                        >
                            <span className={`text-2xl font-bold ${colors.text}`}>
                                {product.precio}
                            </span>
                        </motion.div>
                        
                        {/* Características */}
                        <motion.div 
                            className="mb-6"
                            style={{ 
                                transformStyle: "preserve-3d",
                                translateZ: 10
                            }}
                        >
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Características:</h4>
                            <ul className="space-y-1.5">
                                {product.caracteristicas.slice(0, 3).map((caracteristica, i) => (
                                    <motion.li 
                                        key={i} 
                                        className="flex items-start text-sm text-gray-600"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * i + 0.3 }}
                                    >
                                        <motion.div 
                                            className={`w-4 h-4 ${colors.text} mt-0.5 mr-2 flex-shrink-0 flex items-center justify-center`}
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <FaCheck size={10} />
                                        </motion.div>
                                        <span>{caracteristica}</span>
                                    </motion.li>
                                ))}
                                {product.caracteristicas.length > 3 && (
                                    <motion.li 
                                        className="text-xs text-gray-500 mt-1 pl-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        + {product.caracteristicas.length - 3} características más
                                    </motion.li>
                                )}
                            </ul>
                        </motion.div>
                        
                        {/* Botón de compra con efectos avanzados */}
                        <Link
                            href={`/contacto?producto=${product.id}`}
                            className="block"
                        >
                            <motion.div
                                className={`
                                    group relative flex items-center justify-center gap-2 w-full py-3.5 px-4 
                                    ${colors.button} ${colors.hover} text-white font-medium 
                                    rounded-xl transition-all duration-300 shadow-md ${colors.shadow}
                                    overflow-hidden
                                `}
                                style={{ 
                                    transformStyle: "preserve-3d",
                                    translateZ: 50
                                }}
                                whileHover={{ 
                                    scale: 1.03,
                                    boxShadow: `0 8px 20px -6px ${colors.glow}`
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <motion.div
                                    className="absolute inset-0 w-full h-full"
                                    initial={{ opacity: 0 }}
                                    whileHover={{
                                        background: [
                                            `linear-gradient(90deg, transparent 0%, transparent 100%)`,
                                            `linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)`,
                                            `linear-gradient(90deg, transparent 0%, transparent 100%)`
                                        ],
                                        x: ['-100%', '100%', '100%'],
                                        opacity: 1
                                    }}
                                    transition={{ duration: 1.5 }}
                                />
                                
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ 
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                >
                                    <FaShoppingCart className="w-4 h-4" />
                                </motion.div>
                                
                                <span className="font-medium tracking-wide">Comprar Ahora</span>
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
} 