export interface ResearchItem {
  id: string
  number: string
  title: string
  category: string
  status: 'Published'
  statusDate: string
  year: string
  venue: string
  doi: string
  recordUrl: string
  pdfUrl: string
  authors: string[]
  shortDescription: string
  tags: string[]
  accentColor: string
  abstract: string
  motivation: string
  approach: string[]
  keyFindings: string[]
  metrics: { label: string; value: string }[]
  bibtex: string
}

export interface ResearchDomain {
  id: string
  title: string
  description: string
  topics: string[]
}

export const RESEARCH_PAPERS: ResearchItem[] = [
  {
    id: 'resnet18-vs-resnet50-brain-tumor',
    number: '01',
    title: 'Is the Depth Worth It? A Cost-Aware Comparative Study of ResNet18 and ResNet50 for Brain Tumor MRI Classification and Clinical Deployment',
    category: 'Research Paper',
    status: 'Published',
    statusDate: 'PUBLISHED · 2026',
    year: '2026',
    venue: '',
    doi: '10.5281/zenodo.21755807',
    recordUrl: 'https://zenodo.org/records/21755807',
    pdfUrl: 'https://zenodo.org/records/21755807/files/is-the-depth-worth-it-a-cost-aware-comparative-study-of-resnet18-and-resnet50-for-brain-tumor-mri-cl-IJERTV15IS070766.pdf',
    authors: ['Ritesh Ranjan Panda'],
    shortDescription:
      'A cost-aware comparative study evaluating whether the higher training and inference cost of deeper residual architectures (ResNet-50) is clinically justified over lighter models (ResNet-18) for brain tumor MRI classification and edge deployment.',
    tags: ['Brain MRI Classification', 'ResNet-18 vs ResNet-50', 'Grad-CAM', 'Transfer Learning', 'Computational Cost', 'Clinical Deployment'],
    accentColor: '#0066CC',
    abstract:
      'Brain tumors are a critical health concern worldwide, and timely diagnosis increases patient survival. In this research, two deep learning architectures, ResNet-18 and ResNet-50, are compared and evaluated in terms of brain tumor recognition, investigating whether the higher training and inference cost of deeper models is clinically justified. Preprocessing pipelines are applied to clarify MRI images and enhance representation before training. Accuracy, precision, recall, confusion matrices, Grad-CAM visual interpretations, and computational cost metrics—including parameter count, model size, FLOPs, training time, and inference time—are rigorously analyzed. The findings reveal a modest, statistically ambiguous performance gain for ResNet-50 concentrated in a single class (meningioma), while ResNet-18 matches or exceeds ResNet-50 on the remaining classes at substantially lower computational cost, establishing clear deployment trade-offs.',
    motivation:
      'Translating deep learning medical vision models to edge clinical environments requires evaluating the practical trade-off between architectural depth, memory footprint, inference latency, and diagnostic reliability.',
    approach: [
      'Comparative benchmarking of fine-tuned ResNet-18 and ResNet-50 under standardized optimization and image preprocessing pipelines.',
      'Comprehensive profiling of computational cost metrics: parameter count, model disk size, FLOPs, training duration, and per-batch inference latency.',
      'Interpretability analysis via Gradient-weighted Class Activation Mapping (Grad-CAM) to verify anatomical localization on pathological brain lesions.',
      'Class-level sensitivity and confusion matrix breakdown across glioma, meningioma, pituitary, and healthy MRI scans.',
    ],
    keyFindings: [
      'ResNet-18 matches or exceeds ResNet-50 performance across the majority of tumor classes while operating at substantially reduced computational overhead.',
      'ResNet-50 demonstrated minor performance advantages localized to the meningioma class, which did not uniformly justify its ~2× parameter and latency cost in standard clinical edge scenarios.',
      'Grad-CAM heatmaps confirmed precise lesion localization across penultimate residual layers without reliance on non-pathological background artifacts.',
    ],
    metrics: [
      { label: 'Architectures', value: 'ResNet18 vs 50' },
      { label: 'Interpretability', value: 'Grad-CAM' },
      { label: 'Evaluation', value: 'Cost-Aware' },
      { label: 'Deployment', value: 'Clinical Edge' },
    ],
    bibtex: `@article{panda2026depth,
  title={Is the Depth Worth It? A Cost-Aware Comparative Study of ResNet18 and ResNet50 for Brain Tumor MRI Classification and Clinical Deployment},
  author={Panda, Ritesh Ranjan},
  year={2026},
  doi={10.5281/zenodo.21755807},
  url={https://zenodo.org/records/21755807}
}`,
  },
]

export const RESEARCH_DOMAINS: ResearchDomain[] = [
  {
    id: 'ai-systems',
    title: 'AI Systems & Intelligent Applications',
    description:
      'Building practical AI systems that go beyond simple model demos — especially systems that combine LLMs, retrieval, tools, memory, and real-world workflows.',
    topics: ['LLM Applications', 'AI Agents', 'RAG', 'Prompt Engineering', 'AI System Design'],
  },
  {
    id: 'semantic-search',
    title: 'Information Retrieval & Semantic Search',
    description:
      'Exploring semantic search architectures, high-dimensional vector retrieval, reranking pipelines, and low-latency cache optimization.',
    topics: ['Semantic Search', 'Vector Retrieval', 'FAISS', 'HNSW', 'Reranking', 'Semantic Caching', 'Retrieval Optimization'],
  },
  {
    id: 'multilingual-ai',
    title: 'Multilingual & Accessible AI',
    description:
      'Exploring AI that works across languages and communication channels rather than assuming everyone interacts with technology in English.',
    topics: ['Multilingual NLP', 'Indian Languages', 'Voice AI', 'Conversational AI', 'Low-Bandwidth Interfaces', 'WhatsApp AI'],
  },
  {
    id: 'healthcare-ai',
    title: 'AI for Healthcare & Longitudinal Intelligence',
    description:
      'Exploring structured patient memory, evidence-grounded retrieval, timeline reasoning, and healthcare information systems.',
    topics: ['Healthcare AI', 'Patient Information Retrieval', 'Structured Memory', 'Evidence-Grounded AI', 'Timeline Reasoning', 'Healthcare Information Systems'],
  },
  {
    id: 'efficient-ml',
    title: 'Efficient ML & Model Systems',
    description:
      'Investigating latency, caching, candidate reduction, model benchmarking, and cost-aware deployment under real-world resource constraints.',
    topics: ['Model Evaluation', 'Inference Optimization', 'Latency', 'Cost-Aware AI', 'Resource Constraints', 'Experimentation'],
  },
  {
    id: 'applied-ml',
    title: 'Applied Machine Learning',
    description:
      'Broader applied ML exploration covering forecasting, classification, clustering, feature engineering, and model optimization.',
    topics: ['Forecasting', 'Classification', 'Clustering', 'Feature Engineering', 'Ensemble Learning', 'Model Optimization'],
  },
]
