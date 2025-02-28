'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { text: 'Home', href: '#home' },
        { text: 'Experience', href: '#experience' },
        { text: 'Projects', href: '#projects' },
        { text: 'Skills', href: '#skills' },
        { text: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-primary/80 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
            <nav className="section-container py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#home" className="text-2xl font-display font-bold text-primary dark:text-white transition-colors">
                        Shuolin<span className="text-secondary">Yin</span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors font-medium"
                            >
                                {link.text}
                            </Link>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center space-x-4 md:hidden">
                        <ThemeToggle />
                        <button
                            aria-label="Toggle menu"
                            className="p-2 text-primary dark:text-white"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="md:hidden mt-4 bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="py-2 px-4 flex flex-col">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        className="py-3 text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar; 