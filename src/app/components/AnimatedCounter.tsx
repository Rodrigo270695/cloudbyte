"use client"

import { useState, useRef, useEffect } from 'react';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
}

const AnimatedCounter = ({ end, duration = 2000 }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const increment = end / (duration / 16);
                    const timer = setInterval(() => {
                        start += increment;
                        if (start > end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={counterRef}>{count}</span>;
};

export default AnimatedCounter; 