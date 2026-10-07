export const portfolioData = {
  name: "Nisith Mohanty",
  title: "Senior Frontend Engineer / Frontend Lead",
  subtitle: "React · TypeScript · Performance · Payments",
  description: "Senior Frontend Engineer and Frontend Lead with 10 years of experience building production-grade web applications in JavaScript, TypeScript, and React, with strong focus on payments and financial services.",
  email: "mohantynisith116@gmail.com",
  phone: "+91 9769360059",
  location: "Bengaluru, India (open to remote)",
  linkedIn: "https://www.linkedin.com/in/nisith-mohanty-6210bb123",
  portfolio: "https://portfolio-nisith-mohanty.vercel.app",
  github: "https://github.com",

  summary: [
    "Senior Frontend Engineer and Frontend Lead with 10 years building production-grade web applications in JavaScript, TypeScript, and React, much of it in payments and financial services.",
    "Owns frontend architecture and delivery for two multi-tenant Visa platforms used across 5 regions; defined coding standards, reusable component systems, and performance playbooks; improved Core Web Vitals and page-load performance; and runs production monitoring with Sentry, Grafana, and real-user monitoring.",
    "Earlier integrated UPI and net banking payments for 10,000+ merchants at Dena Bank. Leads 5 engineers and 1 QA with code reviews, mentoring, and knowledge sharing in an agile team."
  ],

  experience: [
    {
      company: "Visa",
      title: "Senior Software Engineer (Frontend Lead)",
      duration: "Jul 2022 – Present",
      location: "Bengaluru, India",
      description: "Multi-tenant sales-enablement platforms for Visa used across 5 regions.",
      achievements: [
        "Optimized Core Web Vitals and page-load performance on VAS Sales Navigator (LCP 3.2s to 2.1s, INP 600ms to 250ms, CLS 0.5 to 0.2) with code splitting, lazy loading, memoization, virtual scrolling, and bundle budgets.",
        "Defined frontend architecture, coding standards, and reusable patterns for both work streams; built a shared design system and performance playbook in Storybook used by 5 teams across Visa.",
        "Proposed and led the monolith-to-micro-frontends migration using Webpack Module Federation; wrote architecture docs, won leadership approval, and aligned 3 teams to split a single codebase into 2 independently deployed apps.",
        "Built pricing and fee-calculation UI used by client-facing sales teams, reducing calculation errors by ~44% and making quotes 2.5x faster; integrated GraphQL services with Apollo caching, cutting API calls by ~15%.",
        "Implemented authentication and RBAC across multi-tenant platforms with consistent validation and error-state handling.",
        "Diagnosed production issues with Sentry, Grafana, Prometheus, and RUM; shipped through Jenkins CI/CD with weekly releases, feature flags, and A/B experiments, reducing production issues by ~30%.",
        "Delivered accessible, responsive UI meeting WCAG AA in 7+ languages; maintained ~85% unit coverage and Cypress/Playwright E2E suites.",
        "Led 5 engineers and 1 QA through technical design, launch, code reviews, mentorship, and stakeholder collaboration across geographies."
      ]
    },
    {
      company: "Operative",
      title: "Senior Frontend Developer (Lead Frontend Engineer)",
      duration: "Jan 2020 – Jul 2022",
      location: "Bengaluru, India",
      description: "Ratecard platform and Product Chooser.",
      achievements: [
        "Owned Product Chooser end to end as lead frontend engineer from design to production launch on Azure/GCP while mentoring 5 developers.",
        "Built reusable React/TypeScript component library and design system in Storybook adopted across teams on the Ratecard platform.",
        "Drove micro-frontend initiatives across applications using a multi-repo approach and built WebSocket-based real-time collaboration for concurrent users.",
        "Improved site performance by ~28% through code splitting, Service Worker caching, and state-store optimization; owned GitLab CI and Jenkins pipelines.",
        "Resolved 260+ production issues and delivered 3 major enhancements; raised test coverage to 90% with TDD using Jest and React Testing Library.",
        "Shipped a cross-platform React Native app for iOS and Android."
      ]
    }
  ],

  skills: {
    frontend: ["JavaScript (ES6+)", "TypeScript", "React", "HTML5", "CSS3", "SCSS", "Next.js", "Angular", "CSS Modules", "Styled Components", "Tailwind CSS"],
    stateAndApis: ["Redux Toolkit", "Zustand", "TanStack Query", "RESTful APIs", "GraphQL", "Apollo", "Code Generator", "WebSockets"],
    architecture: ["Reusable component systems", "Design systems", "Storybook", "Design tokens", "Theming", "Micro-frontends", "Webpack Module Federation", "single-spa", "Nx monorepo", "Webpack", "Vite"],
    performance: ["Core Web Vitals", "LCP", "INP", "CLS", "Page-load optimization", "Bundle budgets", "Code splitting", "Lazy loading", "Memoization", "Virtual scrolling", "Service Worker caching"],
    testing: ["Jest", "React Testing Library", "Cypress", "Playwright", "TDD", "axe", "jest-axe"],
    accessibility: ["WCAG AA", "Responsive design", "i18n", "Figma"],
    observability: ["Sentry", "Grafana", "Prometheus", "RUM", "Feature flags", "A/B experimentation", "Git", "Jenkins", "GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "AWS", "Azure", "GCP"],
    security: ["OAuth/SSO", "JWT", "RBAC", "OWASP"],
    backendAndMobile: ["Node.js", "MongoDB", "Kafka", "SQS", "Redis", "Elasticsearch", "React Native"],
    ai: ["LLM features", "Semantic search", "MCP tools", "AI coding assistants"],
    waysOfWorking: ["Agile/Scrum", "JIRA", "Confluence", "RFCs", "Architecture decisions", "Technical roadmaps", "Code reviews", "Mentoring"]
  },

  education: {
    degree: "Bachelor of Technology, Electrical Engineering",
    period: "2012 – 2016",
    institution: "College of Engineering and Technology, Bhubaneswar"
  },

  achievements: {
    yearsExperience: 10,
    engineersLed: 5,
    regions: 5,
    proposals: 10000,
    ticketsResolved: 260,
    testCoverage: 90
  }
};
