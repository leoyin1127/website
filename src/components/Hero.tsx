import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 border-b border-zinc-900">

            {/* Abstract Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="relative z-10 max-w-[1800px] mx-auto w-full pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

                    {/* Left Column: Intro */}
                    <div className="lg:col-span-4 space-y-8 mb-8 lg:mb-0">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-brand-accent mt-2 animate-pulse"></div>
                            <p className="font-mono text-sm text-zinc-400 max-w-xs leading-relaxed">
                                ENGINEERING INTELLIGENCE.<br />
                                RESEARCHING MULTIMODALITY.<br />
                                BUILDING AGENTS.
                            </p>
                        </div>

                        <div className="hidden lg:block p-6 border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm max-w-xs">
                            <div className="font-mono text-xs text-brand-accent mb-2">CURRENT STATUS</div>
                            <div className="text-zinc-300 text-sm">
                                Undergraduate Researcher @ Vector Institute. Focus on Foundation Models & Medical AI.
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Massive Name */}
                    <div className="lg:col-span-8">
                        <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter text-white mix-blend-exclusion">
                            SHUOLIN<br />
                            <span className="text-stroke hover:text-brand-accent transition-colors duration-500 cursor-default">(LEO) YIN</span>
                        </h1>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-24 flex flex-col md:flex-row justify-between items-end md:items-center border-t border-zinc-800 pt-6">
                    <div className="font-mono text-xs text-zinc-500 mb-4 md:mb-0">
                        BASED IN TORONTO, CANADA<br />
                        EST. 2023
                    </div>

                    <a href="#experience" className="group flex items-center gap-4 text-white hover:text-brand-accent transition-colors">
                        <span className="font-mono text-sm tracking-widest uppercase">Explore Work</span>
                        <div className="p-3 border border-zinc-700 rounded-full group-hover:border-brand-accent group-hover:rotate-45 transition-all">
                            <ArrowDownRight className="w-5 h-5" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;