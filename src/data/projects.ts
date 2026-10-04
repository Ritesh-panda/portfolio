import socioopsImg from '../assets/Minimalist Residential Architecture Banner.png'
import jeevanrekhaImg from '../assets/Multilingual AI Healthcare Wave Background.png'
import semanticSearchImg from '../assets/Minimalist AI Network Data Visualization.png'
import ciscoImg from '../assets/cisco.png'
import bainImg from '../assets/bain.png'

export interface Project {
  id: string
  number: string
  title: string
  subtitle: string
  tagline: string
  description: string
  highlight: string
  image: string
  gradientOverlay: string
  tags: string[]
  stack: string[]
  liveUrl?: string
  githubUrl: string
  accentColor: string
  category?: 'Engineering Systems' | 'Case Studies & Analysis'
  fullDetails: {
    whatIBuilt: string[]
    architecture: string
    keyDecisions?: string[]
    metrics?: { label: string; value: string }[]
  }
}

export const SELECTED_PROJECTS: Project[] = [
  {
    id: 'socioops',
    number: '01',
    title: 'SocioOps',
    subtitle: 'Residential Operations Platform',
    tagline: 'Full-stack · Operations · Automation',
    highlight: '153 automated assertions · RBAC · SLA Engine · Audit Trail',
    image: socioopsImg,
    gradientOverlay: 'from-black/75 via-black/25 via-45% to-transparent',
    description:
      'Full-stack RWA platform for maintenance tickets, SLA tracking, resident approvals, audit trails, notices, and automated notifications.',
    tags: ['React', 'Node.js', 'Express', 'SQLite', 'JWT', 'REST API'],
    stack: ['React', 'Vite', 'Node.js', 'Express', 'SQLite', 'JWT', 'bcrypt', 'Nodemailer', 'Render', 'Vercel'],
    liveUrl: 'https://frontend-ashen-psi-35.vercel.app',
    githubUrl: 'https://github.com/Ritesh-panda/society-maintenance-tracker',
    accentColor: '#0066CC',
    category: 'Engineering Systems',
    fullDetails: {
      whatIBuilt: [
        'Role-based access control (RBAC) for residents and RWA administrators using JWT authentication and bcrypt password hashing.',
        'End-to-end maintenance ticket lifecycle with priorities, categories, room-level metadata, preferred service slots, and photo uploads.',
        'Immutable chronological audit trail recording every status transition, actor, timestamp, priority change, and administrative remark.',
        'Dynamic SLA engine that calculates overdue tickets in real time and allows administrators to configure SLA thresholds without restarting the server.',
        'Resident approval workflow preventing unverified residents from accessing protected society operations.',
        'Digital notice board with pinned announcements, expiry scheduling, and mass notification support.',
        'Transactional email outbox for ticket creation, status changes, administrative remarks, and community broadcasts.',
        'Security controls including JWT authorization, role guards, SQL injection protection, route sanitization, and magic-byte file validation.',
        'Admin operations dashboard with live KPIs, workload distribution, SLA-overdue tracking, and multi-parameter filtering.',
        '153 automated assertions covering authentication, authorization, ticket workflows, audit history, uploads, SLA calculations, notices, email events, and security defenses.',
      ],
      architecture:
        'Multi-tier REST architecture with relational persistence (SQLite with WAL for lightweight deployment) and service-layer SLA/email processing. Designed to support migration to PostgreSQL and S3/R2 as usage scales.',
      metrics: [
        { label: 'Automated Assertions', value: '153 Tests' },
        { label: 'Incident Automation', value: '85%' },
        { label: 'Audit Trail', value: 'Immutable' },
        { label: 'Architecture', value: 'Multi-tier REST' },
      ],
    },
  },
  {
    id: 'jeevanrekha',
    number: '02',
    title: 'JeevanRekha',
    subtitle: 'Multilingual AI Healthcare Assistant',
    tagline: 'Voice · WhatsApp · 8+ Languages',
    highlight: '8+ Languages · Voice + WhatsApp · Emergency Detection',
    image: jeevanrekhaImg,
    gradientOverlay: 'from-black/70 via-black/20 via-45% to-transparent',
    description:
      'Multilingual AI healthcare assistant delivering voice and WhatsApp-based guidance across 8+ Indian languages with emergency detection and hospital discovery.',
    tags: ['Gemini 2.5 Flash', 'Groq', 'FastAPI', 'React', 'Python', 'WhatsApp'],
    stack: ['Gemini 2.5 Flash', 'Groq Llama 3.3', 'Python', 'FastAPI', 'React', 'WhatsApp API', 'Google Places API'],
    liveUrl: 'https://jeevanrekha-voice.vercel.app',
    githubUrl: 'https://github.com/Ritesh-panda',
    accentColor: '#00A6A6',
    category: 'Engineering Systems',
    fullDetails: {
      whatIBuilt: [
        'Omnichannel AI assistant supporting both WhatsApp and real-time voice interaction through a unified intelligence layer.',
        '8+ Indian language support, enabling users to communicate in regional languages including Hindi, Telugu, Tamil, Bengali, Gujarati, Odia, and Assamese.',
        'Central AI orchestration pipeline for language detection, intent classification, service routing, response generation, and channel-specific formatting.',
        'Emergency-first detection system that identifies potentially life-threatening queries and immediately surfaces emergency guidance, the 108 helpline, and nearby hospitals.',
        'Real-time hospital discovery using Google Places API with OpenStreetMap fallback and automatic search-radius expansion.',
        'AI symptom triage designed to provide informational guidance while explicitly preventing diagnosis and prescription generation.',
        'Context-aware conversations using a rolling 20-turn session memory for multi-step health interactions.',
        'Model fallback architecture using Gemini 2.5 Flash as the primary model with Groq Llama 3.3 as a fallback for high availability.',
        'Low-bandwidth WhatsApp channel designed to remain accessible on 2G/3G networks without requiring application installation.',
      ],
      architecture:
        'One AI Brain, Multiple Access Points: WhatsApp Flow (User → Language Detection → Intent Routing → AI Response → WhatsApp) & Voice Flow (Voice Input → Gemini Live Audio → Structured Data → Voice Response).',
      metrics: [
        { label: 'Indian Languages', value: '8+ Regional' },
        { label: 'Session Memory', value: '20 Turns' },
        { label: 'Safety Guardrails', value: 'No-Diagnosis Policy' },
        { label: 'Channel Fallback', value: 'Gemini + Groq' },
      ],
    },
  },
  {
    id: 'semantic-search',
    number: '03',
    title: 'Semantic Search Engine',
    subtitle: 'Low-Latency Semantic Retrieval Engine',
    tagline: 'FAISS · HNSW · 16.5K+ Documents',
    highlight: '~1–3 ms Cache Hits · 85–90% Candidate Reduction',
    image: semanticSearchImg,
    gradientOverlay: 'from-black/75 via-black/25 via-45% to-transparent',
    description:
      'Low-latency semantic search combining FAISS HNSW, GMM fuzzy clustering, and cluster-routed semantic caching across 16.6K documents.',
    tags: ['Python', 'FastAPI', 'FAISS', 'HNSW', 'GMM', 'Sentence-Transformers'],
    stack: ['Python', 'FastAPI', 'FAISS', 'HNSW', 'Sentence-Transformers', 'Scikit-learn', 'GMM', 'Redis'],
    githubUrl: 'https://github.com/Ritesh-panda',
    accentColor: '#5856D6',
    category: 'Engineering Systems',
    fullDetails: {
      whatIBuilt: [
        'Cluster-routed semantic cache that identifies semantically equivalent queries within their dominant topic cluster before performing a full vector search.',
        'FAISS HNSW vector retrieval using L2-normalized embeddings for cosine-similarity search.',
        'GMM fuzzy clustering with soft membership probabilities to model documents belonging to multiple semantic topics.',
        'Cluster-aware search pruning that reduces the candidate pool from ~16.6K documents to ~1–2K candidates.',
        'Semantic cache matching using cosine similarity with a configurable ≥0.85 threshold.',
        'LRU cache eviction for controlled in-memory cache usage and embedding-level caching.',
        'Real-time observability with P50/P95 latency, cache hit rate, QPM, and cluster traffic metrics.',
        'Offline indexing pipeline that cleans the corpus, generates 384-dimensional embeddings, trains clusters, and builds persistent FAISS index.',
      ],
      architecture:
        'Query → Embedding Cache → Query Embedding → GMM Cluster Routing → Semantic Cache Lookup → Cache Hit (Return Result) / Cache Miss (Cluster-Filtered FAISS HNSW Search → Return Result → Update Cache).',
      metrics: [
        { label: 'Cache-Hit Latency', value: '~1–3 ms' },
        { label: 'Candidate Reduction', value: '85–90%' },
        { label: 'Corpus Scale', value: '16,590 Docs' },
        { label: 'GMM Clusters', value: '12 (BIC Evaluated)' },
      ],
    },
  },
  {
    id: 'cisco-forecast-league',
    number: '04',
    title: 'Cisco Forecast League',
    subtitle: 'Enterprise Supply Chain Demand Forecasting',
    tagline: 'Time Series · Feature Engineering · Hybrid Ensemble',
    highlight: '91.47% Accuracy · 7.50% WMAPE · Rank #8 Nationally (Top 10 / 500+ Teams)',
    image: ciscoImg,
    gradientOverlay: 'from-[#049fd9]/40 via-black/40 via-45% to-transparent',
    description:
      'National finalist ML forecasting pipeline modeling enterprise hardware demand from multi-variate supply-chain signals, achieving 91.47% accuracy.',
    tags: ['Time Series', 'Feature Engineering', 'XGBoost', 'Random Forest', 'Ensemble ML', 'Python'],
    stack: ['Python', 'XGBoost', 'Random Forest', 'Pandas', 'NumPy', 'Scikit-learn', 'Time-Series Analysis'],
    githubUrl: 'https://github.com/Ritesh-panda',
    accentColor: '#005073',
    category: 'Case Studies & Analysis',
    fullDetails: {
      whatIBuilt: [
        'End-to-end demand forecasting pipeline predicting enterprise hardware demand from multi-variate historical supply-chain time series.',
        'Transformed original wide-format data into long-form time-series representation to unlock individual product-level temporal dynamics.',
        'Engineered temporal features including lag windows, rolling demand volatility, trend rate derivatives, and historical trajectory signatures.',
        'Formulated ratio-based modeling to mitigate extreme volume scale variance between distinct hardware product tiers.',
        'Engineered a hybrid ensemble combining XGBoost for non-linear interactions with Random Forest for variance stabilization and ensemble robustness.',
        'Ranked #8 nationally among 500+ teams across India with 91.47% accuracy and 7.50% WMAPE, emerging as 1 of only 3 teams from VIT campuses to qualify.',
      ],
      architecture:
        'Raw Supply Chain Data → Long-Form Conversion → Temporal Feature Extraction (Lags, Rolling Volatility, Trends) → Ratio-Based Model Scaling → Hybrid Ensemble (XGBoost + Random Forest) → Operational Demand Forecasts.',
      metrics: [
        { label: 'Accuracy', value: '91.47%' },
        { label: 'WMAPE', value: '7.50%' },
        { label: 'R² Score', value: '0.9895' },
        { label: 'National Rank', value: '#8 / 500+ Teams' },
      ],
    },
  },
  {
    id: 'bain-brainwars',
    number: '05',
    title: 'Bain BrAINWARS 2026',
    subtitle: 'PulseX AI Strategy & Market Expansion Case Study',
    tagline: 'Strategy · GTM · Capital Allocation · 4.5× ROI',
    highlight: 'National Semifinalist · Ranked #3 in VIT · $12M Budget · ~4.5× ROI',
    image: bainImg,
    gradientOverlay: 'from-[#CC0000]/30 via-black/40 via-45% to-transparent',
    description:
      'National semifinalist strategic case study for PulseX wearables, designing an India-first hybrid GTM model and $12M capital allocation with ~4.5× ROI.',
    tags: ['Market Strategy', 'Financial Modeling', 'AI Defensibility', 'Capital Allocation', 'GTM'],
    stack: ['Market Sizing', 'Unit Economics', 'PulseAI Flywheel', 'D2C + Gym Hybrid', 'Financial Modeling'],
    githubUrl: 'https://github.com/Ritesh-panda',
    accentColor: '#CC0000',
    category: 'Case Studies & Analysis',
    fullDetails: {
      whatIBuilt: [
        'Led case strategy for PulseX wearable brand expansion, defining market selection, product roadmaps, and capital investment.',
        'Synthesized macroeconomic, demographic, and competitive signals to recommend an India-first expansion strategy.',
        'Architected a hybrid GTM distribution combining direct-to-consumer (D2C) channels with high-affinity gym network partnerships.',
        'Designed the PulseAI biometric data flywheel, turning wearable telemetry into high-retention personalized subscription moats.',
        'Built financial operating model allocating a $12M capital budget across inventory, marketing, and SaaS platform, projecting 4.5× ROI.',
        'Selected as 1 of only 8 teams from the entire VIT group to advance to the National Semifinals, finishing ranked #3 in VIT.',
      ],
      architecture:
        'Market Opportunity Sizing → Product Margin Analysis → Hybrid Channel Economics (D2C + Gym) → PulseAI Data Flywheel → $12M Capital Allocation → 4.5× Projected ROI.',
      metrics: [
        { label: 'Capital Budget', value: '$12M Allocated' },
        { label: 'Projected ROI', value: '~4.5× Returns' },
        { label: 'VIT Standing', value: 'Rank #3 in VIT' },
        { label: 'National Stage', value: 'Semifinalist' },
      ],
    },
  },
]
