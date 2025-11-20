import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
    // Flatten all skills for the marquee
    const allSkills = SKILLS.flatMap(cat => cat.skills);

    return (
        <section id="skills" className="py-32 border-b border-zinc-900 overflow-hidden">
            <div className="mb-12 px-6 md:px-12 max-w-[1800px] mx-auto flex justify-between items-end">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">TECHNOLOGIES</h2>
                <span className="font-mono text-brand-accent animate-pulse">LIVE</span>
            </div>

            {/* Marquee 1 */}
            <div className="relative flex overflow-x-hidden mb-4">
                <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
                    {allSkills.map((skill, i) => (
                        <span key={`m1-${i}`} className="text-6xl md:text-8xl font-black text-zinc-900 hover:text-white transition-colors cursor-default uppercase select-none">
                            {skill}
                        </span>
                    ))}
                    {allSkills.map((skill, i) => (
                        <span key={`m1-dup-${i}`} className="text-6xl md:text-8xl font-black text-zinc-900 hover:text-white transition-colors cursor-default uppercase select-none">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Marquee 2 (Reverse) */}
            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee-reverse whitespace-nowrap flex gap-8 items-center">
                    {allSkills.reverse().map((skill, i) => (
                        <span key={`m2-${i}`} className="text-6xl md:text-8xl font-black text-stroke hover:text-brand-accent transition-colors cursor-default uppercase select-none">
                            {skill}
                        </span>
                    ))}
                    {allSkills.map((skill, i) => (
                        <span key={`m2-dup-${i}`} className="text-6xl md:text-8xl font-black text-stroke hover:text-brand-accent transition-colors cursor-default uppercase select-none">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;