import { ExperienceItem, ProjectItem, SkillCategory } from './types';

export const RESUME_TEXT = `
Shuolin (Leo) Yin
Bachelor of Applied Science in Computer Engineering at University of Toronto (2023-2027).
Focus: AI, Machine Learning, Computer Vision, MLLMs.

Experience:
1. Vector Institute & University Health Network (WangLab) - Undergraduate Researcher (May 2025 - Present). 
   - Foundation models for multi-task multimodal learning on 2D/3D medical datasets.
   - MICCAI FLARE 2025 Organizing Committee.
   - MLLM framework for pathology report generation on gigapixel whole-slide images.
   - Pretrained DINOv3 SSL model on 300M pathology tiles.
2. Institute of Automation, Chinese Academy of Sciences (NLPR) - Research Assistant (Feb 2024 - Sep 2024).
   - Medical MLLMs, TPAMI submission.
   - End-to-end data pipeline for medical imaging benchmark.
   - PyTorch-based multimodal evaluation suite.
3. VolunTrack Org. - President/Founder (Jun 2022 - Sep 2024).
   - Non-profit with 50+ members, 100+ partners, 500+ MAU.
   - AI-powered volunteer matching using TensorFlow/scikit-learn.

Projects:
1. EZ-Career - Autonomous AI Job Application Agent (Apr 2024 - Jun 2024).
   - Multi-agent AI system using OpenAI Agents SDK. Custom MCP servers. RAG memory.
2. Echo - AI-Powered Sustainable Fashion Marketplace (Mar 2025).
   - Won BCG & Global Spark Hack the Globe.
   - AI stylist agent, vision-based item verification (YOLOv11n). React Native app.

Skills:
- Python, C/C++, MATLAB, TypeScript, C#, Swift, SQL.
- PyTorch, TensorFlow, Hugging Face, OpenCV, YOLO, LangChain.
- GCP, AWS, Docker, Firebase, Git, Vertex AI.
`;

export const EXPERIENCES: ExperienceItem[] = [
    {
        id: 'vector',
        role: 'Undergraduate Researcher',
        company: 'Vector Institute & University Health Network — WangLab',
        location: 'Toronto, ON',
        period: 'May 2025 – Present',
        techStack: ['PyTorch', 'Multimodal LLMs', 'DINOv3', 'HPC Clusters', 'Docker'],
        description: [
            'Pretrain and finetune foundation models for multi-task, multimodal learning on large-scale 2D/3D medical datasets.',
            'Serve on the Organizing Committee for MICCAI FLARE 2025: define tasks, rules, and evaluation protocol; lead and release 3 baseline models.',
            'Develop an MLLM framework for pathology report generation on gigapixel whole-slide images, implementing multi-scale feature extraction.',
            'Pretrain a DINOv3 SSL model on 300M pathology tiles across 39 cancer types on H100 clusters, yielding strong downstream gains.',
            'Author an educational framework paper on medical vision–language model development (MICCAI Educational Challenge finalist).'
        ]
    },
    {
        id: 'cas',
        role: 'Research Assistant',
        company: 'Institute of Automation, Chinese Academy of Sciences — NLPR',
        location: 'Beijing, China',
        period: 'Feb 2024 – Sep 2024',
        techStack: ['Medical MLLMs', 'Python', 'PyTorch', 'Data Engineering'],
        description: [
            'Streamlined research on Medical multimodal large language models (MLLMs) through systematic literature review and novel experimental design.',
            'Engineered an end-to-end data pipeline for medical imaging benchmark creation, incorporating automated quality checks, resulting in 75% reduction in processing time.',
            'Built a PyTorch-based multimodal evaluation suite for clinical VLM (accuracy, robustness, cross-modal consistency) and automated report scoring.'
        ]
    },
    {
        id: 'voluntrack',
        role: 'President/Founder',
        company: 'VolunTrack Org.',
        location: 'Toronto, ON',
        period: 'Jun 2022 – Sep 2024',
        techStack: ['TensorFlow', 'scikit-learn', 'Firebase', 'TensorFlow.js'],
        description: [
            'Founded and scaled a non-profit organization to 50+ members and 100+ non-profits; reached 500+ MAU.',
            'Architected an AI-powered volunteer matching system using TensorFlow and scikit-learn, achieving 85% matching accuracy.',
            'Implemented real-time analytics using Firebase and Cloud Firestore, deploying ML models for churn analysis.'
        ]
    }
];

export const PROJECTS: ProjectItem[] = [
    {
        id: 'echo',
        title: 'Echo – AI-Powered Sustainable Fashion Marketplace',
        role: 'Lead Developer',
        period: 'March 2025',
        tags: ['React Native', 'YOLOv11n', 'Node.js', 'GCP', 'OpenRouter'],
        description: [
            'Won BCG & Global Spark Hack the Globe (1st in Canada, 2nd globally).',
            'Developed an AI stylist agent using OpenRouter and RAG for personalized recommendations.',
            'Shipped vision-based item verification & condition grading using YOLOv11n (90% accuracy).',
            'Built full-stack application using React Native, Node.js/Express, and PostgreSQL.'
        ]
    },
    {
        id: 'ez-career',
        title: 'EZ-Career – Autonomous AI Job Application Agent',
        role: 'AI Engineer & Full Stack Developer',
        period: 'April 2024 – June 2024',
        tags: ['OpenAI Agents SDK', 'MCP', 'RAG', 'Supabase', 'Playwright'],
        description: [
            'Architected a state-of-the-art multi-agent AI system using OpenAI Agents SDK with an Agent-as-Tool pattern.',
            'Developed multiple custom Model Context Protocol servers (playwright_mcp, user_assistance_mcp).',
            'Engineered a RAG memory system using Sentence Transformers to prevent hallucination.'
        ]
    }
];

export const SKILLS: SkillCategory[] = [
    {
        name: 'Languages',
        skills: ['Python', 'C/C++', 'TypeScript', 'JavaScript', 'MATLAB', 'C#', 'Swift', 'SQL', 'Bash', 'LaTeX']
    },
    {
        name: 'ML/DL Frameworks',
        skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'OpenCV', 'YOLO', 'LangChain', 'scikit-learn']
    },
    {
        name: 'Infrastructure',
        skills: ['GCP', 'AWS', 'HPC Clusters', 'Docker', 'Firebase', 'Git', 'CI/CD', 'Multi-GPU Clusters']
    },
    {
        name: 'Dev Tools',
        skills: ['Vertex AI', 'Weights & Biases', 'Jupyter', 'MLflow', 'React/React Native', 'Node.js']
    }
];

export const CONTACT_INFO = {
    email: 'leo.yin@mail.utoronto.ca',
    phone: '+1 (647) 674-6127',
    location: 'Toronto, ON',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
};
