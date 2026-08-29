export const portfolioData = {
  personal: {
    name: "Panji",
    title: "Senior Software Maintenance",
    roles: [
      "Full-Stack Software Engineer"
    ],
    status: "Available for new projects, consultation, and opportunities",
    location: "Jakarta, Indonesia",
    bio: "With years of experience, I ensure your web applications run flawlessly. From squashing bugs and resolving client issues to building and optimizing features, I'm here to maintain and elevate your software's performance.",
    shortBio: "Transforming complex challenges into elegant, high-impact digital solutions.",
    email: "panji.bp.bp@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    discord: "https://discord.com",
    resumeUrl: "#resume",
    yearsExperience: "5+",
    projectsCompleted: "35+",
    clientSatisfaction: "99.8%",
    contributions: "1.4k+",
  },

  stats: [
    { label: "Years of Experience", value: "5+", detail: "Enterprise & Modern Web" },
    { label: "Projects Delivered", value: "40+", detail: "Specialized in HRIS Web App" },
    { label: "System Uptime", value: "95%", detail: "SLA Compliant" },
    { label: "Global Reach", value: "50k+", detail: "Active Monthly Users" },
  ],

  pillars: [
    {
      icon: "Cpu",
      title: "Good Performance",
      description: "Obsessed with Core Web Vitals, sub-second latency, and sub-millisecond algorithmic optimizations."
    },
    {
      icon: "ShieldCheck",
      title: "Clean & Resilient Architecture",
      description: "Writing maintainable, modular, and fault-tolerant code."
    },
    {
      icon: "Sparkles",
      title: "Pixel-Perfect UI/UX",
      description: "Crafting fluid, high-tech micro-interactions and responsive interfaces that delight users."
    }
  ],

  skillCategories: [
    {
      id: "frontend",
      name: "Frontend & UI Engineering",
      skills: [
        { name: "JavaScript / TypeScript", level: 100, icon: "FileCode" },
        { name: "React / Next.js", level: 100, icon: "Code" },
        { name: "CSS / Tailwind", level: 100, icon: "Palette" },
      ]
    },
    {
      id: "backend",
      name: "Backend Engineering",
      skills: [
        { name: "Go / Coldfusion / PHP / Javascript", level: 100, icon: "FileCode" },
        { name: "Relational Databases", level: 100, icon: "Database" },
        { name: "System Design", level: 100, icon: "Workflow" }
      ]
    }
  ],

  projects: [
    {
      id: "nexus-cloud",
      title: "Nexus Core - Cloud Telemetry & Observability Hub",
      category: "Full Stack",
      badge: "Featured System",
      description: "Real-time distributed observability platform handling 10k+ metric events/sec with sub-50ms live dashboard visualization, dynamic alert routing, and anomaly detection.",
      techStack: ["React 19", "Go", "WebSocket", "TimescaleDB", "Redis", "Docker"],
      metrics: "⚡ 50ms Live Latency · 10k RPS Sustained",
      github: "https://github.com",
      demo: "https://demo.nexuscore.io",
      featured: true,
      accentColor: "#00f2fe",
      detailedOverview: "Built for cloud-native engineering teams, Nexus Core aggregates telemetry metrics across hybrid multi-cloud clusters into an ultra-smooth interactive radar and timeline interface."
    },
    {
      id: "synapse-ai",
      title: "Synapse AI - Enterprise Knowledge Assistant",
      category: "AI & Cloud",
      badge: "AI Agent",
      description: "Intelligent autonomous agent engine with semantic vector search across 500k+ internal documents, contextual citation verification, and enterprise-grade role-based access control.",
      techStack: ["React", "Python FastAPI", "OpenAI", "Pinecone", "PostgreSQL", "Tailwind"],
      metrics: "🧠 98.4% Query Accuracy · 4x Faster Search",
      github: "https://github.com",
      demo: "https://synapse-ai.demo.app",
      featured: true,
      accentColor: "#9d4edd",
      detailedOverview: "Integrated multi-agent reasoning loops allowing enterprise workforces to synthesize confidential technical documentation and codebases in natural language securely."
    },
    {
      id: "quantum-pay",
      title: "QuantumPay - Ultra-Low Latency Payment Gateway",
      category: "Full Stack",
      badge: "FinTech",
      description: "Secure, PCI-DSS compliant financial settlement engine with idempotent transaction pipeline, multi-currency routing, and instant webhook dispatching.",
      techStack: ["React", "TypeScript", "Node.js", "Redis Streams", "PostgreSQL", "Stripe API"],
      metrics: "🔒 99.999% Fault Tolerance · <120ms Settlement",
      github: "https://github.com",
      demo: "https://quantumpay.demo.dev",
      featured: true,
      accentColor: "#00f5d4",
      detailedOverview: "Engineered transactional state machines with optimistic concurrency control and zero double-spend anomalies across high-frequency payment channels."
    },
    {
      id: "cyber-deck",
      title: "AuraOS - Web-based Futuristic Desktop Environment",
      category: "Web Apps",
      badge: "Experimental",
      description: "Modular browser-based window manager and development workspace with built-in code editor, terminal emulator, file system virtualization, and WebAssembly execution.",
      techStack: ["React", "WebAssembly", "Canvas 2D", "Zustand", "Monaco Editor"],
      metrics: "🚀 60 FPS Canvas UI · 12MB Zero-Install Bundle",
      github: "https://github.com",
      demo: "https://auraos.demo.io",
      featured: false,
      accentColor: "#ff007f",
      detailedOverview: "An exploration into next-generation browser capabilities, bringing native-like multitasking, IDE ergonomics, and hardware acceleration into the DOM."
    },
    {
      id: "hyper-mesh",
      title: "HyperMesh - P2P Distributed Storage Explorer",
      category: "AI & Cloud",
      badge: "Decentralized",
      description: "High-throughput peer-to-peer file distribution explorer with visual network topology graph, chunk integrity verification, and encryption key manager.",
      techStack: ["React", "Go", "IPFS", "D3.js", "WebRTC"],
      metrics: "🌐 100+ Active P2P Nodes · End-to-End Encrypted",
      github: "https://github.com",
      demo: "https://hypermesh.demo.net",
      featured: false,
      accentColor: "#70e000",
      detailedOverview: "Interactive decentralized storage dashboard with live WebRTC connection graph rendering nodes and real-time shard transfer speeds."
    },
    {
      id: "pulse-metrics",
      title: "PulseGuard - Web Performance & Security Monitor",
      category: "Web Apps",
      badge: "SaaS",
      description: "Continuous synthetic monitoring system tracking Core Web Vitals, SSL certificate expiration, DNS health, and DDoS spikes across 50+ global edge locations.",
      techStack: ["React", "Next.js", "Cloudflare Workers", "ClickHouse", "ChartJS"],
      metrics: "📈 50 Global Edge Probes · 1s Instant Alerts",
      github: "https://github.com",
      demo: "https://pulseguard.demo.app",
      featured: false,
      accentColor: "#f72585",
      detailedOverview: "Empowers web teams with sub-second alert dispatching via Slack, Discord, and PagerDuty whenever edge performance drops below thresholds."
    }
  ],

  experiences: [
    {
      period: "2021 - Present",
      role: "Senior Software Maintenance",
      company: "PT. Indodev Niaga Internet",
      location: "South Tangerang",
      type: "Full-Time",
      achievements: [
        "Maintained client's HRIS web apps with good SLA",
        "Customized existing features based on clients needs",
        "Developed extra features for client's HRIS web apps"
      ],
      tech: ["JavaScript", "GO", "Coldfusion", "MySQL / MariaDB / MS SQL"]
    },
    {
      period: "2018 - 2021",
      role: "Freelance Software Engineer",
      company: "Self Employed",
      location: "Tangerang Regency",
      type: "Full-Time",
      achievements: [
        "Developed web apps such as Warehouse System, Decision Support System, Point of Sales, Undergraduate Thesis Project and others based on clients needs"
      ],
      tech: ["JavaScript", "PHP", "MySQL"]
    }
  ]
};
