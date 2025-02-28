'use client';

import { useState } from 'react';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const headerVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -50 },
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 glassmorphism shadow-lg' : 'py-5 bg-transparent'
                }`}
            initial="visible"
            animate="visible"
            variants={headerVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <span className="text-2xl font-display font-bold gradient-text">Leo Yin</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-medium hover:text-secondary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="btn-primary">Resume</button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <motion.div
                    className="md:hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glassmorphism">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:text-secondary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="btn-primary w-full mt-4">Resume</button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header; 