'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [activeProject, setActiveProject] = useState<number | null>(null);

    const projectsData = [
        {
            id: 1,
            title: "YiXing - AI Travel Planner",
            description: "A personalized travel planning platform powered by fine-tuned LLMs, providing custom itineraries based on user preferences.",
            image: "/Yixinglogo.svg",
            skills: ["Next.js", "LangChain", "GPT-4", "AWS Lambda", "Vector DB"],
            highlights: [
                "85% user satisfaction rate post-trip",
                "RAG pipeline with 5000+ travel documents",
                "35% improvement in suggestion accuracy"
            ]
        },
        {
            id: 2,
            title: "VolunTrack Platform",
            description: "A volunteer management platform with ML-powered matching, connecting organizations with volunteers based on interests and skills.",
            image: "/VolunTrackLogo.png",
            skills: ["React Native", "TensorFlow", "Firebase", "CI/CD", "MLOps"],
            highlights: [
                "1000+ monthly active users",
                "Partnerships with 100+ global non-profits",
                "85% matching accuracy rate"
            ]
        },
        {
            id: 3,
            title: "ReassurED Emergency Care Navigator",
            description: "An AI-powered healthcare guidance system helping users assess symptoms and find appropriate emergency care facilities.",
            image: null,
            skills: ["React Native Expo", "Deepseek-v3", "Firestore", "FastAPI", "Few-shot learning"],
            highlights: [
                "90% alignment with Emergency Severity Index",
                "25% reduction in incorrect classifications",
                "70% reduction in user decision time"
            ]
        }
    ];

    const handleProjectHover = (id: number | null) => {
        setActiveProject(id);
    };

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="subheading mb-4">Projects</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Innovative solutions I&apos;ve built to solve real-world problems
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                            className="group relative"
                            onMouseEnter={() => handleProjectHover(project.id)}
                            onMouseLeave={() => handleProjectHover(null)}
                        >
                            <div className={`h-full bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${activeProject === project.id ? 'transform scale-[1.02]' : ''
                                }`}>
                                {/* Project Logo */}
                                <div className="h-48 overflow-hidden bg-white dark:bg-slate-700 relative flex items-center justify-center p-4">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} logo`}
                                            width={200}
                                            height={100}
                                            className="object-contain max-h-40"
                                            style={{
                                                maxWidth: '80%',
                                                objectFit: 'cover',
                                                objectPosition: 'top top',
                                                transform: 'scale(1.3)'
                                            }}
                                        />
                                    ) : (
                                        /* Project Image Placeholder */
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600">
                                            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                                                {project.title.split(" ")[0]}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="skill-tag text-xs"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                                        <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                                        <ul className="list-disc pl-5 text-xs text-gray-600 dark:text-gray-400 space-y-1">
                                            {project.highlights.map((highlight, i) => (
                                                <li key={i}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Hover overlay with view button */}
                                <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/80 flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                    <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Show more projects button */}
                <div className="text-center mt-12">
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.6 }}
                        className="btn-primary"
                    >
                        View More Projects
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Projects; 