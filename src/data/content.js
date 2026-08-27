// All site copy lives here so content edits never require touching component/layout code.

export const profile = {
  name: 'Ajay J',
  fullName: 'Ajay Jaikrishnan',
  title: 'AI/ML Engineer',
  email: 'ajay.jaikrishnan@gmail.com',
  phone: '+91-9445-114331',
  location: 'Chennai, TN, India',
  github: 'https://github.com/ajayjai30',
  linkedin: 'https://www.linkedin.com/in/ajay-jaikrishnanaideveloper/',
  resumeFile: '/docs/Ajay_J_Resume.pdf',
  resumeDownloadName: "Ajay J's Resume.pdf",
  website: 'ajay-portfolio.vercel.app',
};

export const heroContent = {
  kaiIntro: "Hi, I'm Jarvis — Ajay's AI assistant, built by Ajay J, an AI/ML Engineer.",
  headlinePre: 'Building AI systems that ',
  headlineHighlight: 'retrieve, reason, and ship',
  headlinePost: ' — cost-optimised RAG and multi-agent systems that actually work in production.',
  sub: 'I design and deploy retrieval-augmented generation pipelines, multi-agent evaluation frameworks, and document intelligence systems — with 95–96% accuracy on production datasets.',
  ctaPrimary: 'Explore My Work',
  ctaSecondary: 'Download Resume',
  scrollCue: 'Scroll for exploring portfolio',
};

export const stats = [
  { value: '5+', label: 'Production AI Systems', icon: 'shield' },
  { value: '12+', label: 'Months AI/ML Experience (As Intern)', icon: 'box' },
  { value: '1st', label: 'Stellantis VPE Hackathon', icon: 'award' },
  { value: '4+', label: 'Multi-Agent Pipelines', icon: 'network' },
  { value: '15+', label: 'Tools & Frameworks', icon: 'wrench' },
  { value: '95–96%', label: 'Production Accuracy', icon: 'link' },
];

export const about = {
  eyebrow: 'origin node',
  title: 'About Me',
  paragraphs: [
    "I'm an AI/ML Engineer who ships production retrieval-augmented generation systems, multi-agent orchestration, and document intelligence — not just demos.",
    'I design and build RAG pipelines on resource-constrained infrastructure, semantic search architectures over vector databases like Qdrant and Chroma, and multi-agent workflows with LangGraph for evaluation and automation.',
    "What I care about most is cost-optimised inference on real hardware — getting 500ms latency on 10K+ documents or 96% accuracy on production document extraction isn't an accident, it's deliberate engineering.",
    "Completed my B.E. in Mechanical Engineering in May 2026, with prior experience as an AI Engineer Intern at KCS, Stellantis, Wikasta, Zetheta, DYNX, and Getmax Healthcare."
  ],
};

export const expertise = [
  {
    key: 'lang',
    title: 'Programming Languages',
    items: ['Python', 'Java'],
  },
  {
    key: 'stack',
    title: 'LLM & Orchestration',
    items: ['LangChain', 'LangGraph', 'Ollama', 'Smolagents', 'LlamaCpp', 'Multi-Agent Systems', 'RAG', 'Prompt Engineering', 'Tool Calling'],
  },
  {
    key: 'models',
    title: 'Models & Embeddings',
    items: ['Qwen-2.5 Thinking', 'Qwen 1.5B-Thinking', 'Llama-3.2-11B-Vision', 'Gemini Embeddings', 'HuggingFace Transformers'],
  },
  {
    key: 'data',
    title: 'NLP & Semantic Search',
    items: ['NLTK', 'Spacy', 'Gensim', 'TensorFlow', 'PyTorch', 'Sentence Transformers'],
  },
  {
    key: 'tools',
    title: 'Vector Databases',
    items: ['Qdrant', 'Chroma', 'PostgreSQL + PgVector', 'FAISS', 'DuckDuckGo Search API'],
  },
  {
    key: 'orchestration',
    title: 'Deployment & Tooling',
    items: ['N8N', 'Docker', 'Streamlit', 'Gradio', 'FastAPI', 'GitLab', 'Ollama (on-premise)'],
  },
];

export const internships = [
  {
    company: 'Karma Com Solidarité (KCS)',
    role: 'AI Engineer Intern (Volunteering)',
    date: 'Dec 2025 – May 2026',
    location: 'Remote · France',
    tools: ['Ollama', 'N8N', 'Qdrant', 'LangGraph', 'Docker'],
    desc: 'Built an on-premise role-based RAG assistant for volunteer activity tracking across a French NGO, with strict multi-tier access controls.',
    bullets: [
      'Built a role-based RAG assistant for volunteer tracking (50+ users) with N8N, Qdrant, and LangGraph; 500ms retrieval latency on 10K+ documents.',
      'Architected secure multi-tier access controls (Admin / Employee / Volunteer) with on-premise GitLab and Wiki integration.',
      'Deployed fully on-premise with model serving via Ollama for zero cloud egress.',
    ],
  },
  {
    company: 'Stellantis N.V',
    role: 'Product Development Intern',
    date: 'June 2025 – Dec 2025',
    location: 'Remote',
    tools: ['SpaCy', 'Ollama', 'Qwen 1.5B-Thinking', 'Streamlit'],
    desc: 'Engineered a multi-format document parameter extraction engine (PDF/DOCX/XLSX/XML) for a global automotive OEM — won 1st Place (Technical) at the Stellantis VPE Innovation Challenge 2025.',
    bullets: [
      'Engineered multi-format document parameter extraction (PDF/DOCX/XLSX/XML) with SpaCy NLP — 96% accuracy validated by QA.',
      'Built Streamlit UI with dark mode, filtering, and CSV export for business users.',
      'Won 1st Place in Stellantis VPE Innovation Challenge (Technical Merit) on a production dataset.',
    ],
  },
  {
    company: 'Wikasta Technical and Business Solutions',
    role: 'AI/ML Software Engineer Intern',
    date: 'June 2025 – July 2025',
    location: 'Remote',
    tools: ['Ollama', 'PostgreSQL + PgVector', 'Qwen-2.5 Thinking', 'Docker'],
    desc: 'Shipped two production AI systems in a single sprint: a duplicate detection pipeline and an OCR + unified-LLM resume parser.',
    bullets: [
      'Project 1 — Duplicate Detection Pipeline: multi-stage verification (SQL + LLM + vector search) achieving 95% accuracy on a 100-question production dataset.',
      'Project 2 — Resume Parser: OCR + unified single-model LLM stack reducing inference overhead 40% vs a dual-model baseline.',
    ],
  },
  {
    company: 'Zetheta Algorithms',
    role: 'AI Engineer Intern',
    date: 'June 2025 – July 2025',
    location: 'Remote',
    tools: ['LangGraph', 'Smolagents', 'Google ADK', 'DuckDuckGo API', 'Evidently'],
    desc: 'Architected a multi-agent LangGraph evaluation framework for assessing LLM outputs across quality dimensions, with real-time fact verification.',
    bullets: [
      'Architected a multi-agent LangGraph evaluation framework automating LLM assessment across accuracy, clarity, pedagogy, and tone metrics using the Evidently library.',
      'Engineered real-time fact verification (DuckDuckGo + LLM evidence analysis); deployed for persona-driven chatbot development.',
    ],
  },
  {
    company: 'DYNX Technologies',
    role: 'AI/ML Engineer Intern',
    date: 'July 2024 – Sept 2024',
    location: 'Remote',
    tools: ['NLTK', 'ChatterBot', 'SpaCy'],
    desc: 'Designed a virtual assistant for customer interactions using NLP-based intent recognition and entity extraction.',
    bullets: [
      'Designed a virtual assistant for customer interactions with NLP-based intent recognition and entity extraction.',
    ],
  },
  {
    company: 'Getmax Healthcare',
    role: 'Data Scientist Intern',
    date: 'Jan 2024 – May 2024',
    location: 'Chennai, India',
    tools: ['Dash', 'NumPy', 'Pandas', 'Scikit-learn'],
    desc: 'Led a 4-person team on healthcare analytics — integrated automated report generation and dashboard UI with PDF export.',
    bullets: [
      'Led a team of 4 on healthcare analytics — integrated report generation and UI creation with PDF export.',
    ],
  },
];

export const projects = [
  {
    id: 'kcs-rag',
    num: 'A1',
    title: 'KCS RAG Agent with Role-Based Access',
    desc: 'Production RAG assistant for volunteer tracking with N8N, Qdrant, LangGraph — 500ms latency on 10K+ documents across 50+ users.',
    stack: ['Python', 'LangGraph', 'Qdrant', 'N8N', 'Ollama', 'Docker'],
    demo: null,
    github: 'https://github.com/ajayjai30/RAG_SYSTEM_WITH_N8N_FILE-INGESTION-WITH-RBAC-CONTROL-FOR-KCS-APPLICATION',
  },
  {
    id: 'doc-extraction',
    num: 'A2',
    title: 'Multi-Format Document Parameter Extraction',
    desc: 'Extraction engine for PDF/DOCX/XLSX/XML using SpaCy NLP, validated at 96% accuracy against QA benchmarks.',
    stack: ['Python', 'SpaCy', 'Qwen 1.5B-Thinking', 'Streamlit', 'Ollama'],
    demo: null,
    github: 'https://github.com/ajayjai30/Stellantis_Project-Automated_PDF_Comparison_Tool',
  },
  {
    id: 'duplicate-detect',
    num: 'A3',
    title: 'Duplicate Detection Pipeline',
    desc: 'Multi-stage verification (SQL + LLM + vector search) hitting 95% accuracy on a 100-question production dataset.',
    stack: ['Python', 'PostgreSQL + PgVector', 'Qwen-2.5 Thinking', 'Ollama', 'Docker'],
    demo: null,
    github: null,
  },
  {
    id: 'resume-parser',
    num: 'A4',
    title: 'OCR + Unified-Stack Resume Parser',
    desc: 'Unified single-model LLM stack with OCR, reducing inference overhead 40% vs a dual-model baseline.',
    stack: ['Python', 'Qwen-2.5 Thinking', 'OCR', 'Ollama'],
    demo: null,
    github: null,
  },
  {
    id: 'personapulse',
    num: 'A5',
    title: 'PersonaPulse — Multi-Agent Evaluation Framework',
    desc: 'LangGraph multi-agent framework automating LLM evaluation across accuracy, clarity, pedagogy, and tone metrics with Evidently.',
    stack: ['Python', 'LangGraph', 'Smolagents', 'Google ADK', 'Evidently', 'DuckDuckGo API'],
    demo: null,
    github: 'https://github.com/ajayjai30/MULTI-AGENT-SYSTEM-FOR-FINANCE-BOT-DEVELOPMENT-AND-EVALUATION',
  },
  {
    id: 'physics-rag',
    num: 'A6',
    title: 'Subject-Expert Physics Chatbot',
    desc: 'RAG chatbot over 2,500+ solved fluid mechanics problems with Chroma + Gemini embeddings — 87% relevance, multi-modal OCR/vision.',
    stack: ['Python', 'LangChain', 'Chroma', 'HuggingFace', 'Gradio', 'Llama-3.2-11B-Vision'],
    demo: null,
    github: 'https://github.com/ajayjai30/SUBJECT_EXPERT_CHATBOT_FOR_STUDETNS_AND_RESEARCHERS',
  },
];

export const whyBuilt = [
  {
    id: 'kcs-rag',
    title: 'KCS RAG Agent with Role-Based Access',
    problem: 'Volunteer organisations lose hours tracking activity manually across teams with different access levels.',
    solution: 'Role-aware RAG over N8N workflows + Qdrant vector store, deployed on-premise for data sovereignty.',
    impact: '50+ active users with 500ms latency on 10K+ documents, zero cloud egress.',
  },
  {
    id: 'doc-extraction',
    title: 'Multi-Format Document Parameter Extraction',
    problem: 'Business teams spend days extracting structured parameters from mixed-format business documents.',
    solution: 'Multi-format ingestion (PDF/DOCX/XLSX/XML) + SpaCy NLP + LLM post-processing.',
    impact: '96% accuracy validated by QA, exported directly into business workflows via Streamlit.',
  },
  {
    id: 'duplicate-detect',
    title: 'Duplicate Detection Pipeline',
    problem: 'Duplicate records in production databases silently degrade analytics and customer trust.',
    solution: 'Multi-stage verification combining SQL heuristics, LLM semantic judgement, and vector search.',
    impact: '95% accuracy on 100-question production dataset, replacing a manual review process.',
  },
  {
    id: 'resume-parser',
    title: 'OCR + Unified-Stack Resume Parser',
    problem: 'Two-model pipelines (OCR + LLM) double inference cost and latency for resume ingestion.',
    solution: 'Single unified LLM stack that handles OCR + structured extraction natively.',
    impact: '40% lower inference overhead vs the dual-model baseline on the same workload.',
  },
  {
    id: 'personapulse',
    title: 'PersonaPulse — Multi-Agent Evaluation Framework',
    problem: 'Evaluating LLM outputs across multiple quality dimensions manually does not scale.',
    solution: 'LangGraph multi-agent pipeline + Evidently library + DuckDuckGo fact-checking.',
    impact: 'Automated assessment across accuracy, clarity, pedagogy, and tone for persona-driven chatbots.',
  },
  {
    id: 'physics-rag',
    title: 'Subject-Expert Physics Chatbot',
    problem: 'Students struggle to get reliable, step-by-step help on engineering physics problems.',
    solution: 'RAG over 2,500+ solved problems + multi-modal OCR/vision for diagram-based questions.',
    impact: '87% relevance scoring across 50+ user sessions, deployed live on Colab via Gradio.',
  },
];

export const process = [
  {
    step: 1,
    title: 'Understand the Workflow',
    text: "Before writing any code, I figure out who the AI system is actually for and what task they're currently doing manually. I identify what data, tools, or constraints shape the solution — vector store, on-prem vs cloud, latency budget.",
  },
  {
    step: 2,
    title: 'Design the Architecture',
    text: 'I decide whether the task needs a single retrieval pipeline, a multi-agent workflow, or a hybrid. If the task has distinct phases — retrieve, then reason, then act — that usually means specialised agents will be more reliable than one monolithic prompt. I sketch how data flows between them.',
  },
  {
    step: 3,
    title: 'Set Up the Skeleton',
    text: 'Folder structure, data models (Pydantic schemas for valid input/output), vector store config, and how state flows through the pipeline — all before writing agent logic. Skipping this is how AI projects turn into unmaintainable spaghetti.',
  },
  {
    step: 4,
    title: 'Build & Test Each Component',
    text: 'I build one agent or retrieval step at a time and test it in isolation with real and edge-case inputs before moving on. Testing piece-by-piece catches bugs early and tells you exactly which step is wrong when something breaks.',
  },
  {
    step: 5,
    title: 'Integrate & Test the Pipeline',
    text: 'Once each piece works alone, I connect them and run realistic end-to-end scenarios, including edge cases a real user might trigger — empty context, contradictory queries, malformed documents. This is where integration bugs surface that unit tests alone never catch.',
  },
  {
    step: 6,
    title: 'Harden It',
    text: 'Before anyone else touches it: what happens if the LLM returns malformed output, an embedding model fails, or a user asks something out of scope? Error handling, validation, and rate-limiting all live here.',
  },
  {
    step: 7,
    title: 'Deploy & Monitor',
    text: 'Ship it, then actually watch how real usage differs from my assumptions. Real users are creative about breaking things in ways test cases never anticipate — deployment is the start of learning, not the finish line.',
  },
];

export const certifications = [
  {
    title: 'Building RAG Agents with LLMs',
    issuer: 'NVIDIA',
    date: 'Nov 2025',
    desc: 'Hands-on training in building production retrieval-augmented generation agents — embeddings, vector stores, retrieval strategies, agent integration with LLMs.',
    skills: ['RAG', 'Vector Stores', 'Embeddings', 'Retrieval Strategies', 'Agent Integration'],
    tools: ['NVIDIA NIM', 'LangChain', 'FAISS'],
    link: null,
  },
  {
    title: 'Oracle Cloud Infrastructure Generative AI Professional 2025',
    issuer: 'Oracle',
    date: 'Nov 2024',
    desc: 'OCI Generative AI Professional certification covering foundation models, fine-tuning, RAG service, vector search, and OCI-native deployment.',
    skills: ['Generative AI', 'RAG Service', 'Vector Search', 'Fine-Tuning', 'OCI'],
    tools: ['Oracle Cloud', 'OCI GenAI'],
    link: null,
  },
  {
    title: '1st Place — Stellantis VPE Hackathon',
    issuer: 'Stellantis N.V',
    date: 'June 2025 – Dec 2025',
    desc: 'Won 1st Place + Honorary Finalist recognition for the multi-format document parameter extraction engine (96% accuracy, dark-mode Streamlit UI, CSV export).',
    skills: ['SpaCy NLP', 'Multi-Format Ingestion', 'Streamlit', 'Prompt Engineering'],
    tools: ['Qwen 1.5B-Thinking', 'Ollama', 'Streamlit'],
    link: null,
  },
  {
    title: 'Top Problem Solver — AI Technology',
    issuer: 'Cogtis Technologies',
    date: 'Mar 2024 – Aug 2024',
    desc: 'Recognised as a Top Problem Solver in AI Technology track — competitive engineering assessments across NLP and ML problem sets.',
    skills: ['Problem Solving', 'NLP', 'ML Engineering'],
    tools: [],
    link: null,
  },
];

export const education = [
  { year: '2022 – 2026', title: 'B.E. in Mechanical Engineering', institution: "St. Joseph's Institute of Technology", emphasize: true },
  { year: 'Intellipaat & IBM', title: 'Data science Architect masters course, intellipaat&IBM', institution: '' },
  { year: 'Self-Taught', title: 'Self taught AI/ML concepts with interns', institution: '' },
];

export const loaderExplore = [
  'About Me', 'Projects',
  'Skills', 'Education',
  'Project Workflow', 'Agent Workflow Example',
  'Resume', 'Contact',
];

export const resumeDoc = {
  skills: [
    { label: 'Programming Languages', value: 'Python (Advanced), Java (Intermediate)' },
    { label: 'LLM & Orchestration', value: 'LangChain, LangGraph, Ollama, Smolagents, LlamaCpp' },
    { label: 'NLP & Semantic Search', value: 'NLTK, Spacy, Gensim, HuggingFace Transformers, TensorFlow, PyTorch' },
    { label: 'Vector Databases', value: 'Qdrant, Chroma, PostgreSQL + PgVector, DuckDuckGo Search API' },
    { label: 'Deployment', value: 'N8N, Docker, Streamlit, Gradio, FastAPI' },
  ],
  internships: [
    {
      heading: 'AI Engineer Intern (Volunteering) — Karma Com Solidarité (KCS) | Dec 2025 – May 2026',
      demo: null,
      bullets: [
        'Built a role-based RAG assistant for volunteer tracking (50+ users) with N8N, Qdrant, and LangGraph; 500ms retrieval latency on 10K+ documents.',
        'Architected secure multi-tier access controls (Admin / Employee / Volunteer) with on-premise GitLab and Wiki integration.',
      ],
    },
    {
      heading: 'Product Development Intern — Stellantis N.V | June 2025 – Dec 2025',
      demo: null,
      bullets: [
        'Engineered a multi-format document parameter extraction engine (PDF/DOCX/XLSX/XML) with SpaCy NLP — 96% accuracy validated by QA.',
        'Won 1st Place (Technical Merit) at the Stellantis VPE Innovation Challenge 2025 on a production dataset.',
      ],
    },
    {
      heading: 'AI/ML Software Engineer Intern — Wikasta Technical and Business Solutions | June 2025 – July 2025',
      demo: null,
      bullets: [
        'Duplicate Detection Pipeline — multi-stage verification (SQL + LLM + vector search) hitting 95% accuracy on a 100-question production dataset.',
        'Resume Parser — OCR + unified single-model LLM stack reducing inference overhead 40% vs dual-model baseline.',
      ],
    },
    {
      heading: 'AI Engineer Intern — Zetheta Algorithms | June 2025 – July 2025',
      demo: null,
      bullets: [
        'Architected a multi-agent LangGraph evaluation framework automating LLM assessment across accuracy, clarity, pedagogy, and tone using Evidently.',
        'Engineered real-time fact verification (DuckDuckGo + LLM evidence analysis); deployed for persona-driven chatbot development.',
      ],
    },
    {
      heading: 'AI/ML Engineer Intern — DYNX Technologies | July 2024 – Sept 2024',
      demo: null,
      bullets: [
        'Designed a virtual assistant for customer interactions with NLP-based intent recognition and entity extraction.',
      ],
    },
    {
      heading: 'Data Scientist Intern — Getmax Healthcare | Jan 2024 – May 2024',
      demo: null,
      bullets: [
        'Led a 4-person team on healthcare analytics; integrated automated report generation and dashboard UI with PDF export.',
      ],
    },
  ],
  projects: [
    {
      heading: 'PersonaPulse — Multi-Agent Chatbot Evaluation Framework | LangGraph, Smolagents, Google ADK, Evidently, DuckDuckGo API',
      demo: null,
      bullets: [
        'Built a multi-agent LangGraph workflow that automates LLM evaluation across accuracy, clarity, pedagogy, and tone metrics using the Evidently library.',
        'Engineered real-time fact verification combining DuckDuckGo search with LLM-based evidence analysis; deployed for persona-driven chatbot development.',
      ],
    },
    {
      heading: 'Subject-Expert Chatbot for Physics/Research | LangChain, Chroma, HuggingFace, Gradio, Llama-3.2-11B-Vision',
      demo: null,
      bullets: [
        'RAG chatbot trained on 2,500+ solved physics (fluid mechanics) problems with Chroma DB and Gemini embeddings — 87% relevance scoring across 50+ user sessions.',
        'Multi-modal interface supporting text + image upload (OCR + vision model) for diagram-based problem solving; deployed on Colab via Gradio.',
        'Refactoring to a LangGraph agent (removing LangChain) for autonomous web search and ~35% token overhead reduction.',
      ],
    },
  ],
  education: [
    { title: 'B.E. in Mechanical Engineering', place: "St. Joseph's Institute of Technology", range: '2022 – 2026' },
    { title: 'Data Science Architect Masters Course', place: 'IBM, Intellipaat', range: '2022 – Present' },
    { title: 'Self-taught AI/ML Concepts', place: 'with internship experience', range: '' },
  ],
  languages: ['English', 'Tamil', 'Hindi'],
};

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Workflow', href: '#process' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { key: 'github', label: 'GitHub', href: profile.github },
  { key: 'linkedin', label: 'LinkedIn', href: profile.linkedin },
  { key: 'mail', label: 'Email', href: `mailto:${profile.email}` },
];
