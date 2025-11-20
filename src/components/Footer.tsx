'use client';

import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-display font-bold text-white mb-4 block">
                            Shuolin<span className="text-secondary">.</span>
                        </Link>
                        <p className="text-text-secondary max-w-md leading-relaxed">
                            AI Engineer & Researcher building the future of intelligent systems.
                            Passionate about bridging the gap between complex algorithms and human-centric applications.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-text-secondary hover:text-white transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6">Socials</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors flex items-center gap-2">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors flex items-center gap-2">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="mailto:leo.yin@mail.utoronto.ca" className="text-text-secondary hover:text-white transition-colors flex items-center gap-2">
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-sm">
                        &copy; {currentYear} Shuolin (Leo) Yin. All rights reserved.
                    </p>
                    <p className="text-text-muted text-sm">
                        Designed & Built with <span className="text-white">Next.js</span> & <span className="text-white">Tailwind</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;