import {
  Bot,
  Boxes,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Database,
  GraduationCap,
  LockKeyhole,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Abhishek Bhol',
  title: 'Senior Application Developer',
  targetRole: 'DevOps / Platform Engineering roles',
  location: 'Kolkata, India',
  email: 'abhishekkbhol@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhishek-b-2a34b3359/',
  github: 'https://github.com/abhishek-bhol-git',
  image: '/images/profile.jpg',
  headline: 'Senior Application Developer building reliable cloud-native platforms.',
  subheadline:
    'Focused on OpenShift, Kubernetes, CI/CD automation, Node.js microservices, and enterprise cloud modernization.',
  summary:
    'I am a Senior Application Developer with 7+ years of experience in enterprise backend development, microservices, secure API integrations, production support, and cloud-native modernization. My current focus is DevOps and Platform Engineering, especially PCF to Red Hat OpenShift migration, deployment automation, containerized workloads, CI/CD pipelines, and release stability.',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const heroBadges = [
  '7+ Years Experience',
  '40+ Virtual Assistant Solutions',
  'OpenShift / Kubernetes / CI/CD',
  'PCF to OpenShift Migration',
];

export const primarySkillTags = [
  'OpenShift',
  'Kubernetes',
  'Docker',
  'CI/CD',
  'PCF Migration',
  'Platform Engineering',
  'Node.js',
  'Express.js',
  'Microservices',
  'REST APIs',
  'MongoDB',
  'Redis',
  'AWS',
  'Azure',
  'Jenkins',
  'API Security',
  'Production Support',
];

export const skillCategories = [
  {
    title: 'DevOps & Platform Engineering',
    icon: CloudCog,
    summary: 'Cloud-native delivery, release stability, and platform migration workflows.',
    skills: [
      'Red Hat OpenShift',
      'Kubernetes',
      'Docker',
      'PCF to OpenShift Migration',
      'CI/CD Pipelines',
      'Deployment Automation',
      'Release Management',
      'Platform Engineering',
      'Environment Stability',
    ],
  },
  {
    title: 'Backend & Microservices',
    icon: Code2,
    summary: 'Production backend services with secure APIs and modular service design.',
    skills: [
      'Node.js',
      'JavaScript',
      'Express.js',
      'Microservices',
      'REST APIs',
      'Middleware',
      'Session Management',
      'WebSockets',
      'API Integration',
    ],
  },
  {
    title: 'Database & Caching',
    icon: Database,
    summary: 'Reliable data access, caching, logs, and operational visibility.',
    skills: ['MongoDB', 'Redis', 'Azure SQL', 'Caching', 'Structured Logging'],
  },
  {
    title: 'Cloud & Tools',
    icon: Boxes,
    summary: 'Hands-on engineering across cloud services, source control, and observability tools.',
    skills: [
      'AWS S3',
      'AWS Lex',
      'AWS CodeCommit',
      'AWS Secrets Manager',
      'Azure Translator',
      'Azure Blob',
      'Jenkins',
      'Git',
      'GitHub',
      'Postman',
      'Kibana',
    ],
  },
  {
    title: 'Security & Reliability',
    icon: ShieldCheck,
    summary: 'Secure integration patterns with production support and performance discipline.',
    skills: [
      'Authentication',
      'Authorization',
      'JWT',
      'OAuth',
      'API Security',
      'Secrets Management',
      'Production Support',
      'Performance Optimization',
    ],
  },
  {
    title: 'AI / Virtual Assistant',
    icon: Bot,
    summary: 'Conversational automation backed by scalable service integrations.',
    skills: ['Amazon Lex', 'NLP', 'OpenAI', 'LangChain', 'Virtual Assistant Solutions', 'Conversational AI'],
  },
];

export const experience = [
  {
    company: 'IBM',
    role: 'Senior Application Developer',
    duration: 'March 2026 – Present',
    icon: ServerCog,
    bullets: [
      'Working on enterprise PCF to Red Hat OpenShift migration and cloud-native modernization.',
      'Developing CI/CD pipelines and deployment automation for containerized applications.',
      'Managing OpenShift deployments, Docker-based workloads, release workflows, and environment stability.',
      'Collaborating with cross-functional Agile teams across engineering, DevOps, QA, and platform functions.',
    ],
  },
  {
    company: 'Accenture',
    role: 'Team Lead',
    duration: 'June 2019 – March 2026',
    icon: BriefcaseBusiness,
    bullets: [
      'Led backend delivery for enterprise virtual assistant solutions using Node.js, Express.js, MongoDB, Redis, and secure REST APIs.',
      'Delivered 40+ virtual assistant solutions from design to deployment, testing, and production support.',
      'Worked on authentication, authorization, middleware, API security, caching, session management, and performance optimization.',
      'Mentored junior developers, supported technical documentation, story estimation, Agile delivery, and cross-team collaboration.',
    ],
  },
];

export const projects = [
  {
    name: 'PCF to OpenShift Migration',
    type: 'Platform Engineering / Cloud Modernization',
    icon: Workflow,
    description:
      'Enterprise application modernization involving PCF to Red Hat OpenShift migration, containerized deployment workflows, CI/CD enablement, and environment stability.',
    impact: 'Modernized delivery paths for cloud-native runtime stability.',
    stack: ['OpenShift', 'Kubernetes', 'Docker', 'CI/CD', 'PCF Migration'],
  },
  {
    name: 'Virtual Assistant Delivery Platform',
    type: 'Backend / Enterprise Automation',
    icon: Sparkles,
    description:
      'Delivered 40+ enterprise virtual assistant solutions using Node.js microservices, secure API integrations, MongoDB, Redis, middleware, authentication, testing, deployment, and production support.',
    impact: 'Scaled repeatable assistant delivery from build to production support.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'AWS Lex', 'REST APIs'],
  },
  {
    name: 'Secure Microservices Backend',
    type: 'Backend Engineering / API Security',
    icon: LockKeyhole,
    description:
      'Built reusable backend services with Node.js, REST APIs, middleware, caching, session management, authentication, authorization, and production-grade reliability.',
    impact: 'Strengthened API security and reusable backend foundations.',
    stack: ['Node.js', 'REST APIs', 'JWT', 'OAuth', 'Redis', 'API Security'],
  },
];

export const certifications = [
  {
    title: 'Red Hat OpenShift Developer II: Building and Deploying Cloud-native Applications (DO288) - Ver. 4.18',
    issuer: 'Red Hat',
    date: 'April 06, 2026',
    creditHours: '40 credit hours',
    link: 'https://www.credly.com/badges/36444fe8-2ced-4770-b2b9-a7afde1ab066',
    icon: Rocket,
  },
  {
    title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
    issuer: 'Udemy',
    date: '2023',
    creditHours: null,
    link: null,
    icon: TerminalSquare,
  },
];

export const education = {
  degree: 'B.Tech in Information Technology',
  school: 'KIIT Bhubaneswar',
  duration: '2015 – 2019',
  gpa: '7.64 / 10',
  icon: GraduationCap,
};
