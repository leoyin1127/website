import React from 'react';
import { CONTACT_INFO } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <footer id="contact" className="bg-black border-t border-zinc-900 pt-32 pb-12 px-6 md:px-12">
            <div className="max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8">
                            LET&apos;S<br />TALK.
                        </h2>
                        <p className="text-zinc-400 max-w-md text-lg leading-relaxed">
                            Open to discussing AI research, foundation models, and engineering opportunities.
                        </p>
                    </div>

                    <div className="flex flex-col justify-end space-y-4">
                        {[
                            { label: 'EMAIL', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                            { label: 'LINKEDIN', value: 'Connect', href: CONTACT_INFO.linkedin },
                            { label: 'GITHUB', value: 'Follow', href: CONTACT_INFO.github },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="group flex items-center justify-between border-b border-zinc-800 py-6 hover:border-brand-accent transition-colors"
                            >
                                <span className="font-mono text-sm text-zinc-500">{item.label}</span>
                                <div className="flex items-center gap-2 text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">
                                    {item.value} <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-zinc-900">
                    <div className="text-zinc-600 text-xs font-mono mb-4 md:mb-0">
                        DESIGNED & ENGINEERED BY LEO YIN<br />
                    </div>
                    <div className="text-zinc-600 text-xs font-mono">
                        © 2025 ALL RIGHTS RESERVED
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;