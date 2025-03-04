'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScaleInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    threshold?: number;
}

export default function ScaleIn({ 
    children, 
    delay = 0,
    duration = 0.5,
    threshold = 0.1
}: ScaleInProps) {
    return (
        <motion.div
            initial={{ 
                scale: 0.8, 
                opacity: 0 
            }}
            whileInView={{ 
                scale: 1, 
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