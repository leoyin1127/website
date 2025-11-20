'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            <span className="text-white">Beyond the </span>
                            <span className="text-gradient">Code</span>
                        </h2>
                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Exploring the intersection of artificial intelligence, hardware engineering, and human-centric design.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Main Bio Card */}
                        <motion.div
                            variants={itemVariants}
                            className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">The Journey</h3>
                            <p className="text-text-secondary mb-6 leading-relaxed">
                                I am a Computer Engineering student at the University of Toronto with a passion for building intelligent systems.
                                My work spans from researching Multimodal Large Language Models at CASIA to developing full-stack applications.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['UofT Engineering', 'AI Research', 'Full Stack', 'System Design'].map((tag) => (
                                    <span key={tag} className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stats/Highlight Card */}
                        <motion.div
                            variants={itemVariants}
                            className="p-8 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 backdrop-blur-sm flex flex-col justify-center items-center text-center"
                        >
                            <div className="text-5xl font-bold text-white mb-2">3.9+</div>
                            <div className="text-text-muted font-medium">GPA</div>
                            <div className="w-full h-px bg-white/10 my-6" />
                            <div className="text-5xl font-bold text-white mb-2">Dean&apos;s</div>
                            <div className="text-text-muted font-medium">List Scholar</div>
                        </motion.div>

                        {/* Research Card */}
                        <motion.div
                            variants={itemVariants}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Research</h3>
                            <p className="text-text-secondary text-sm">
                                Pushing boundaries in Multimodal LLMs at CASIA, focusing on cross-modal understanding.
                            </p>
                        </motion.div>

                        {/* Entrepreneurship Card */}
                        <motion.div
                            variants={itemVariants}
                            className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Impact & Leadership</h3>
                                    <p className="text-text-secondary mb-4">
                                        Founded VolunTrack Org., connecting 1000+ users with non-profits using AI matching.
                                    </p>
                                    <a href="#" className="text-accent hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
                                        Learn more <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;