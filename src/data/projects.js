const GITHUB_BASE = 'https://github.com/tiwariraju';

export const FEATURED_PROJECTS = [
  {
    id: 'job-tracker',
    title: 'Job Tracker – Job Application Management System',
    description:
      'Full-stack job tracking system managing 100+ job applications. Built 8+ RESTful APIs with CRUD operations and validation. Integrated React frontend with Spring Boot backend. Added global exception handling and validation.',
    techStack: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'Postman'],
    github: `${GITHUB_BASE}/Job-tracker`,
    demo: '#',
    icon: 'briefcase',
    featured: true,
  },
  {
    id: 'group-chat',
    title: 'Group Chat Web Application',
    description:
      'Real-time multi-user chat application. Implemented WebSocket and STOMP protocol. Enabled dynamic chat rooms. Improved communication efficiency by replacing HTTP polling.',
    techStack: ['Java', 'Spring Boot', 'WebSocket', 'STOMP', 'HTML', 'Bootstrap', 'JavaScript'],
    github: `${GITHUB_BASE}/Chat-Application`,
    demo: '#',
    icon: 'message',
    featured: true,
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 'job-tracker-portfolio',
    title: 'Job Tracker – Job Application Management System',
    description:
      'Full-stack job tracking system with 8+ RESTful APIs, CRUD validation, and Spring Boot + React integration',
    techStack: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs'],
    period: '2025 – 2026',
    category: 'fullstack',
    github: `${GITHUB_BASE}/Job-tracker`,
    demo: '#',
    icon: 'briefcase',
  },
  {
    id: 'group-chat-portfolio',
    title: 'Group Chat Web Application',
    description: 'Real-time group chat enabling multiple users to communicate simultaneously',
    techStack: ['Spring Boot', 'WebSocket', 'STOMP', 'Bootstrap'],
    period: 'Jun 2025 – Aug 2025',
    category: 'fullstack',
    github: `${GITHUB_BASE}/Chat-Application`,
    demo: '#',
    icon: 'message',
  },
  {
    id: 'rest-api',
    title: 'RESTful API System',
    description: 'Comprehensive backend API with authentication, data management, and real-time features',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'JWT'],
    period: 'Mar 2024 – May 2024',
    category: 'backend',
    github: GITHUB_BASE,
    demo: '#',
    icon: 'database',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platform',
    description: 'Full-featured online shopping platform with user management and payment integration',
    techStack: ['Spring Boot', 'React', 'MySQL', 'Stripe'],
    period: 'Sep 2024 – Dec 2024',
    category: 'web',
    github: GITHUB_BASE,
    demo: '#',
    icon: 'cart',
  },
];

export const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Applications' },
  { id: 'backend', label: 'Backend' },
  { id: 'fullstack', label: 'Full-Stack' },
];
