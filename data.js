/*
 * ALL portfolio content lives here. Edit this file, not index.html.
 * To add a new system: copy one object in `systems` and change it.
 * Every `tech` name in a system should also appear in `stack` so the
 * "click a technology → see where it's used" filter works.
 */
window.PORTFOLIO = {
  name: "Aditya Kumar",            // TODO: confirm your name
  handle: "adi407",
  role: "Full-Stack Engineer & AI Automation Consultant",
  roles: ["Full-Stack Engineering Leader", "AI Implementation Consultant", "Automation Engineer", "SaaS Platform Architect"],
  tagline: "8+ years building enterprise software. Now I also help businesses put AI and automation to work.",
  intro:
    "Full-stack engineer (Java, Spring Boot, Angular, Node.js) with 8+ years across finance, healthcare, " +
    "government and geospatial platforms, at EY, Infosys for Vanguard, and MapmyIndia. On my own I've built " +
    "13 complete systems, from a multi-venue SaaS to AI transcription and RAG platforms. Open to full-time " +
    "roles and to freelance AI and automation projects.",
  location: "Delhi, India",
  available: true,
  availability: "Open to full-time roles & freelance AI projects",
  links: {
    github: "https://github.com/adi407",
    linkedin: "https://www.linkedin.com/in/aditya-kumar-4806b6127",
    email: "adityakumar20111@gmail.com",
    resume: "",                      // TODO: e.g. "resume.pdf" (put the file next to index.html)
  },

  /* Shown as the big numbers under the hero. Keep them true. */
  stats: [
    { value: "8+", label: "years in software engineering" },
    { value: "13", label: "end-to-end systems built" },
    { value: "3", label: "live in production" },
    { value: "4", label: "industries: finance, health, gov, geo" },
  ],

  /* About — shown beside key facts */
  about: {
    paragraphs: [
      "I've spent 8+ years building software that large organisations depend on: a national tribunal " +
      "digitisation platform for the Ministry of Finance at EY, wealth-platform modules for Vanguard at Infosys, " +
      "a hospital management system for Mankind Pharma, and mapping and live-tracking services at MapmyIndia.",
      "Outside work I build complete products end to end. ClubManager runs real venues. Other systems transcribe " +
      "multilingual calls, answer questions from legal documents, reply to customers on WhatsApp and publish " +
      "content on their own. That's the experience I bring to clients: AI that's wired into real workflows, " +
      "with the engineering discipline to keep it running.",
    ],
    facts: [
      ["Based in", "Delhi, India (remote-friendly)"],
      ["Experience", "8+ years · EY, Infosys, MapmyIndia"],
      ["Core stack", "Java · Spring Boot · Angular · Node.js · Python"],
      ["AI work", "RAG, LLM agents, speech-to-text, automation"],
      ["Open to", "Full-time roles · Freelance projects"],
    ],
  },

  /* Freelance services — each one points at systems that prove it (ids from `systems`) */
  services: [
    {
      icon: "chat",
      title: "AI assistants on your own data",
      pitch: "Chatbots that answer from your documents, policies or product data, with sources, not guesses.",
      deliverables: ["RAG over PDFs, scans and databases", "Access control and audit trail", "Web or WhatsApp front end"],
      proof: ["legal-ai", "efiling", "expert-network"],
    },
    {
      icon: "flow",
      title: "WhatsApp & workflow automation",
      pitch: "Capture leads, book appointments and answer customers around the clock, then hand off to a human when it matters.",
      deliverables: ["WhatsApp Cloud API bots", "Lead capture and appointment booking", "CRM, sheets and email integration"],
      proof: ["autolead", "clubmanager"],
    },
    {
      icon: "spark",
      title: "AI content & marketing automation",
      pitch: "Pipelines that research, write, voice, edit and publish (reels, SEO fixes, ad videos) with approval steps built in.",
      deliverables: ["Automatic video and reel generation", "SEO audit-and-fix loops", "Scheduled publishing with human review"],
      proof: ["storyteller", "seo-platform", "clubmanager"],
    },
    {
      icon: "wave",
      title: "Voice, transcription & meeting AI",
      pitch: "Accurate transcripts and summaries for calls and meetings, including mixed Hindi-English speech.",
      deliverables: ["Whisper-based transcription", "Speaker-aware transcripts", "LLM summaries and action items"],
      proof: ["expert-network"],
    },
    {
      icon: "plug",
      title: "Add AI to your existing software",
      pitch: "Bring LLM features into your current Java, Angular or Node app safely, without a rewrite.",
      deliverables: ["LLM/embedding service integration", "Cost caching and rate limiting", "Evaluation and monitoring"],
      proof: ["fastcache", "expert-network", "gainr"],
    },
    {
      icon: "box",
      title: "MVPs & internal tools",
      pitch: "From idea to a working, deployed product: multi-tenant SaaS, dashboards, portals, payments.",
      deliverables: ["Full-stack build and deployment", "Auth, roles, billing, reports", "CI/CD and handover docs"],
      proof: ["clubmanager", "gainr", "sms"],
    },
  ],

  /* How a freelance engagement runs */
  process: [
    ["Discovery call", "A free 30-minute call to understand the workflow, the data and what success looks like."],
    ["Prototype", "A small working proof on your real data, usually within 1-2 weeks, so you see the value before you commit."],
    ["Build & integrate", "Production build wired into your tools, with access control, logging and cost limits."],
    ["Handover & support", "Documentation, training and optional ongoing support and improvements."],
  ],

  systems: [
    {
      id: "clubmanager",
      categories: ["saas", "automation"],
      featured: true,
      name: "ClubManager",
      kind: "Multi-tenant SaaS · Venue OS",
      status: "Live",
      year: "2026",
      image: "assets/clubmanager.jpg",
      tagline: "One platform that runs snooker clubs, hotels, cafés, gyms, shops and more.",
      summary:
        "Started as billing software for snooker and pool clubs and grew into a multi-venue operating system. " +
        "A single tenant-scoped codebase adapts its tabs, copy and workflows to the venue type, and runs " +
        "table sessions, hotel stays, café orders and KOTs, inventory, GST invoicing and payments. Around " +
        "it sit an IoT gateway that switches real lights by booking, a self-checking SEO engine and an " +
        "automated video-ad factory. Live at clubmanager.store.",
      highlights: [
        "Multi-tenant by design: every row scoped by club_id, with per-club feature flags and venue profiles driving the UI",
        "Live table billing (per-minute, block and leniency rates), split payments by frame or player, credit ledgers and tabs",
        "Hotel PMS: reservations, transactional checkout with atomic invoice numbering, housekeeping and room-QR room service",
        "Razorpay payment links with HMAC-verified webhooks, plus GST/CGST/SGST invoices, e-way bills and bank reconciliation",
        "Smart switches: an on-site edge gateway drives LAN relays over MQTT (EMQX), so the cloud never reaches the customer network (no SSRF)",
        "Public customer portal with category-first discovery, bookings, waitlists and reviews, on a separate auth system from staff",
        "SEO loop engine (21 modules): discover → analyze → plan → change → verify, with an independent checker before a human merges",
        "Ad engine: drives real app workflows headlessly, captures deterministic 1080×1920 video, then adds Remotion compositions and TTS voiceover",
        "OCR (Tesseract), barcode and QR scanning, i18n, web push, PDF and Excel export",
        "79 architecture decision records; CI runs contract, integration and SEO test suites before every deploy",
      ],
      metrics: [
        { value: "66", label: "API controllers" },
        { value: "217", label: "DB migrations" },
        { value: "35", label: "app sections" },
        { value: "79", label: "ADRs written" },
      ],
      flow: [
        ["Venue admin SPA", "Customer portal"],
        ["Nginx"],
        ["Express API", "Sidecars: SEO · Content · Ads"],
        ["PostgreSQL", "Razorpay", "Gemini"],
        ["Edge gateway (on-site)", "MQTT relays"],
      ],
      tech: [
        "Node.js", "Express", "React", "Vite", "Tailwind CSS", "React Query", "Zustand", "PostgreSQL", "JWT",
        "Razorpay", "MQTT / EMQX", "WebSockets", "Gemini", "Remotion", "FFmpeg", "Tesseract OCR", "TypeScript",
        "Python", "Docker", "Nginx", "GitHub Actions",
      ],
      repo: "",
      private: true,
      live: "https://clubmanager.store",
    },
    {
      id: "expert-network",
      categories: ["ai", "saas"],
      featured: true,
      name: "AI Expert Network Platform",
      client: "Built for a B2B expert-network firm (name withheld)",
      kind: "B2B Platform · Applied AI",
      status: "Production",
      year: "2026",
      tagline: "AI-matched experts, built-in video calls and live multilingual transcription.",
      summary:
        "A B2B expert-network platform that takes a client request all the way through to a paid call. " +
        "Experts are matched by semantic search, contacted through tracked outreach, signed up with NDAs, " +
        "and met over in-app WebRTC video. Every call is transcribed and summarised. Three services " +
        "(Angular, Spring Boot and a Python AI service) share one PostgreSQL database with pgvector.",
      highlights: [
        "Semantic expert matching: sentence-transformer embeddings in pgvector rank experts against each client request",
        "LLM services for profile enrichment, NDA generation and call summarisation, plus CV parsing",
        "In-app video calls on LiveKit: magic-link joins, a waiting room with host admit and transfer, screen share, live rename",
        "Per-speaker transcription: each browser records its own mic in 30 s chunks, sent to Whisper large-v3 on Modal GPUs with a CPU fallback",
        "Cut word error rate from 11.8% to 7.7% (Hindi–English mixed speech from 90% to 8.6%) using a built evaluation kit",
        "Full pipeline: requests, outreach, scheduling, compliance, finance and invoicing, with role-based access for Admin, Ops and Client",
        "Angular 21 with NgRx and Signals; 16 Cypress end-to-end specs; Flyway migrations; scheduled cleanup jobs",
      ],
      metrics: [
        { value: "7.7%", label: "WER (from 11.8%)" },
        { value: "1.24s", label: "per chunk on L4 GPU" },
        { value: "3", label: "services" },
        { value: "16", label: "Cypress E2E specs" },
      ],
      flow: [
        ["Angular 21 SPA", "LiveKit SDK"],
        ["Spring Boot API", "LiveKit server (WebRTC)"],
        ["FastAPI AI service", "Whisper on Modal"],
        ["PostgreSQL + pgvector", "Redis"],
      ],
      tech: [
        "Angular", "NgRx", "TypeScript", "SCSS", "Java", "Spring Boot", "Spring Security", "JWT", "JPA / Hibernate",
        "Flyway", "Python", "FastAPI", "pgvector", "Embeddings", "OpenAI", "Gemini", "Whisper", "Modal", "LiveKit / WebRTC",
        "PostgreSQL", "Redis", "Cypress", "Docker", "GitHub Actions",
      ],
      repo: "",
      private: true,
      live: "",
    },
    {
      id: "fastcache",
      categories: ["infra", "ai"],
      name: "FastCache",
      kind: "Infrastructure · Library",
      status: "Pre-release",
      year: "2026",
      tagline: "Zero-infrastructure off-heap cache for AI workloads.",
      summary:
        "Caching an LLM response should be a one-line change. FastCache is an in-memory, sharded, off-heap " +
        "key-value store with two front doors: a Spring Boot annotation for JVM services and a Python decorator " +
        "that boots and manages its own JVM sidecar. No Redis, no Docker, no connection string.",
      highlights: [
        "Off-heap storage keeps 20–50 MB payloads out of the JVM heap — no GC pauses as the cache grows",
        "Single-flight stampede protection: 500 concurrent callers → 1 recomputation",
        "Python ↔ Java sidecar with orphan watchdog — kill -9 the parent and all memory is released",
        "Memory guard sheds writes at a budget instead of OOM-ing; reads keep serving",
        "Built-in cost console + 40 Prometheus metric families, Grafana panels and alert rules",
        "Murmur3 shard routing, tested under 5,000 concurrent virtual threads",
      ],
      metrics: [
        { value: "99.3%", label: "hit rate on demo workload" },
        { value: "195", label: "tests (125 Java + 70 Py)" },
        { value: "1.85s", label: "cold sidecar boot" },
        { value: "36ms", label: "20 MB round trip" },
      ],
      flow: [
        ["Python @fastcache", "Spring @FastCache"],
        ["Local socket protocol", "Spring AOP aspect"],
        ["Sharded storage engine", "Refresh coordinator"],
        ["Off-heap allocator", "Memory guard"],
        ["Console :8081", "Prometheus /metrics"],
      ],
      tech: ["Java", "Virtual Threads", "Spring Boot", "Python", "Prometheus", "Grafana", "GitHub Actions", "Maven"],
      repo: "https://github.com/adi407/fast_cache",
      live: "",
    },
    {
      id: "sms",
      categories: ["saas"],
      name: "School Management System",
      kind: "Multi-tenant SaaS",
      status: "Live",
      year: "2026",
      tagline: "End-to-end school ERP with portals for admins, teachers, students and parents.",
      summary:
        "A full school platform covering academics, attendance, exams, fees, payroll, library and communication — " +
        "with separate portals per role, a super-admin layer that switches modules on per school, and a CI/CD " +
        "pipeline that builds and deploys to schoolmanager.live.",
      highlights: [
        "30+ REST modules: attendance, timetable, exams, homework, fees, payroll, library, PTM, wellness and more",
        "Role-based portals for super-admin, school admin, teacher, student and parent",
        "Per-school feature flags enforced with a custom @RequiresFeature AOP annotation",
        "Async work over RabbitMQ, sessions and caching in Redis, files in S3-compatible MinIO",
        "PDF and Excel report generation (iText, Apache POI), email notifications, WebSockets",
        "Multi-module Maven backend (api / core / auth / batch), Flyway migrations, OpenAPI docs",
        "GitHub Actions pipeline: build JAR + Angular, deploy over SSH, seed data, health-check",
      ],
      metrics: [
        { value: "30+", label: "API modules" },
        { value: "5", label: "user roles / portals" },
        { value: "7", label: "containerised services" },
        { value: "CI/CD", label: "auto-deploy on push" },
      ],
      flow: [
        ["Angular SPA"],
        ["Nginx"],
        ["Spring Boot API", "Batch workers"],
        ["PostgreSQL", "Redis", "RabbitMQ", "MinIO (S3)"],
      ],
      tech: [
        "Java", "Spring Boot", "Spring Security", "JWT", "JPA / Hibernate", "Flyway", "Angular", "TypeScript",
        "SCSS", "PostgreSQL", "Redis", "RabbitMQ", "MinIO / S3", "WebSockets", "Docker", "Nginx", "GitHub Actions",
        "OpenAPI", "Maven", "Python",
      ],
      repo: "https://github.com/adi407/school_management_system",
      live: "https://schoolmanager.live",
    },
    {
      id: "seo-platform",
      name: "Autonomous SEO Engineering Platform",
      kind: "SaaS · AI agents",
      status: "In development",
      year: "2026",
      tagline: "A SaaS that finds SEO problems, fixes them in code and opens the pull request.",
      summary:
        "This isn't an SEO chatbot. It runs a continuous, auditable loop over a customer's website: crawl it, " +
        "join the findings with Google Search Console data, rank the opportunities, then let AI planner, maker " +
        "and reviewer agents write a bounded fix that a separate checker verifies before it opens a GitHub " +
        "pull request for a human to approve.",
      highlights: [
        "Loop: discover → analyze → prioritize → plan → change → verify → PR → human review → deploy → measure → learn",
        "Deterministic crawler and scanner, plus an opportunity engine that scores findings against real search performance",
        "AI analyst, planner, maker and reviewer roles; the agent that writes a change is never the one that approves it",
        "GitHub App integration: locates a page's source, edits it, commits to a branch and opens the pull request",
        "Multi-tenant SaaS core: organizations, projects, website ownership verification, append-only audit trail",
        "Modular monolith on purpose (no Kafka or Kubernetes); Redis holds locks and rate limits but never source data",
        "Dev profile boots a real in-process PostgreSQL, so the only requirements are Java 21 and Git",
      ],
      metrics: [
        { value: "12", label: "backend modules" },
        { value: "318", label: "Java source files" },
        { value: "44", label: "test classes" },
        { value: "8 / 10", label: "roadmap phases done" },
      ],
      flow: [
        ["Angular SPA"],
        ["Spring Boot modular monolith"],
        ["Crawler", "Loop engine", "AI agents"],
        ["PostgreSQL", "Redis (locks)"],
        ["Search Console", "GitHub App", "LLM"],
      ],
      tech: ["Java", "Spring Boot", "Spring Security", "JPA / Hibernate", "Flyway", "Angular", "TypeScript", "SCSS", "PostgreSQL", "Redis", "LLM Agents", "GitHub API", "Google Search Console API", "Docker", "Nginx", "GitHub Actions", "OpenAPI"],
      categories: ["ai", "saas"],
      repo: "", private: true, live: "",
    },
    {
      id: "legal-ai",
      name: "Legal Document Analyzer",
      kind: "Applied AI · RAG",
      status: "Prototype",
      year: "2026",
      tagline: "Upload tribunal case files, then search, summarise and chat with them.",
      summary:
        "A document-intelligence service for legal teams. Scanned filings are OCR'd, chunked and embedded into " +
        "a vector store, so users can ask questions in natural language and get answers grounded in the case " +
        "record. It also produces structured summaries of long judgments and petitions.",
      highlights: [
        "OCR extraction pipeline for scanned PDFs, then chunking and embeddings (text-embedding-3-large)",
        "Retrieval-augmented chat over Qdrant, with answers grounded in the uploaded documents",
        "Prompted summarisation of long legal documents",
        "Files in MinIO object storage, with a migration script to move existing uploads",
        "FastAPI backend with JWT auth and admin-managed users; Angular frontend; Docker Compose stack",
        "Pluggable LLM, embedding and OCR engines behind configurable service URLs",
      ],
      metrics: [
        { value: "RAG", label: "grounded Q&A" },
        { value: "3", label: "pluggable engines" },
        { value: "OCR", label: "for scanned filings" },
      ],
      flow: [
        ["Angular SPA"],
        ["FastAPI"],
        ["OCR engine", "Embeddings", "LLM"],
        ["Qdrant", "MinIO", "PostgreSQL"],
      ],
      tech: ["Python", "FastAPI", "RAG", "Embeddings", "Qdrant", "OpenAI", "OCR", "MinIO / S3", "PostgreSQL", "JWT", "Angular", "TypeScript", "SCSS", "Docker", "Nginx"],
      categories: ["ai"],
      repo: "", private: true, live: "",
    },
    {
      id: "efiling",
      name: "e-Filing Case Management System",
      kind: "GovTech · Client project",
      status: "Client project",
      year: "2026",
      tagline: "Online case filing and management for a government revenue department, with an AI assistant.",
      client: "Built for a government department (name withheld)",
      summary:
        "A three-part monorepo: an Angular 17 portal for filing and tracking cases, a Spring Boot API that owns " +
        "authentication and the case lifecycle, and a Python AI service (FastAPI + LangGraph) for an " +
        "assistant chatbot. Spring proxies every chatbot request, so the AI service is never exposed directly.",
      highlights: [
        "Case filing, document upload, registration and tracking workflows across 23 API controllers",
        "66 Angular components with Tailwind, including server-side rendering support",
        "LangGraph agent orchestrator for the case-assistant chatbot",
        "Service-to-service trust: Spring forwards the verified user and a service key to the AI layer",
        "JWT-secured API on PostgreSQL",
      ],
      metrics: [
        { value: "23", label: "API controllers" },
        { value: "66", label: "UI components" },
        { value: "3", label: "services" },
      ],
      flow: [
        ["Angular 17 portal"],
        ["Spring Boot API (JWT)"],
        ["FastAPI + LangGraph"],
        ["PostgreSQL", "Document store"],
      ],
      tech: ["Angular", "TypeScript", "Tailwind CSS", "Java", "Spring Boot", "Spring Security", "JWT", "Python", "FastAPI", "LangGraph", "LLM Agents", "PostgreSQL", "Docker"],
      categories: ["ai", "saas"],
      repo: "", private: true, live: "",
    },
    {
      id: "autolead",
      name: "autoLead AI",
      kind: "SaaS · WhatsApp automation",
      status: "Beta",
      year: "2026",
      tagline: "No-code WhatsApp chatbots that capture leads and book appointments for businesses.",
      summary:
        "Businesses connect their WhatsApp number through Meta's Embedded Signup and design conversation flows " +
        "from buttons, lists and text steps. Incoming webhook messages then drive a dynamic flow engine that " +
        "handles product enquiries, captures leads and books appointment slots. It's multi-tenant: one backend " +
        "serves every client's number.",
      highlights: [
        "Hexagonal (ports and adapters) architecture: the domain is pure Java records with no Spring or JPA",
        "Dynamic flow engine supporting TEXT, BUTTON and LIST steps, with per-phone conversation sessions",
        "Meta WhatsApp Cloud API webhooks, Embedded Signup onboarding and system-user tokens",
        "Appointment slots and booking, a product catalogue, and a support desk",
        "Angular 21 admin panel built on Signals; Playwright end-to-end tests; CI on GitHub Actions",
      ],
      metrics: [
        { value: "10", label: "API controllers" },
        { value: "3", label: "step types" },
        { value: "Hexagonal", label: "architecture" },
      ],
      flow: [
        ["WhatsApp user", "Admin panel"],
        ["Meta webhooks", "REST API"],
        ["Flow engine (domain)"],
        ["PostgreSQL"],
      ],
      tech: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA / Hibernate", "Hexagonal Architecture", "WhatsApp Cloud API", "Angular", "TypeScript", "Playwright", "PostgreSQL", "GitHub Actions"],
      categories: ["saas", "automation"],
      repo: "", private: true, live: "",
    },
    {
      id: "gainr",
      name: "GAINR",
      kind: "SaaS · Fitness coaching",
      status: "Closed beta",
      year: "2026",
      tagline: "A coach-first fitness platform with AI food scanning.",
      summary:
        "Coaches manage clients, workout plans, nutrition, body measurements and progress photos in one place, " +
        "and clients check in from their side. A photo of a meal is turned into a protein log by Gemini Vision, " +
        "with a per-client daily limit to keep costs bounded.",
      highlights: [
        "Coach and client roles; invites and password reset over email (AWS SES)",
        "Workout plans, sessions, an exercise library, check-ins, messaging and notifications",
        "AI food scan with Gemini Vision, run server-side and rate-limited per client per day",
        "Progress photos in S3; measurements and nutrition tracking",
        "Production setup on AWS EC2 with Docker Compose (Postgres, API, Nginx); smoke-test and beta checklists",
      ],
      metrics: [
        { value: "14", label: "API controllers" },
        { value: "2", label: "roles" },
        { value: "AWS", label: "EC2 · S3 · SES" },
      ],
      flow: [
        ["Angular 21 SPA"],
        ["Nginx"],
        ["Spring Boot API", "Gemini Vision"],
        ["PostgreSQL", "S3 photos"],
      ],
      tech: ["Angular", "TypeScript", "Tailwind CSS", "Angular Material", "Java", "Spring Boot", "JWT", "Flyway", "PostgreSQL", "Gemini", "AWS", "MinIO / S3", "Docker", "Nginx", "GitHub Actions"],
      categories: ["saas", "ai"],
      repo: "", private: true, live: "",
    },
    {
      id: "forecasting",
      name: "RevOps Forecasting Engine",
      kind: "Data · ML",
      status: "In development",
      year: "2026",
      tagline: "Sales pipeline forecasting from CRM extracts, which falls back to a simpler model when the data is too thin.",
      summary:
        "Forecasting over Snowflake and Salesforce pipeline extracts in three tiers: pooled trailing win rates for " +
        "rep-level calls, Holt-Winters time series for quarterly top-down views, and per-deal XGBoost win " +
        "probabilities. A data contract validates every extract before anything is computed.",
      highlights: [
        "Fallback ladder: seasonal Holt-Winters → trend → level → drift, depending on how much history the data has",
        "Win rates pooled across periods rather than averaged, so a quiet quarter can't skew the result",
        "Data-contract CLI that checks a real extract before any wiring",
        "Offline backtesting via `revops backtest`",
        "Pure core library, with a FastAPI service and Alembic migrations on top, and a Next.js dashboard",
      ],
      metrics: [
        { value: "3", label: "forecast tiers" },
        { value: "4-step", label: "fallback ladder" },
        { value: "Backtest", label: "validated offline" },
      ],
      flow: [
        ["Next.js dashboard"],
        ["FastAPI"],
        ["revops_core: contract · metrics · forecast"],
        ["SQL store", "CRM extracts"],
      ],
      tech: ["Python", "FastAPI", "statsmodels", "XGBoost", "Alembic", "Next.js", "TypeScript", "Docker"],
      categories: ["ai"],
      repo: "", private: true, live: "",
    },
    {
      id: "games",
      name: "Real-time Game Platform",
      kind: "Real-time · Multiplayer",
      status: "Prototype",
      year: "2026",
      tagline: "A daily number-bidding game and 4-player online Ludo, with wallets and automatic payouts.",
      summary:
        "A Spring Boot platform hosting two games. Number bidding runs on daily rounds managed by scheduled jobs. " +
        "Ludo is played live over STOMP WebSockets, with server-authoritative turns, timeouts for idle players " +
        "and automatic refunds for abandoned rooms.",
      highlights: [
        "Live Ludo over STOMP/WebSocket, with JWT authentication on the socket handshake",
        "5 scheduled jobs: daily round creation, round lifecycle, winner declaration and payout, turn timeouts, room abandonment",
        "Wallet with bid history and automatic payouts; an admin dashboard",
        "Angular 21 SPA with hydration; Spring Boot 3.5 on PostgreSQL",
      ],
      metrics: [
        { value: "2", label: "games" },
        { value: "5", label: "scheduled jobs" },
        { value: "4×4", label: "rooms × players" },
      ],
      flow: [
        ["Angular 21 SPA"],
        ["REST /api", "STOMP /ws"],
        ["Spring Boot + schedulers"],
        ["PostgreSQL"],
      ],
      tech: ["Java", "Spring Boot", "WebSockets", "STOMP", "JWT", "JPA / Hibernate", "Angular", "TypeScript", "PostgreSQL"],
      categories: ["saas"],
      repo: "", private: true, live: "",
    },
    {
      id: "storyteller",
      name: "storyTeller",
      kind: "Automation · AI content",
      status: "Running daily",
      year: "2026",
      tagline: "A pipeline that writes, voices, edits and posts an Instagram Reel every day on its own.",
      summary:
        "Each morning it takes the top Google Trends topic, pulls real news articles as the source of facts, " +
        "writes a fact-checked script with an LLM, voices it with TTS, cuts stock footage to each line of narration, " +
        "mixes in music and posts the reel. It also drafts replies to comments for approval and turns audience " +
        "questions into weekly answer reels.",
      highlights: [
        "Google Trends → news articles → Groq script (numbers fact-checked, hook, caption) → Gemini TTS voice",
        "Pexels clip per narration beat, music ducked under the voice to −14 LUFS, FFmpeg transitions, cover frame",
        "Instagram upload plus first comment; comment replies drafted in a persona voice and sent only after approval",
        "Telegram bot to trigger it from a phone; Windows Task Scheduler for daily runs; local Kokoro TTS fallback",
      ],
      metrics: [
        { value: "Daily", label: "fully automatic" },
        { value: "8", label: "pipeline stages" },
        { value: "0", label: "manual edits" },
      ],
      flow: [
        ["Google Trends", "News"],
        ["Groq LLM script"],
        ["Gemini TTS", "Pexels clips", "Music"],
        ["FFmpeg render"],
        ["Instagram", "Telegram bot"],
      ],
      tech: ["Python", "Groq", "Gemini", "FFmpeg", "Instagram API", "Telegram Bot API"],
      categories: ["automation", "ai"],
      repo: "", private: true, live: "",
    },
    {
      id: "form-engine",
      categories: ["saas"],
      name: "Dynamic Form Engine",
      kind: "Form SaaS · Builder",
      status: "In development",
      year: "2026",
      tagline: "Drag-and-drop form builder and renderer you can embed anywhere.",
      summary:
        "Build forms visually, configure validation and conditional logic, then export them as a JSON schema, " +
        "shareable URL, iframe embed or Angular snippet. NCLT tribunal case filing is the reference production form.",
      highlights: [
        "32 field types across Basic, Choice, Date/Time, Upload, Advanced and Layout categories",
        "Conditional show/hide logic and API-driven dependent dropdowns (Country → State → City)",
        "Live preview in desktop / tablet / mobile frames; per-field column widths",
        "Per-form submit config: custom endpoint, HTTP method and headers",
        "JWT auth with ADMIN / USER roles, guarded routes, Flyway-managed schema",
        "Nginx deploy configs and Docker Compose for local PostgreSQL",
      ],
      metrics: [
        { value: "32", label: "field types" },
        { value: "4", label: "export formats" },
        { value: "3", label: "preview devices" },
        { value: "2", label: "roles" },
      ],
      flow: [
        ["Builder UI", "Runtime renderer"],
        ["Schema + state engine"],
        ["Spring Boot API"],
        ["PostgreSQL", "Masters DB"],
      ],
      tech: ["Angular", "TypeScript", "SCSS", "Java", "Spring Boot", "Spring Security", "JWT", "JPA / Hibernate", "Flyway", "PostgreSQL", "Docker", "Nginx", "Maven"],
      repo: "https://github.com/adi407/Form-Engine",
      live: "",
    },
  ],

  /* Smaller work / contributions. Shown as compact cards. */
  contributions: [
    {
      name: "RS International — agency website",
      note: "Contributed to a React + Vite marketing site for a recruitment agency (video hero, animated metrics, inquiry form).",
      tech: ["React", "Vite", "JavaScript"],
      repo: "https://github.com/adi407/RS-INA",
      live: "https://rs-ina.vercel.app",
    },
    {
      name: "e-Kart: multi-vendor storefront",
      note: "Angular 17 e-commerce frontend with SSR, separate user and vendor areas, route guards and Tailwind styling.",
      tech: ["Angular", "TypeScript", "Tailwind CSS"],
      repo: "",
      live: "",
    },
  ],

  /* Tech stack. level: "core" | "working" | "exposure" (no fake percentages). */
  stack: [
    { group: "Backend", items: [
      ["Java", "core"], ["Spring Boot", "core"], ["Spring Security", "core"], ["Microservices", "core"], ["GraphQL", "core"], ["JWT", "core"],
      ["JPA / Hibernate", "core"], ["Node.js", "core"], ["Express", "core"], ["Python", "core"],
      ["FastAPI", "working"], ["Virtual Threads", "working"], ["OpenAPI", "working"], ["Maven", "working"],
    ]},
    { group: "Frontend", items: [
      ["Angular", "core"], ["React", "core"], ["TypeScript", "core"], ["JavaScript", "core"], ["NgRx", "working"],
      ["React Query", "working"], ["Zustand", "working"], ["Tailwind CSS", "working"], ["Angular Material", "working"],
      ["Next.js", "exposure"], ["SCSS", "working"], ["Vite", "working"],
    ]},
    { group: "AI & ML", items: [
      ["LLM Agents", "working"], ["RAG", "working"], ["Embeddings", "working"], ["LangGraph", "working"],
      ["pgvector", "working"], ["Qdrant", "working"], ["Whisper", "working"], ["OpenAI", "working"],
      ["Gemini", "working"], ["Groq", "working"], ["OCR", "working"], ["statsmodels", "exposure"],
      ["XGBoost", "exposure"], ["Modal", "exposure"],
    ]},
    { group: "Media & Real-time", items: [
      ["LiveKit / WebRTC", "working"], ["WebSockets", "working"], ["STOMP", "working"], ["Remotion", "working"],
      ["FFmpeg", "working"], ["Tesseract OCR", "exposure"], ["MQTT / EMQX", "exposure"],
    ]},
    { group: "Data & Messaging", items: [
      ["PostgreSQL", "core"], ["MySQL", "core"], ["MongoDB", "working"], ["Flyway", "core"], ["Redis", "working"], ["RabbitMQ", "working"],
      ["MinIO / S3", "working"], ["Alembic", "exposure"],
    ]},
    { group: "Cloud, DevOps & Testing", items: [
      ["Docker", "core"], ["Jenkins", "working"], ["JUnit / Mockito", "core"], ["Nginx", "working"], ["GitHub Actions", "working"], ["AWS", "working"],
      ["Prometheus", "working"], ["Grafana", "exposure"], ["Cypress", "working"], ["Playwright", "working"],
    ]},
    { group: "Integrations & APIs", items: [
      ["Razorpay", "working"], ["WhatsApp Cloud API", "working"], ["GitHub API", "working"],
      ["Google Search Console API", "working"], ["Instagram API", "working"], ["Telegram Bot API", "working"],
    ]},
  ],


  /* Optional — leave the arrays empty to hide these sections. */
  experience: [
    {
      role: "Consultant", org: "Ernst & Young India LLP", place: "Delhi", period: "May 2024 — Present",
      points: [
        "Lead full-stack engineering on a national tribunal digitisation platform under the Ministry of Finance (Java 17, Spring Boot, Angular 17)",
        "Designed scalable APIs and middleware with record-based DTOs, sealed class hierarchies and Node.js secure communication services",
        "Defined coding standards and Java 17 modernisation guidelines across the team",
        "Mentor junior engineers through code reviews, pair programming and technical workshops",
      ],
    },
    {
      role: "Technical Analyst", org: "Infosys (client: Vanguard)", place: "Gurugram", period: "Jun 2022 — Apr 2024",
      points: [
        "Engineered financial modules for Vanguard's next-generation wealth platform using Java, GraphQL and custom BFF layers, cutting response latency",
        "Improved throughput and reliability through backend optimisation and high-coverage unit tests",
        "Took part in enterprise architecture discussions and cross-team technical initiatives",
      ],
    },
    {
      role: "Senior Software Engineer", org: "Uneecops Technologies (client: Mankind Pharma)", place: "Noida", period: "Mar 2021 — Jun 2022",
      points: [
        "Led development of DRONa (a hospital management system) and CIO Portal (a low-code form builder) on Angular and Spring Boot",
        "Designed JSON-schema-driven dynamic UIs and secure eSign workflows (CDAC)",
        "Drove frontend architecture for accessibility (WCAG), responsiveness and modular components",
      ],
    },
    {
      role: "Software Engineer", org: "C.E. Info Systems (MapmyIndia)", place: "Delhi", period: "Oct 2018 — Mar 2021",
      points: [
        "Built full-stack modules for geospatial platforms with Angular, Spring MVC and microservices",
        "Implemented location-intelligence APIs, live-tracking services and Jasper Reports dashboards for MGIS and Digital Sky",
        "Delivered high-availability mapping solutions used across India",
      ],
    },
  ],
  education: [
    { degree: "B.Tech, Computer Science & Engineering", org: "Lovely Professional University", period: "2015 — 2019" },
  ],
  certifications: [
    { name: "Spring Framework Certification", org: "VMware", status: "" },
    { name: "Oracle Certified Java SE 17 Developer", org: "Oracle", status: "In progress" },
  ],
};
