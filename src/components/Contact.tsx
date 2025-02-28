'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formError, setFormError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormError('');

        // Simulating form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormState({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            }, 3000);
        }, 1500);
    };

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-900">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="subheading mb-4">Contact Me</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                            <div className="flex">
                                <div className="mr-4 text-secondary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                                    <a href="mailto:leo.yin@mail.utoronto.ca" className="text-secondary hover:underline">
                                        leo.yin@mail.utoronto.ca
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                            <div className="flex">
                                <div className="mr-4 text-secondary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                                    <a href="tel:+16476746127" className="text-secondary hover:underline">
                                        +1 (647) 674-6127
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                            <div className="flex">
                                <div className="mr-4 text-secondary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Social</h3>
                                    <div className="flex space-x-4 mt-2">
                                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary dark:text-gray-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                            </svg>
                                        </a>
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary dark:text-gray-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={formVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
                    >
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit}>
                                <motion.div variants={itemVariants} className="mb-6">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants} className="mb-6">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants} className="mb-6">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="Job Opportunity">Job Opportunity</option>
                                        <option value="Project Collaboration">Project Collaboration</option>
                                        <option value="Consulting Request">Consulting Request</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                    </select>
                                </motion.div>

                                <motion.div variants={itemVariants} className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                                    />
                                </motion.div>

                                {formError && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg"
                                    >
                                        {formError}
                                    </motion.div>
                                )}

                                <motion.div variants={itemVariants}>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full btn-primary flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </motion.div>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Your message has been sent successfully. I&apos;ll get back to you soon!
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 