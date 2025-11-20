export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    location: string;
    period: string;
    techStack?: string[];
    description: string[];
}

export interface ProjectItem {
    id: string;
    title: string;
    role: string;
    period: string;
    tags: string[];
    description: string[];
}

export interface SkillCategory {
    name: string;
    skills: string[];
}
