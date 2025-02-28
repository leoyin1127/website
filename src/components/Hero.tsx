'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-24 flex items-center">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h1 className="heading mb-4">
                            Hi, I&apos;m <span className="gradient-text">Leo Yin</span>
                        </h1>
                        <h2 className="text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300">
                            AI Engineer & Computer Engineering Student
                        </h2>
                        <p className="text-lg mb-8 max-w-2xl text-gray-600 dark:text-gray-400">
                            Building innovative AI solutions and engineering robust systems.
                            Currently focused on AI research at CASIA and pursuing Computer Engineering at the University of Toronto.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#contact" className="btn-primary">Get in Touch</a>
                            <a
                                href="#experience"
                                className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-all hover:border-secondary dark:hover:border-secondary"
                            >
                                View My Work
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex mt-8 space-x-4">
                            <Link href="https://github.com" target="_blank" aria-label="GitHub" className="text-gray-600 hover:text-secondary dark:text-gray-400 dark:hover:text-secondary transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-gray-600 hover:text-secondary dark:text-gray-400 dark:hover:text-secondary transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </Link>
                            <Link href="mailto:leo.yin@mail.utoronto.ca" aria-label="Email" className="text-gray-600 hover:text-secondary dark:text-gray-400 dark:hover:text-secondary transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Profile Image/Animation */}
                    <motion.div
                        className="relative flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    >
                        {/* Main Profile Image */}
                        <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-4 border-secondary z-10">
                            <Image
                                src="/images/profileImage.png"
                                alt="Leo Yin - Profile"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* AI/ML Skill */}
                        <motion.div
                            className="absolute -top-4 right-0 flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.div
                                className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-90 shadow-lg floating-element"
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 5,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.span
                                className="ml-3 skill-bubble"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                AI/ML
                            </motion.span>
                        </motion.div>

                        {/* React Skill */}
                        <motion.div
                            className="absolute top-1/3 -left-0 flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <motion.div
                                className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg opacity-90 shadow-lg floating-element"
                                animate={{
                                    x: [0, 5, 0],
                                    rotate: [0, 10, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3.5,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.span
                                className="ml-3 skill-bubble"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                            >
                                React
                            </motion.span>
                        </motion.div>

                        {/* Python Skill */}
                        <motion.div
                            className="absolute bottom-1/4 right-0 flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            <motion.div
                                className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-90 shadow-lg floating-element"
                                animate={{
                                    y: [0, 8, 0],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.span
                                className="ml-3 skill-bubble"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1.4, duration: 0.5 }}
                            >
                                Python
                            </motion.span>
                        </motion.div>

                        {/* TensorFlow Skill */}
                        <motion.div
                            className="absolute -bottom-16 right-24 flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1 }}
                        >
                            <motion.div
                                className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-90 shadow-lg floating-element"
                                animate={{
                                    y: [0, 10, 0],
                                    x: [0, -5, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 4,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.span
                                className="ml-3 skill-bubble"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1.6, duration: 0.5 }}
                            >
                                TensorFlow
                            </motion.span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                >
                    <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1">
                        <motion.div
                            className="w-1 h-2 bg-gray-400 rounded-full"
                            animate={{
                                y: [0, 10, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero; 