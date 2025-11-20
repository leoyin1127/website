'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'EXP', href: '#experience' },
        { name: 'WORK', href: '#projects' },
        { name: 'TECH', href: '#skills' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 py-6 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
                <a href="#" className="text-2xl font-black tracking-tighter hover:text-brand-accent transition-colors">
                    LY.
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-mono font-bold tracking-widest hover:text-brand-accent transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-brand-accent"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-30 bg-black flex flex-col justify-center items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-4xl font-black tracking-tighter text-white hover:text-brand-accent py-4 transition-colors"
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