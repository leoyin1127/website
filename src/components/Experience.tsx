'use client';

import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import { Plus, Minus } from 'lucide-react';

const Experience: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(EXPERIENCES[0].id);

    return (
        <section id="experience" className="py-24 px-6 md:px-12 border-b border-zinc-900">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter">EXP.</h2>
                    <p className="font-mono text-zinc-500 text-right mt-4 md:mt-0">
                        PROFESSIONAL HISTORY<br />
                        & RESEARCH
                    </p>
                </div>

                <div className="border-t border-zinc-800">
                    {EXPERIENCES.map((exp) => {
                        const isOpen = openId === exp.id;
                        return (
                            <div
                                key={exp.id}
                                className={`border-b border-zinc-800 transition-colors duration-500 ${isOpen ? 'bg-zinc-900/20' : 'hover:bg-zinc-900/10'}`}
                            >
                                <button
                                    onClick={() => setOpenId(isOpen ? null : exp.id)}
                                    className="hover-target w-full py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left group outline-none"
                                >
                                    <div className="flex items-center gap-6 md:w-1/3">
                                        <span className={`font-mono text-xs ${isOpen ? 'text-brand-accent' : 'text-zinc-600'}`}>
                                            0{EXPERIENCES.indexOf(exp) + 1}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-brand-accent transition-colors">
                                            {exp.role}
                                        </h3>
                                    </div>

                                    <div className="md:w-1/3 text-zinc-400 text-sm md:text-base font-medium">
                                        {exp.company}
                                    </div>

                                    <div className="md:w-1/4 flex items-center justify-between md:justify-end gap-8">
                                        <span className="font-mono text-xs text-zinc-500">{exp.period}</span>
                                        <div className={`text-brand-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                            {isOpen ? <Minus /> : <Plus />}
                                        </div>
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 mb-8' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="md:grid md:grid-cols-3 gap-8 pt-4 pl-4 md:pl-0">
                                        <div className="col-start-2 col-span-2 space-y-6">
                                            <ul className="space-y-3">
                                                {exp.description.map((desc, i) => (
                                                    <li key={i} className="text-zinc-300 leading-relaxed text-lg font-light border-l-2 border-zinc-800 pl-4 hover:border-brand-accent transition-colors">
                                                        {desc}
                                                    </li>
                                                ))}
                                            </ul>

                                            {exp.techStack && (
                                                <div className="flex flex-wrap gap-2 pt-4">
                                                    {exp.techStack.map((tech) => (
                                                        <span key={tech} className="px-3 py-1 text-xs font-mono text-black bg-white hover:bg-brand-accent transition-colors cursor-default">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
