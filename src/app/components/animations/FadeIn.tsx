'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    distance?: number;
    threshold?: number;
    stagger?: boolean;
}

export default function FadeIn({ 
    children, 
    delay = 0, 
    duration = 0.5, 
    direction, 
    distance = 50,
    threshold = 0.1,
    stagger = false
}: FadeInProps) {
    const getInitialDirection = () => {
        switch (direction) {
            case 'up':
                return { y: distance };
            case 'down':
                return { y: -distance };
            case 'left':
                return { x: distance };
            case 'right':
                return { x: -distance };
            default:
                return {};
        }
    };

    const variants = {
        hidden: {
            opacity: 0,
            ...getInitialDirection(),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: duration,
                delay: delay,
                when: "beforeChildren",
                staggerChildren: stagger ? 0.1 : 0,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: threshold }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}