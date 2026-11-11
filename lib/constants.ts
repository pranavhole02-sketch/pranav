import { siteConfig } from "@/config/site";

export const SITE_INFO = {
  name: siteConfig.name,
  initials: siteConfig.initials,
  role: siteConfig.role,
  location: siteConfig.location,
  tagline: "AVAILABLE FOR FREELANCE · REMOTE",
  headlineLines: ["I build AI agents", "& SaaS products", "that ship."] as const,
  headlineHighlight: "ship.",
  subtext:
    "Senior AI engineer with 4+ years shipping production SaaS: multi-agent systems, RAG and full-stack web apps for startups and distributed teams.",
  aboutHeading: "Hi, I'm Pranav",
  aboutLead:
    "A senior AI engineer and full-stack developer in Bengaluru who takes products from idea to production.",
  aboutCopy:
    "I've spent 4+ years building production SaaS and AI systems: 2+ in full-time roles and 2+ freelancing with startups. Right now I'm building a governed multi-agent delivery platform at Small Day Tech. I work independently and with distributed teams, and I care about software that is secure, well tested and affordable to run.",
  education: "B.E. Electrical Engineering, Government College of Engineering Amravati (2020 – 2024)",
  ctaHeading: "Have a project in mind?",
  ctaSubtext: "Tell me what you're building and I'll get back to you by email.",
  footerDescription:
    "Freelance AI engineer and full-stack developer building agentic AI, SaaS platforms and backends.",
  copyright: `© 2026 ${siteConfig.fullName}. All rights reserved.`,
  email: siteConfig.contact.email,
  phone: siteConfig.contact.phone,
  phoneHref: siteConfig.contact.phoneHref,
  links: {
    viewWork: "#work",
  },
  socials: siteConfig.socials,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const TRUST_ITEMS = [
  { icon: "rocket", title: "4+ Years in Production", tone: "yellow" },
  { icon: "growth", title: "5+ Freelance Clients", tone: "mint" },
  { icon: "heart", title: "Remote-First Collaboration", tone: "pink" },
] as const;

export const SERVICES = [
  {
    id: "ai-agents",
    title: "AI Agents & Automation",
    description:
      "Multi-agent systems, RAG and MCP tool integrations with guardrails, audit logs and cost controls built in.",
    icon: "ai-chip",
  },
  {
    id: "saas-web-apps",
    title: "SaaS & Web Apps",
    description:
      "Full-stack products in Next.js, Node.js and PostgreSQL, taken from MVP to production.",
    icon: "laptop",
  },
  {
    id: "backend-apis",
    title: "APIs & Backend",
    description:
      "REST and GraphQL APIs, Redis caching and query tuning for backends that stay fast under load.",
    icon: "database",
  },
  {
    id: "cloud-migration",
    title: "Cloud, DevOps & Migration",
    description:
      "AWS, Docker and CI/CD pipelines, plus moving legacy systems onto a modern Node.js stack.",
    icon: "cloud",
  },
] as const;

export const PROJECT_TABS = ["All", "AI & Agents", "SaaS", "Real-Time"] as const;

export const PROJECTS = [
  {
    id: "bluefin-ai-portal",
    title: "BlueFin AI Portal",
    description:
      "Governed AI delivery platform (in development). Six agents turn requirements into reviewed pull requests inside sandboxes, with policy-checked tool calls, a budget halt and human approval before any merge or deploy.",
    category: "AI & Agents",
    tag: "AI Platform",
    type: "dashboard",
    tags: ["Python", "MCP", "Claude", "GPT", "Gemini", "PostgreSQL", "Redis"],
    links: null,
  },
  {
    id: "chainops-ai",
    title: "ChainOps AI",
    description:
      "AIOps SaaS with wallet-risk monitoring, incident management, alert rules, automation workflows and billing. Its AI Copilot uses RAG over runbooks for evidence-backed investigations.",
    category: "AI & Agents",
    tag: "AIOps SaaS",
    type: "dashboard",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Celery", "RAG"],
    links: siteConfig.projectLinks.chainops,
  },
  {
    id: "vendorbay",
    title: "Vendorbay",
    description:
      "B2B procure-to-pay platform. Built supplier onboarding, product catalogue and procurement backends with GraphQL and REST APIs, Redis caching, and RAG-powered product search.",
    category: "SaaS",
    tag: "B2B SaaS",
    type: "ecommerce",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "GraphQL", "LangGraph"],
    links: null,
  },
  {
    id: "tokentrade",
    title: "TokenTrade",
    description:
      "Real-time crypto trading simulator with live Binance order-book streaming and a Redis pub/sub match-engine worker for asynchronous order matching.",
    category: "Real-Time",
    tag: "Real-Time",
    type: "dashboard",
    tags: ["Next.js", "GraphQL", "Prisma", "PostgreSQL", "Redis"],
    links: siteConfig.projectLinks.tokentrade,
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discover",
    description: "A short call to understand goals, users and constraints",
    icon: "lightbulb",
  },
  {
    step: 2,
    title: "Scope",
    description: "Clear milestones, estimate and tech choices before code",
    icon: "pencil",
  },
  {
    step: 3,
    title: "Build",
    description: "Clean, typed and tested code shipped in small increments",
    icon: "code",
  },
  {
    step: 4,
    title: "Launch",
    description: "Deploy with Docker, CI/CD and monitoring in place",
    icon: "launch",
  },
  {
    step: 5,
    title: "Support",
    description: "Handover, docs and follow-up as your product grows",
    icon: "growth",
  },
] as const;

export const EXPERIENCE = [
  {
    id: "smalldaytech",
    role: "Senior AI Engineer",
    company: "Small Day Tech",
    period: "Aug 2026 – Present",
    summary: "BlueFin AI Portal: governed AI delivery platform.",
    points: [
      "Built the multi-agent orchestrator and agent harness in ~2 months in a 3-developer team: 6 agents from requirements to reviewed PR.",
      "Designed prompt-injection defence by containment: policy-checked, audit-logged tool calls and human approval before any ship.",
      "Built RAG without a vector DB, multi-model support (Claude, GPT, Gemini) and LLM cost controls.",
    ],
  },
  {
    id: "vendorbay",
    role: "Full-Stack Engineer",
    company: "Vendorbay",
    period: "Dec 2025 – Jul 2026",
    summary: "B2B procure-to-pay SaaS for enterprise procurement.",
    points: [
      "Scaled supplier onboarding, catalogue and procurement services with Node.js, TypeScript and PostgreSQL.",
      "Improved API speed and reliability with Redis caching and query optimisation.",
      "Integrated RAG and agentic workflows (FastAPI, LangChain, LangGraph) for product search.",
    ],
  },
  {
    id: "tcs",
    role: "Backend Developer",
    company: "Tata Consultancy Services",
    period: "Aug 2024 – Dec 2025",
    summary: "Enterprise solutions in BFSI and automation.",
    points: [
      "Led migration of a legacy VB.NET + PL/SQL system to Node.js, Express, React and PostgreSQL.",
      "Re-architected the database schema and queries, improving performance by ~25%.",
    ],
  },
  {
    id: "freelance",
    role: "Freelance & Contract Full-Stack Engineer",
    company: "Independent",
    period: "Jan 2022 – Jul 2024",
    summary: "Alongside my degree.",
    points: [
      "Delivered 5+ client projects for startups on React, Next.js, Node.js and PostgreSQL, plus OpenAI-powered automation in Python.",
    ],
  },
] as const;

export const SKILL_GROUPS = [
  {
    title: "AI & Agents",
    items: ["Multi-agent orchestration", "RAG", "MCP", "LangGraph", "LangChain", "OpenAI API", "Guardrails", "LLM cost control"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "React Native"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Python", "GraphQL", "REST", "Celery", "WebSockets / SSE"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, ECS, S3, CloudWatch)", "Azure", "Docker", "GitHub Actions"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "Firebase"],
  },
] as const;
