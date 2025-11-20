import { ExperienceItem, ProjectItem, SkillCategory } from './types';

export const RESUME_TEXT = `
Shuolin (Leo) Yin
Bachelor of Applied Science and Engineering, Computer Engineering @ University of Toronto (2023–2027, PEY Co-op)
Focus: AI/ML, Foundation Models, Multimodality, Agentic Systems.

Experience:
1) Vector Institute & University Health Network (WangLab) — Undergraduate Researcher (May 2025 – Present)
   - Train and deploy multimodal foundation models for multitask learning on large-scale 2D/3D medical imaging datasets.
   - Build baselines and preprocessing/quality-control pipelines for MICCAI FLARE 2025 (augmentation, QC, fine-tuning protocols).
   - Architect an end-to-end vision-language generation framework for gigapixel whole-slide reports with multi-scale features and contrastive alignment across 10,500+ cases.
   - Scale DINOv3 self-supervised training on 300M images across 39 categories with distributed H100 clusters, gradient accumulation, and mixed precision.
   - Author an educational framework paper on medical VLM development (MICCAI educational challenge finalist).
   - Design, implement, and benchmark large-scale ML experiments on multi-GPU clusters with tracking, profiling, and documentation for publications.
2) Institute of Automation, Chinese Academy of Sciences (CASIA) — Research Assistant (Feb 2024 – Sep 2024)
   - Investigated hallucination reduction for Medical MLLMs via literature review and experiments (MICCAI 2025 target publication).
   - Built automated data pipeline and custom annotation workflow, cutting processing time by 300% and improving accuracy by 40%.
   - Delivered weekly technical presentations and detailed reports to drive collaboration.
   - Ran PyTorch experiments on SOTA MLLM architectures to evaluate hallucination mitigation strategies.
3) VolunTrack Org. — President/Founder (Jun 2022 – Sep 2024)
   - Founded and scaled a non-profit to 50+ members, 100+ partner organizations, and 500+ MAU via a four-tier management system.
   - Built a full-stack volunteer management platform (React Native + React.js) and led 15+ major feature launches with CI/CD and Agile.
   - Secured GCP partnership with credits and training for 20+ developers; designed scalable Firebase/Firestore data architecture.
   - Implemented AI-powered volunteer matching, analytics, and mentorship programs enabling 30+ projects and 10+ conference talks.

Projects:
- EZ-Career — Autonomous AI Job Application Agent (Apr 2024 – Jun 2024): OpenAI Agents SDK, custom MCP servers, FastAPI + Playwright automation, RAG memory with HITL.
- Echo — AI-Powered Sustainable Fashion Marketplace (Jan 2025): 2nd place global finals (BCG & Global Spark Hack the Globe). AI stylist agent with RAG, CV-based authentication, React Native + Supabase.
- YiXing — AI-Driven Personalized Travel Planner (Jun 2023 – May 2024): Fine-tuned GPT models + RAG with LangChain, React Native frontend, AWS Lambda microservices, led Agile team of six to MVP.
- ReassurED — LLM-Powered Emergency Care Navigator (Sep 2024): 24-hour hackathon build; React Native app with real-time Firestore data, FastAPI backend, few-shot triage and recommendations using Deepseek-v3.
- IEEE UofT — Web Team Associate (Jun 2024 – Present): React.js + Django full-stack features, API optimization and caching, responsive UX for events platform.

Skills:
- Languages: Python, JavaScript/TypeScript, C/C++, C#, Swift, MATLAB, HTML/CSS, Bash.
- Frameworks: React Native, React.js, Node.js, Django, PyTorch, LangChain, OpenCV, YOLO.
- Cloud/DevOps: AWS (Lambda), Google Cloud Platform, Firebase, Git, CI/CD, HPC clusters, Docker.
- Tools: VS Code, Xcode, Unity, Fusion 360, Blender, AutoCAD, W&B, MLflow.
`;

export const EXPERIENCES: ExperienceItem[] = [
    {
        id: 'vector',
        role: 'Undergraduate Researcher',
        company: 'Vector Institute & University Health Network — WangLab',
        location: 'Toronto, ON',
        period: 'May 2025 – Present',
        techStack: ['PyTorch', 'Multimodal LLMs', 'DINOv3', 'Multi-GPU Clusters', 'Data Pipelines'],
        description: [
            'Train and deploy multimodal foundation models with multitask learning on large-scale 2D/3D medical imaging datasets.',
            'Develop baseline models and comprehensive preprocessing/quality-control pipelines for MICCAI FLARE 2025 (augmentation, QC workflows, fine-tuning protocols).',
            'Architect an end-to-end vision-language framework for automated whole-slide report generation with multi-scale features, cross-attention, and contrastive alignment across 10,500+ cases.',
            'Scale DINOv3 self-supervised training on 300M images across 39 categories using distributed data-parallel training, gradient accumulation, and mixed precision on H100 clusters.',
            'Author an educational framework paper on medical VLM development (MICCAI educational challenge finalist) and support experiment tracking, profiling, and documentation for publications.'
        ]
    },
    {
        id: 'cas',
        role: 'Research Assistant',
        company: 'Institute of Automation, Chinese Academy of Sciences — NLPR',
        location: 'Beijing, China',
        period: 'Feb 2024 – Sep 2024',
        techStack: ['Medical MLLMs', 'Python', 'PyTorch', 'Data Automation'],
        description: [
            'Investigated MLLM hallucination reduction through systematic literature review and experimental design toward MICCAI 2025 publication.',
            'Developed automated data pipeline and custom annotation tools, reducing data processing time by 300% and improving annotation accuracy by 40%.',
            'Delivered weekly technical presentations and detailed progress reports to drive collaboration across the research team.',
            'Conducted PyTorch experiments on state-of-the-art MLLM architectures, evaluating hallucination mitigation methods and surfacing improvement opportunities.'
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
            'Founded and scaled a non-profit through a four-tier management system, growing to 50+ members and 100+ global non-profits with 500+ monthly active users.',
            'Architected and developed a full-stack volunteer management platform (React Native + React.js) with CI/CD and Agile delivery for 15+ major features and 4 revisions.',
            'Secured Google Cloud partnership with cloud credits and technical training for 20+ developers; designed scalable Firebase/Firestore data architecture for 100+ org profiles.',
            'Implemented AI-powered volunteer matching and analytics for churn prevention, and led a tech mentorship program enabling 30+ projects and 10+ speaking engagements.'
        ]
    }
];

export const PROJECTS: ProjectItem[] = [
    {
        id: 'echo',
        title: 'Echo – AI-Powered Sustainable Fashion Marketplace',
        role: 'Lead Developer',
        period: 'Jan 2025',
        tags: ['React Native', 'RAG', 'Computer Vision', 'Supabase', 'OpenAI'],
        description: [
            'Secured 2nd Place in Global Finals at BCG & Global Spark “Hack the Globe” as sole developer.',
            'Built an AI stylist agent with OpenAI API and RAG for personalized recommendations with swipe-based discovery.',
            'Implemented computer-vision-based product authentication for item verification and condition assessment.',
            'Delivered a full-stack React Native (Expo) app with Node.js/Express, Supabase PostgreSQL, JWT auth, and Zod validation.'
        ]
    },
    {
        id: 'ez-career',
        title: 'EZ-Career – Autonomous AI Job Application Agent',
        role: 'AI Engineer & Full Stack Developer',
        period: 'April 2024 – June 2024',
        tags: ['OpenAI Agents SDK', 'MCP', 'RAG', 'Supabase', 'Playwright'],
        description: [
            'Architected a multi-agent AI system using OpenAI Agents SDK with an Agent-as-Tool pattern for end-to-end job application automation.',
            'Developed multiple custom MCP servers (playwright_mcp, user_profile_mcp, user_assistance_mcp, memory_mcp) for browser control, database ops, and memory.',
            'Built a scalable FastAPI backend with intelligent Playwright/CDP automation for complex ATS flows.',
            'Engineered a Sentence Transformers–powered RAG memory system with HITL design to prevent hallucination and enforce factuality.'
        ]
    },
    {
        id: 'yixing',
        title: 'YiXing – AI-Driven Personalized Travel Planner',
        role: 'Project Lead / Co-Founder',
        period: 'Jun 2023 – May 2024',
        tags: ['React Native', 'LangChain', 'AWS Lambda', 'GPT Fine-tuning', 'Microservices'],
        description: [
            'Led development of an AI travel planner using fine-tuned GPT models with LangChain-powered RAG for personalized itineraries.',
            'Built a scalable backend with AWS Lambda and Node.js microservices exposing RESTful APIs for itinerary generation.',
            'Delivered a React Native app with personalized recommendations informed by historical user data.',
            'Managed an Agile team of six through concept, MVP launch, code reviews, and performance optimization.'
        ]
    },
    {
        id: 'reassured',
        title: 'ReassurED – LLM-Powered Emergency Care Navigator',
        role: 'Project Lead',
        period: 'Sep 2024',
        tags: ['React Native', 'FastAPI', 'Few-shot Learning', 'Deepseek-v3', 'Firestore'],
        description: [
            'Led a 24-hour hackathon build of a cross-platform emergency healthcare app using React Native (Expo) with real-time Firestore hospital data.',
            'Implemented dynamic triage and recommendation system with few-shot learning on Deepseek-v3 and custom weighting.',
            'Built a FastAPI backend with scraping and automated data updates for hospital availability.',
            'Enhanced UX with location-based hospital maps via react-native-maps and expo-location.'
        ]
    },
    {
        id: 'ieee',
        title: 'IEEE UofT – Web Team Associate',
        role: 'Full-Stack Developer',
        period: 'Jun 2024 – Present',
        tags: ['React.js', 'Django', 'API Optimization', 'Caching', 'UI/UX'],
        description: [
            'Develop and maintain full-stack web applications with a React.js frontend and Django backend for IEEE UofT.',
            'Optimize APIs and implement caching strategies to reduce load times and improve user experience.',
            'Collaborate in an Agile team to deliver new features and ensure a seamless cross-platform experience.'
        ]
    }
];

export const SKILLS: SkillCategory[] = [
    {
        name: 'Languages',
        skills: ['Python', 'JavaScript/TypeScript', 'C/C++', 'C#', 'Swift', 'MATLAB', 'HTML/CSS', 'SQL', 'Bash', 'LaTeX']
    },
    {
        name: 'ML/DL Frameworks',
        skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'OpenCV', 'YOLO', 'LangChain', 'scikit-learn']
    },
    {
        name: 'Infrastructure',
        skills: ['GCP', 'AWS (Lambda)', 'HPC Clusters', 'Docker', 'Firebase', 'Git', 'CI/CD', 'Multi-GPU Clusters']
    },
    {
        name: 'Dev Tools',
        skills: ['Vertex AI', 'Weights & Biases', 'Jupyter', 'MLflow', 'React/React Native', 'Node.js', 'Unity', 'Fusion 360', 'Blender', 'AutoCAD']
    }
];

export const CONTACT_INFO = {
    email: 'leo.yin@mail.utoronto.ca',
    phone: '+1 (647) 674-6127',
    location: 'Toronto, ON',
    github: 'https://github.com/leoyin1127',
    linkedin: 'https://www.linkedin.com/in/shuolinyin/'
};
