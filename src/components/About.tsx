'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <h2 className="subheading mb-4">About Me</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column with wrapper to position decorative elements */}
                    <div className="relative">
                        {/* Decorative elements with explicit opacity and visibility properties */}
                        <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-100 dark:bg-blue-900/30 rounded-lg transform -rotate-6 opacity-100 visible" style={{ zIndex: 0 }}></div>
                        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-100 dark:bg-purple-900/30 rounded-lg transform rotate-6 opacity-100 visible" style={{ zIndex: 0 }}></div>

                        {/* Card content in motion div */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                            className="relative z-10"
                        >
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 h-full">
                                <h3 className="text-2xl font-bold mb-4">Computer Engineering Student</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    I am a Computer Engineering student at the University of Toronto, focusing on the intersection of hardware and software systems, with a particular interest in AI/ML applications.
                                </p>

                                <div className="border-l-2 border-secondary pl-4 my-6">
                                    <p className="text-gray-600 dark:text-gray-300 italic">
                                        &ldquo;Building technologies that make a positive impact on the world.&rdquo;
                                    </p>
                                </div>

                                <h4 className="text-lg font-semibold mb-3">Education</h4>
                                <div className="mb-4">
                                    <p className="font-medium">University of Toronto</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Bachelor of Applied Science and Engineering in Computer Engineering + PEY Co-op</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Sep 2023 – Apr 2027</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    <span className="skill-tag">Problem Solving</span>
                                    <span className="skill-tag">Leadership</span>
                                    <span className="skill-tag">Research</span>
                                    <span className="skill-tag">Innovation</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Personal details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 mr-4">
                                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">AI Researcher</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Currently conducting research on Multimodal Large Language Models at CASIA, focusing on developing innovative approaches to improve cross-modal understanding and performance.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/50 mr-4">
                                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">Entrepreneur</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Founded VolunTrack Org., a non-profit organization with a ML-powered volunteer matching system, serving 1000+ monthly active users and partnering with 100+ global non-profits.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="p-3 rounded-full bg-cyan-100 dark:bg-cyan-900/50 mr-4">
                                    <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">Developer</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">
                                Skilled in full-stack development with expertise in AI integration, from building ML-powered applications to creating user-friendly interfaces with React, Next.js, and more.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About; 