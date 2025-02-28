'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

// Define interface for experience items
interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    period: string;
    logo?: string | null;
    description: string[];
}

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const experienceData: ExperienceItem[] = [
        {
            title: 'Research Assistant',
            company: 'The Institute of Automation, Chinese Academy of Sciences (CASIA)',
            location: 'Beijing, China',
            period: 'Feb 2024 - Sep 2024',
            logo: null,
            description: [
                'Streamlined research on Multimodal Large Language Models (MLLMs) through systematic literature review and novel experimental design, developing methodology for MICCAI 2025 submission',
                'Engineered an end-to-end data pipeline for benchmark creation using Python, incorporating automated quality checks and custom annotation tools, resulting in a 75% reduction in processing time and 40% improvement in annotation accuracy',
                'Developed a multimodal evaluation framework using PyTorch, benchmarking state-of-the-art MLLMs across multiple dimensions with metrics for accuracy, robustness, and cross-modal consistency',
                'Spearheaded weekly technical discussions and authored comprehensive research documentation, facilitating knowledge transfer across interdisciplinary teams of vertical category experts and ML researchers'
            ]
        },
        {
            title: 'President/Founder',
            company: 'VolunTrack Org.',
            location: 'Toronto, ON',
            period: 'Jun 2022 - Sep 2024',
            logo: null,
            description: [
                'Founded and scaled a non-profit organization through a structured four-tier management system, growing the company to 50+ members and establishing partnerships with 100+ global non-profits',
                'Architected an ML-powered volunteer matching system using TensorFlow and scikit-learn, achieving 85% matching accuracy and reducing manual matching time by 70%',
                'Developed a full-stack volunteer platform with React Native and React.js, integrating MLOps practices and employing a CI/CD pipeline to ensure consistent and robust application builds, serving 1000+ monthly active users',
                'Implemented real-time analytics using Google Cloud Platform, Cloud Firestore, and TensorFlow.js, deploying ML models for volunteer engagement prediction and churn analysis across 100+ organizations',
                'Established an AI innovation program, leading to 30+ successful ML projects and 10+ conference speaking engagements'
            ]
        },
        {
            title: 'AI Engineering Lead / Co-Founder',
            company: 'YiXing - AI-Driven Personalized Travel Planner',
            location: 'Toronto, ON',
            period: 'Jun 2023 - May 2024',
            logo: null,
            description: [
                'Architected and deployed a production-grade LLM system with fine-tuned GPT-based models, training on 1,000+ curated travel itineraries to achieve an 85% user satisfaction rate based on post-trip feedback',
                'Engineered a RAG pipeline processing 5000+ travel documents using LangChain, Pinecone vector DB, and custom chunking strategies, improving travel suggestion accuracy by 35% and reducing waiting time by 90%',
                'Developed serverless APIs using AWS Lambda to handle LLM integration, user data management, and travel preference processing for the React Native frontend',
                'Led a team of 6, implementing A/B testing and performance monitoring to continuously improve the fine-tuned model'
            ]
        },
        {
            title: 'AI/ML Project Lead',
            company: 'ReassurED - AI-Powered Emergency Care Guidance/Navigator',
            location: 'Montreal, QC',
            period: 'Jan 2025',
            description: [
                'Architected an AI-powered healthcare system using Deepseek-v3, React Native (Expo) and integrated real-time hospital data via Firestore, achieving 90% alignment with the standard Emergency Severity Index during a 24-hour hackathon',
                'Implemented few-shot learning through medical examples, JSON schema validation, and chain-of-thought reasoning prompt engineering, reducing incorrect classifications by 25% compared to a zero-shot baseline',
                'Developed a hybrid recommendation system combining LLM outputs with a weighting algorithm for hospital suggestions, integrating real-time wait times, distance metrics, and facility capabilities, reducing user decision time by 70%',
                'Built a scalable FastAPI backend processing 100+ concurrent requests per second, enabling real-time integration between the LLM service and the hospital data system with 99% uptime'
            ]
        },
        {
            title: 'Web Team Associate',
            company: 'IEEE UofT',
            location: 'Toronto, ON',
            period: 'Jun 2024 - Present',
            description: [
                'Developed and maintained full-stack web applications with a React.js frontend and Django backend, enhancing IEEE UofT\'s main website and event platforms with a responsive, user-friendly design',
                'Improved performance by optimizing APIs and caching, reducing load times and enhancing user experience',
                'Collaborated within an Agile team to build and deploy new features, ensuring a seamless experience'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="subheading mb-4">Work Experience</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        My professional journey through research, entrepreneurship, and development
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gray-300 dark:bg-gray-700 transform md:-translate-x-px"></div>

                    {/* Experience Items */}
                    {experienceData.map((job: ExperienceItem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                            className={`relative mb-8 md:mb-10 ${index % 2 === 0 ? 'md:pr-6 md:text-right md:ml-0 md:mr-auto' : 'md:pl-6 md:ml-auto md:mr-0'
                                } md:w-1/2`}
                        >
                            {/* Mobile dot - only visible on small screens, but kept for mobile layout */}
                            <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-gray-400 z-10 
                               border-2 border-white dark:border-slate-900 md:hidden -translate-x-1/2"
                            ></div>

                            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 ml-8 md:ml-0 relative">
                                <span className="bg-secondary/10 text-secondary font-medium text-sm px-3 py-1 rounded-full">
                                    {job.period}
                                </span>
                                <h3 className="text-xl font-bold mt-4">{job.title}</h3>

                                {/* Display logo if available */}
                                {job.logo && (
                                    <div className="mt-3 mb-2 flex justify-center md:justify-start">
                                        <div className="w-20 h-10 relative">
                                            <Image
                                                src={job.logo}
                                                alt={`${job.company} logo`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="text-gray-600 dark:text-gray-400 mt-1 mb-4">
                                    <span>{job.company}</span>
                                    <span className="mx-2">•</span>
                                    <span>{job.location}</span>
                                </div>
                                <ul className="list-disc text-gray-600 dark:text-gray-300 text-sm space-y-2 pl-5">
                                    {job.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience; 