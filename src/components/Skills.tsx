'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skillsCategories = [
        {
            category: "Programming Languages",
            skills: [
                { name: "Python", level: 95 },
                { name: "JavaScript", level: 90 },
                { name: "C/C++", level: 80 },
                { name: "C#", level: 75 },
                { name: "HTML/CSS", level: 85 },
                { name: "Swift", level: 70 },
                { name: "MATLAB", level: 75 },
            ]
        },
        {
            category: "Frameworks & Libraries",
            skills: [
                { name: "TensorFlow", level: 90 },
                { name: "LangChain", level: 85 },
                { name: "OpenCV", level: 80 },
                { name: "PyTorch", level: 85 },
                { name: "React", level: 90 },
                { name: "Node.js", level: 85 },
                { name: "Django", level: 75 },
            ]
        },
        {
            category: "Cloud & DevOps",
            skills: [
                { name: "AWS", level: 85 },
                { name: "Google Cloud", level: 80 },
                { name: "Firebase", level: 90 },
                { name: "Git", level: 95 },
                { name: "CI/CD", level: 80 },
            ]
        },
        {
            category: "Development Tools",
            skills: [
                { name: "Vertex AI", level: 85 },
                { name: "GitHub", level: 95 },
                { name: "Xcode", level: 75 },
                { name: "Unity", level: 70 },
                { name: "Fusion 360", level: 65 },
                { name: "Blender", level: 60 },
                { name: "AutoCAD", level: 65 },
            ]
        }
    ];

    const getColorForSkillLevel = (level: number) => {
        if (level >= 90) return "from-green-500 to-emerald-400";
        if (level >= 80) return "from-blue-500 to-cyan-400";
        if (level >= 70) return "from-indigo-500 to-purple-400";
        return "from-orange-500 to-amber-400";
    };

    return (
        <section id="skills" className="py-20">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="subheading mb-4">Skills & Expertise</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {skillsCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: categoryIndex * 0.1 }}
                        >
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md h-full">
                                <h3 className="text-xl font-bold mb-6 text-center border-b border-gray-200 dark:border-gray-700 pb-2">
                                    {category.category}
                                </h3>
                                <div className="space-y-5">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex}>
                                            <div className="flex justify-between mb-1">
                                                <span className="font-medium">{skill.name}</span>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    className={`h-full bg-gradient-to-r ${getColorForSkillLevel(skill.level)} rounded-full`}
                                                    initial={{ width: 0 }}
                                                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                                    transition={{ duration: 0.8, delay: skillIndex * 0.1 + 0.2 }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technologies cloud */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl p-10 text-center"
                >
                    <h3 className="text-xl font-bold mb-8">Other Technologies & Tools</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Next.js", "TypeScript", "Express", "MongoDB", "GraphQL", "Redux",
                            "Flask", "FastAPI", "Docker", "Kubernetes", "Jenkins", "REST API",
                            "Scikit-learn", "Pandas", "NumPy", "NLTK", "Hugging Face", "Langchain",
                            "JIRA", "Figma", "Adobe XD", "Agile", "Scrum", "UI/UX Design"
                        ].map((tech, index) => (
                            <motion.span
                                key={index}
                                className="bg-white dark:bg-slate-800 rounded-full px-4 py-2 text-sm font-medium shadow-sm"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.02 + 0.5,
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills; 