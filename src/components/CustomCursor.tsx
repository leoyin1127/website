'use client';

import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (dotRef.current && outlineRef.current) {
                dotRef.current.style.left = `${e.clientX}px`;
                dotRef.current.style.top = `${e.clientY}px`;

                outlineRef.current.animate(
                    {
                        left: `${e.clientX}px`,
                        top: `${e.clientY}px`,
                    },
                    { duration: 500, fill: 'forwards' }
                );
            }
        };

        const addHoverClass = () => document.body.classList.add('hovering');
        const removeHoverClass = () => document.body.classList.remove('hovering');

        window.addEventListener('mousemove', moveCursor);

        const hoverables = document.querySelectorAll('a, button, .hover-target');
        hoverables.forEach((el) => {
            el.addEventListener('mouseenter', addHoverClass);
            el.addEventListener('mouseleave', removeHoverClass);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            hoverables.forEach((el) => {
                el.removeEventListener('mouseenter', addHoverClass);
                el.removeEventListener('mouseleave', removeHoverClass);
            });
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot hidden md:block" />
            <div ref={outlineRef} className="cursor-outline hidden md:block" />
        </>
    );
};

export default CustomCursor;
