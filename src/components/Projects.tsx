'use client';

import React, { useMemo, useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, X } from 'lucide-react';
import { ProjectItem } from '../types';

const Projects: React.FC = () => {
    const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
    const activeProject = useMemo<ProjectItem | null>(
        () => PROJECTS.find((p) => p.id === activeProjectId) || null,
        [activeProjectId]
    );

    const openDetails = (projectId: string) => setActiveProjectId(projectId);
    const closeDetails = () => setActiveProjectId(null);

    return (
        <section id="projects" className="py-24 px-6 md:px-12 border-b border-zinc-900">
            <div className="max-w-[1800px] mx-auto">
                <div className="mb-20">
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">PROJECTS.</h2>
                    <div className="h-1 w-24 bg-brand-accent"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {PROJECTS.map((project, idx) => (
                        <div
                            key={project.id}
                            className="group relative bg-zinc-900/20 border border-zinc-800 hover:border-brand-accent/50 transition-all duration-500 flex flex-col h-[600px]"
                        >
                            {/* Decorative Number */}
                            <div className="absolute top-4 right-4 font-mono text-6xl font-bold text-zinc-800/50 select-none group-hover:text-brand-accent/10 transition-colors">
                                0{idx + 1}
                            </div>

                            {/* Content Container */}
                            <div className="flex-1 p-8 flex flex-col justify-end relative z-10">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className="text-[10px] font-mono uppercase tracking-wider border border-zinc-700 px-2 py-1 text-zinc-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-4xl font-bold text-white leading-none group-hover:text-brand-accent transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-zinc-400 text-sm font-mono">
                                        {project.role} {'//'} {project.period}
                                    </p>

                                    <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-6 transition-all duration-500">
                                        <p className="text-zinc-300 leading-relaxed max-w-md">
                                            {project.description[0]}
                                        </p>
                                        <button
                                            className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-accent hover:text-white transition-colors"
                                            onClick={() => openDetails(project.id)}
                                        >
                                            View Details <ArrowUpRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Abstract gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Details Overlay */}
            {activeProject && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
                    <div className="relative max-w-4xl w-full bg-zinc-900 border border-zinc-800 p-8 md:p-10 shadow-2xl">
                        <button
                            aria-label="Close"
                            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                            onClick={closeDetails}
                        >
                            <X />
                        </button>

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                            <div>
                                <p className="text-sm font-mono text-zinc-500">{activeProject.role}</p>
                                <h3 className="text-3xl md:text-4xl font-bold text-white">{activeProject.title}</h3>
                            </div>
                            <span className="font-mono text-xs text-zinc-500">{activeProject.period}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {activeProject.tags.map((tag) => (
                                <span key={tag} className="text-[11px] font-mono uppercase tracking-wider border border-zinc-700 px-3 py-1 text-zinc-300">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <ul className="space-y-3 text-zinc-300 leading-relaxed">
                            {activeProject.description.map((line, idx) => (
                                <li key={idx} className="border-l-2 border-zinc-800 pl-4">
                                    {line}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
