'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const ScrambleLink: React.FC<{ href: string; text: string }> = ({ href, text }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

    const scramble = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(() =>
                text
                    .split('')
                    .map((letter, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
    };

    return (
        <a
            href={href}
            onMouseEnter={scramble}
            className="relative text-xs font-mono font-bold tracking-widest hover:text-brand-accent transition-colors px-2 py-1 group"
        >
            <span className="relative z-10">{displayText}</span>
            <span className="absolute inset-0 bg-brand-accent/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
    );
};

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'EXP', href: '#experience' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'TECH', href: '#skills' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 py-6 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
                <a href="#" className="text-2xl font-black tracking-tighter hover:text-brand-accent transition-colors hover-target">
                    LY.
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <ScrambleLink key={link.name} href={link.href} text={link.name} />
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-brand-accent hover-target"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-30 bg-black flex flex-col justify-center items-center border-2 border-brand-accent m-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-4xl font-black tracking-tighter text-white hover:text-brand-accent py-4 transition-colors hover-target"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
};

export default Navbar;
