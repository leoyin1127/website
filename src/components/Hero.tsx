'use client';

import React, { useEffect, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 border-b border-zinc-900 overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none opacity-20 transition-transform duration-100 ease-out"
                style={{
                    backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) perspective(1000px) rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`,
                }}
            ></div>

            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-accent/5 blur-[100px] rounded-full animate-pulse pointer-events-none"></div>

            <div className="relative z-10 max-w-[1800px] mx-auto w-full pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    <div className="lg:col-span-4 space-y-8 mb-8 lg:mb-0">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-brand-accent mt-2 animate-spin-slow hover-target"></div>
                            <p className="font-mono text-sm text-zinc-400 max-w-xs leading-relaxed">
                                <span className="text-white font-bold">{'>> SYSTEM READY'}</span>
                                <br />
                                ENGINEERING INTELLIGENCE.
                                <br />
                                RESEARCHING MULTIMODALITY.
                                <br />
                                BUILDING AGENTS.
                            </p>
                        </div>

                        <div
                            className="hidden lg:block p-6 border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm max-w-xs hover:border-brand-accent/50 transition-colors duration-300"
                            style={{
                                transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
                            }}
                        >
                            <div className="font-mono text-xs text-brand-accent mb-2 flex justify-between">
                                <span>CURRENT_STATUS</span>
                                <span className="animate-pulse">●</span>
                            </div>
                            <div className="text-zinc-300 text-sm">
                                Undergraduate Researcher @ Vector Institute. Focus on Foundation Models & Medical AI.
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8" style={{ perspective: '1000px' }}>
                        <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter text-white mix-blend-exclusion select-none">
                            <span className="block hover:text-brand-accent transition-colors duration-300 glitch-wrapper" data-text="SHUOLIN">
                                SHUOLIN
                            </span>
                            <span className="text-stroke hover:text-white transition-colors duration-500 cursor-default block transform hover:translate-x-4 transition-transform">
                                (LEO) YIN
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="mt-24 flex flex-col md:flex-row justify-between items-end md:items-center border-t border-zinc-800 pt-6">
                    <div className="font-mono text-xs text-zinc-500 mb-4 md:mb-0">
                        BASED IN TORONTO, CANADA
                        <br />
                        EST. 2023
                    </div>

                    <a href="#experience" className="hover-target group flex items-center gap-4 text-white hover:text-brand-accent transition-colors">
                        <span className="font-mono text-sm tracking-widest uppercase">Initialize</span>
                        <div className="p-3 border border-zinc-700 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-black transition-all duration-300">
                            <ArrowDownRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
