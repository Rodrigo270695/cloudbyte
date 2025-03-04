'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    threshold?: number;
    direction?: 'left' | 'right' | 'up' | 'down';
}

export default function SlideIn({ 
    children, 
    delay = 0, 
    duration = 0.5,
    threshold = 0.1,
    direction = 'left'
}: SlideInProps) {
    const directionOffset = {
        left: { x: -50, y: 0 },
        right: { x: 50, y: 0 },
        up: { x: 0, y: -50 },
        down: { x: 0, y: 50 }
    };

    return (
        <motion.div
            initial={{ 
                ...directionOffset[direction],
                opacity: 0 
            }}
            whileInView={{ 
                x: 0,
                y: 0,
                opacity: 1
            }}
            viewport={{ once: true, amount: threshold }}
            transition={{
                duration: duration,
                delay: delay,
                ease: "easeOut"
            }}
        >
            {children}
        </motion.div>
    );
} 