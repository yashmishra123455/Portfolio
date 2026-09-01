import { Skill, Project, ExperienceItem, Certificate, Achievement, ResearchPaper } from '@/types';

export const PERSONAL_INFO = {
  name: 'Yash Mishra',
  title: 'AI/ML Engineer & Full Stack Developer',
  location: 'Lucknow, India',
  email: 'myash7166@gmail.com',
  github: 'https://github.com/yashmishra123455',
  linkedin: 'https://www.linkedin.com/in/yash-mishra-2352502bb/',
  twitter: 'https://twitter.com',
  bio: 'Passionate AI/ML Engineer and Full-Stack Developer dedicated to engineering high-performance deep learning models, intelligent computer vision pipelines, and resilient web applications. Experienced in developing real-time pose estimation systems, fuzzy-logic CNN image enhancers, and business-critical analytics dashboards.',
  taglines: [
    'AI/ML Engineer',
    'Data Analyst',
    'Software Developer',
    'Computer Vision Enthusiast',
    'Problem Solver'
  ],
  stats: {
    projectsCompleted: 15,
    commitStreak: 120,
    certificationsCount: 6,
    codeAccuracy: 99.4
  }
};

export const SKILLS: Skill[] = [
  // Programming
  { name: 'Python', category: 'Programming', level: 95, iconName: 'SiPython', description: 'Advanced PyTorch, TensorFlow, Pandas, NumPy, OpenCV & FastAPI' },
  { name: 'Java', category: 'Programming', level: 85, iconName: 'FaJava', description: 'Object-Oriented Programming, Data Structures, Spring Boot' },
  { name: 'SQL', category: 'Programming', level: 90, iconName: 'SiPostgresql', description: 'Complex Queries, Aggregations, Performance Tuning, PostgreSQL & MySQL' },
  { name: 'JavaScript / TypeScript', category: 'Programming', level: 88, iconName: 'SiTypescript', description: 'ES6+, Async Programming, Type Safety, Dynamic Web Applications' },

  // AI / ML
  { name: 'TensorFlow', category: 'AI/ML', level: 92, iconName: 'SiTensorflow', description: 'Custom Neural Network Architectures, Transfer Learning & Model Optimization' },
  { name: 'PyTorch', category: 'AI/ML', level: 90, iconName: 'SiPytorch', description: 'Deep Learning Model Training, Computer Vision & Dynamic Computation Graphs' },
  { name: 'Scikit-learn', category: 'AI/ML', level: 94, iconName: 'SiScikitlearn', description: 'Predictive Modeling, Regression, Classification, Clustering & Feature Engineering' },
  { name: 'OpenCV', category: 'AI/ML', level: 89, iconName: 'SiOpencv', description: 'Real-time Video Analysis, Image Processing, Feature Extraction & Object Tracking' },
  { name: 'CNN (Convolutional Networks)', category: 'AI/ML', level: 92, iconName: 'Brain', description: 'Feature Learning, Spatial Processing, Agricultural & Medical Classification' },
  { name: 'LSTM (Recurrent Networks)', category: 'AI/ML', level: 86, iconName: 'Activity', description: 'Sequential Data Processing, Time-series Forecasting & Gesture Sequence Tracking' },
  { name: 'MediaPipe', category: 'AI/ML', level: 88, iconName: 'Sparkles', description: 'Real-time Holistic Body Pose, Face & Hand Skeleton Tracking' },

  // Data Analytics
  { name: 'Power BI', category: 'Data Analytics', level: 90, iconName: 'BarChart3', description: 'Interactive Business Dashboards, DAX Query Language & Data Modeling' },
  { name: 'Pandas & NumPy', category: 'Data Analytics', level: 95, iconName: 'Table', description: 'High-speed Data Cleaning, Wrangling, Vectorized Operations & Statistical Analysis' },
  { name: 'IBM Cognos Analytics', category: 'Data Analytics', level: 82, iconName: 'PieChart', description: 'Enterprise Business Intelligence Reporting & Executive Metrics Visualization' },
  { name: 'Matplotlib & Seaborn', category: 'Data Analytics', level: 88, iconName: 'LineChart', description: 'Exploratory Data Analysis, Custom Statistical Graphics & Distribution Plots' },

  // Development & Tools
  { name: 'React.js', category: 'Development', level: 90, iconName: 'SiReact', description: 'Component Driven Architecture, React Hooks, State Management & Custom UI' },
  { name: 'Next.js', category: 'Development', level: 88, iconName: 'SiNextdotjs', description: 'App Router, SSR, SSG, API Routes, Optimization & Vercel Deployment' },
  { name: 'Flask', category: 'Development', level: 85, iconName: 'SiFlask', description: 'Lightweight Microservices, RESTful AI Model Inference Endpoints' },
  { name: 'Git & GitHub', category: 'Development', level: 92, iconName: 'SiGit', description: 'Branching Strategies, CI/CD Actions, Version Control & Collaboration' },
  { name: 'Docker', category: 'Development', level: 80, iconName: 'SiDocker', description: 'Containerization of Machine Learning Models & Web Microservices' },
];

export const PROJECTS: Project[] = [
  {
    id: 'trishul-women-safety',
    title: 'Trishul - Real-Time Pose & Gesture Safety System',
    shortDescription: 'Computer Vision & Deep Learning system utilizing MediaPipe Holistic & LSTM networks for automated emergency detection and location-based alerts.',
    overview: 'Trishul is a computer vision emergency detection platform that recognizes distress gestures and abnormal physical poses in real-time. Designed to enhance safety, it combines skeletal tracking with recurrent neural networks to trigger automated alerts with live location data without requiring manual button presses.',
    problemStatement: 'In danger situations, victims often lack the time or physical ability to unlock a phone or press emergency buttons. Existing safety apps rely heavily on manual activation.',
    architecture: [
      'Video Stream Ingestion via OpenCV (30 FPS capability)',
      'MediaPipe Holistic Model for 33 Body Keypoints & 21 Hand Landmarks extraction',
      'Multi-layer Sequential LSTM Model for action/gesture temporal classification',
      'Automated Alert Microservice with Geolocation GPS integration & SMS API dispatch'
    ],
    features: [
      'Real-time gesture recognition (Distress Sign, SOS Wave, Sudden Fall)',
      'False-alarm mitigation via temporal frame sequence verification',
      'Low latency inference engine (< 40ms frame processing time)',
      'Instant SMS & email dispatch with live GPS pin link'
    ],
    technologies: ['Python', 'TensorFlow 2.x', 'MediaPipe', 'OpenCV', 'LSTM', 'Flask', 'Twilio API'],
    challenges: [
      'Handling occlusions and varied lighting conditions during nighttime tracking',
      'Optimizing sequence frame window length to balance low latency with high accuracy'
    ],
    results: [
      'Achieved 96.8% accuracy on benchmark gesture testing dataset',
      'Reduced emergency notification trigger delay to under 1.2 seconds'
    ],
    category: 'Computer Vision',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/myashmishra/Women-Safety-System',
    liveUrl: 'https://github.com/myashmishra/Women-Safety-System',
    featured: true,
    metrics: [
      { label: 'Gesture Accuracy', value: '96.8%' },
      { label: 'Inference Latency', value: '<40 ms' },
      { label: 'Emergency Alert Speed', value: '1.2s' }
    ],
    futureImprovements: [
      'Deploying lightweight Quantized TFLite model on Edge Devices (Raspberry Pi / Jetson Nano)',
      'Integration with smartwatch accelerometer telemetry'
    ]
  },
  {
    id: 'nutriscan-ai',
    title: 'NutriScan - AI Personal Nutrition Companion',
    shortDescription: 'Smart nutritional analysis and food recognition web app providing instant macro breakdowns, allergen detection, and customized health insights.',
    overview: 'NutriScan empowers users to maintain healthy lifestyles through intelligent visual food logging and barcode scanning. Powered by computer vision and nutritional APIs, it generates real-time macro analysis and personalized dietary recommendations.',
    problemStatement: 'Manual calorie tracking is tedious and prone to human estimation errors, causing over 70% of health enthusiasts to abandon dietary tracking within two weeks.',
    architecture: [
      'Client-side HTML5/JS Web Camera & Barcode Scanner module',
      'Image classification pipeline identifying portion size and food type',
      'Open Food Facts & Nutrition Database integration',
      'Custom algorithm calculating personalized macro targets based on user biometric goals'
    ],
    features: [
      'Instant Barcode scan & food image classification',
      'Comprehensive macronutrient (Carbs, Protein, Fat, Fiber) decomposition',
      'Allergen warnings (Gluten, Dairy, Nuts, Soy)',
      'Progress dashboard with historical intake trends'
    ],
    technologies: ['JavaScript', 'HTML5/CSS3', 'Firebase', 'Open Food Facts API', 'Chart.js', 'REST API'],
    challenges: [
      'Normalizing mixed ingredient dishes where individual ingredients overlap',
      'Ensuring instant response time on mobile devices with poor cellular connection'
    ],
    results: [
      'Processed over 5,000+ test food item queries with high precision',
      'Reduced average meal logging duration from 2 minutes to under 5 seconds'
    ],
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/myashmishra/Personal-Food-Companion',
    liveUrl: 'https://github.com/myashmishra/Personal-Food-Companion',
    featured: true,
    metrics: [
      { label: 'Logging Speedup', value: '24x' },
      { label: 'Database Items', value: '100K+' },
      { label: 'User Satisfaction', value: '4.9/5' }
    ],
    futureImprovements: [
      '3D Volume estimation using depth sensor camera APIs',
      'LLM-driven weekly meal prep suggestions'
    ]
  },
  {
    id: 'fuzzy-cnn-image-enhancement',
    title: 'Fuzzy-CNN Low-Light Image Enhancer',
    shortDescription: 'IEEE Published hybrid deep learning model combining Fuzzy Logic membership functions with CNNs for low-light noise reduction & contrast optimization.',
    overview: 'This project introduces a novel hybrid approach combining Fuzzy Logic contrast adjustment with Convolutional Neural Networks for restoring severely underexposed and noisy digital images without introducing over-saturation or color artifacts.',
    problemStatement: 'Low-light photography suffers from sensor noise, lost shadow details, and color distortion. Standard deep neural networks often over-amplify noise in low-contrast areas.',
    architecture: [
      'Fuzzy Membership Function preprocessing layer for dynamic illumination estimation',
      'Dual-branch CNN: Spatial Detail Extraction Sub-network & Color Consistency Branch',
      'Multi-scale Feature Fusion Module preserving high-frequency edges',
      'Perceptual Loss Function combining L1 loss with SSIM structural similarity index'
    ],
    features: [
      'Adaptive contrast enhancement tailored to local image luminance',
      'Noise suppression while preserving subtle texture details',
      'Zero hyperparameter tuning required per photo',
      'Comparative metric suite evaluating SSIM, PSNR, and NIQE'
    ],
    technologies: ['Python', 'PyTorch', 'Fuzzy Logic Engine', 'OpenCV', 'Scikit-image', 'Matplotlib'],
    challenges: [
      'Formulating differentiable fuzzy membership rules suitable for backpropagation in PyTorch',
      'Balancing computational intensity for high-resolution 4K images'
    ],
    results: [
      'Published in IEEE conference proceedings',
      'Achieved +4.2 dB PSNR increase over conventional CLAHE and Retinex algorithms'
    ],
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/myashmishra/fuzzy-cnn-image-enhancement',
    liveUrl: 'https://github.com/myashmishra/fuzzy-cnn-image-enhancement',
    featured: true,
    metrics: [
      { label: 'PSNR Gain', value: '+4.2 dB' },
      { label: 'SSIM Index', value: '0.941' },
      { label: 'Publication', value: 'IEEE Paper' }
    ],
    futureImprovements: [
      'Extending architecture to real-time low-light video enhancement',
      'ONNX runtime conversion for mobile deployment'
    ]
  },
  {
    id: 'plant-disease-detection',
    title: 'Plant Disease Detection & Crop Health System',
    shortDescription: 'Deep Convolutional Neural Network trained on agricultural leaf images to detect early-stage crop infections and provide automated remedy protocols.',
    overview: 'A deep learning solution for smart agriculture. By analyzing leaf visual patterns, the system accurately diagnoses fungal, bacterial, and viral crop diseases, enabling farmers to apply targeted treatments early and minimize crop yield loss.',
    problemStatement: 'Agricultural diseases cause up to 40% loss in crop yield annually worldwide. Smallholder farmers often lack access to timely expert agronomist advice.',
    architecture: [
      'Transfer Learning pipeline utilizing MobileNetV3 and ResNet50 backbone architectures',
      'Data Augmentation module handling lighting variations, rotations, and background noise',
      'Flask REST API serving real-time model inference',
      'Responsive Web UI displaying diagnosis, confidence score, and treatment guide'
    ],
    features: [
      'Detection across 38 distinct plant-disease pairings',
      'High-confidence diagnostic score with visual class activation maps (Grad-CAM)',
      'Actionable organic and chemical treatment instructions',
      'Multi-crop support including Tomato, Potato, Corn, and Apple leaves'
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'Flask', 'OpenCV', 'Bootstrap/Tailwind'],
    challenges: [
      'Preventing overfitting on unbalanced disease class datasets',
      'Fine-tuning model weights to differentiate between visually similar leaf rust and spots'
    ],
    results: [
      'Achieved 97.4% validation classification accuracy across PlantVillage benchmark dataset',
      'Sub-second model response time on standard cloud server hardware'
    ],
    category: 'Computer Vision',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/myashmishra/Plant-disease-detection',
    liveUrl: 'https://github.com/myashmishra/Plant-disease-detection',
    featured: true,
    metrics: [
      { label: 'Accuracy', value: '97.4%' },
      { label: 'Disease Classes', value: '38' },
      { label: 'Inference Time', value: '120 ms' }
    ]
  },
  {
    id: 'amazon-sales-analytics',
    title: 'Amazon Sales & Customer Sentiment Analytics',
    shortDescription: 'Data Analytics & Exploratory Analysis project evaluating pricing dynamics, rating correlations, and discount impact across 1,000+ Amazon product categories.',
    overview: 'An in-depth data science exploration analyzing over 1,000 top-selling Amazon products. Uncovers actionable retail insights regarding how pricing, discount percentages, and customer review lengths directly impact overall sales rank and revenue potential.',
    problemStatement: 'E-commerce merchants struggle to determine optimal discount ratios and price points that maximize customer conversions without sacrificing profitability.',
    architecture: [
      'Pandas data parsing and automated regex cleaning of price symbols, percentages, and null values',
      'Statistical correlation matrix computation (Pearson & Spearman)',
      'Seaborn & Matplotlib data visualization suite',
      'Power BI interactive executive dashboard creation'
    ],
    features: [
      'Price vs Rating non-linear regression visualizer',
      'Discount tier segmentation (0-20%, 20-50%, 50%+ impact on rating volume)',
      'Top performing product category heatmaps',
      'Automated summary report generation with key commercial findings'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Power BI', 'Jupyter Notebook'],
    challenges: [
      'Cleaning unstructured currency formats and nested JSON rating strings',
      'Detecting review count anomalies and potential bot rating clusters'
    ],
    results: [
      'Identified that discounts between 35%-45% yield maximum net review velocity',
      'Created an interactive Power BI dashboard adopted for academic case studies'
    ],
    category: 'Data Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    githubUrl: 'https://github.com/myashmishra',
    liveUrl: 'https://github.com/myashmishra',
    featured: false,
    metrics: [
      { label: 'Products Analyzed', value: '1,000+' },
      { label: 'Data Cleaning', value: '100% Automated' },
      { label: 'Dashboard Views', value: 'Interactive' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'ai-ml-intern',
    role: 'AI / ML Engineer Intern',
    company: 'Leading AI Tech Solutions',
    location: 'Lucknow, India',
    period: '2024 - Present',
    type: 'Internship',
    description: [
      'Engineered and fine-tuned deep learning models using TensorFlow and PyTorch for real-world computer vision tasks.',
      'Developed data preprocessing pipelines handling unstructured image datasets, improving training pipeline efficiency by 30%.',
      'Collaborated with senior software architects to containerize Flask inference endpoints using Docker.'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Flask', 'Docker', 'Git'],
    achievements: [
      'Optimized model inference latency by 25% through model pruning and FP16 quantization.',
      'Built automated data validation script catching corrupt input images before model intake.'
    ]
  },
  {
    id: 'srmu-education',
    role: 'B.Tech in Computer Science & Engineering (DS & AI)',
    company: 'Shri Ramswaroop Memorial University (SRMU)',
    location: 'Lucknow / Barabanki, India',
    period: '2022 - 2026 (Pursuing)',
    type: 'Education',
    description: [
      'Specializing in Data Science and Artificial Intelligence with consistent academic performance.',
      'Core Coursework: Deep Learning, Neural Networks, Computer Vision, Data Structures & Algorithms, Database Management Systems, Operating Systems, Machine Learning.',
      'Active participant in technical symposiums, hackathons, and AI research projects.'
    ],
    technologies: ['Python', 'Java', 'Data Science', 'Machine Learning', 'Deep Learning', 'SQL', 'DBMS'],
    achievements: [
      'Published IEEE research paper on hybrid Fuzzy-CNN low-light image enhancement.',
      'Earned IBM Professional Certification in Data Science & Artificial Intelligence.'
    ]
  }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    id: 'ibm-ds-ai-path',
    title: 'Data Science & Artificial Intelligence Professional Learning Path',
    issuer: 'IBM Developer Skills Network',
    date: 'September 2025',
    verifyUrl: 'https://srmcem.skillsnetwork.site/certificates/e1ba804c-cc9e-4829-8447-6761aadb75cc',
    skillsLearned: ['Data Science Methodology', 'AI Engineering', 'Machine Learning Pipelines', 'Python for AI']
  },
  {
    id: 'ibm-deep-learning',
    title: 'Deep Learning Fundamentals',
    issuer: 'IBM Developer Skills Network',
    date: 'September 2025',
    verifyUrl: 'https://courses.srmcem.skillsnetwork.site/certificates',
    skillsLearned: ['Neural Networks', 'TensorFlow/Keras', 'Backpropagation', 'Activation Functions']
  },
  {
    id: 'ibm-data-analysis',
    title: 'Data Analysis with Python',
    issuer: 'IBM Developer Skills Network',
    date: 'September 2025',
    verifyUrl: 'https://courses.srmcem.skillsnetwork.site/certificates/',
    skillsLearned: ['Pandas Dataframes', 'Exploratory Data Analysis', 'Model Evaluation', 'Data Wrangling']
  },
  {
    id: 'predictive-modeling',
    title: 'Predictive Modeling Fundamentals',
    issuer: 'Cognitive Class / IBM',
    date: '2024',
    verifyUrl: 'https://cognitiveclass.ai',
    skillsLearned: ['Regression Models', 'Decision Trees', 'Classification Metrics', 'Supervised Learning']
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'ieee-fuzzy-cnn',
    title: 'Hybrid Fuzzy-CNN Architecture for Low-Light Image Enhancement and Noise Optimization',
    conference: 'IEEE International Conference on Smart Computation & Artificial Intelligence',
    publisher: 'IEEE Xplore',
    year: '2025',
    abstract: 'Digital images captured under severe underexposure conditions suffer from elevated sensor noise, compressed dynamic range, and lost detail. This paper proposes a hybrid architecture combining fuzzy membership functions with a dual-stream Convolutional Neural Network. Experimental results demonstrate significant improvements in PSNR and SSIM over state-of-the-art Retinex models without color artifact distortion.',
    keywords: ['Deep Learning', 'Fuzzy Logic', 'Convolutional Neural Networks', 'Low-Light Image Restoration', 'Computer Vision'],
    doiUrl: 'https://ieee.org',
    citationsCount: 4
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ieee-pub',
    title: 'IEEE Conference Publication',
    category: 'Research',
    date: '2025',
    description: 'Authored and published research paper on Fuzzy CNN image enhancement in IEEE proceedings.',
    iconName: 'FileText',
    metric: 'IEEE Published'
  },
  {
    id: 'ibm-certified',
    title: 'IBM Certified AI & Data Science Specialist',
    category: 'Certification',
    date: '2025',
    description: 'Completed comprehensive learning path covering Machine Learning, Deep Learning, and Python Data Analytics.',
    iconName: 'Award',
    metric: 'IBM Certified'
  },
  {
    id: 'hackathon-finalist',
    title: 'Top AI Hackathon Finalist',
    category: 'Competition',
    date: '2024',
    description: 'Developed real-time pose safety system (Trishul) under 24 hours, winning accolades for safety innovation.',
    iconName: 'Trophy',
    metric: 'Top 3 Finalist'
  },
  {
    id: 'commit-streak',
    title: '120+ Days Open Source GitHub Streak',
    category: 'Open Source',
    date: '2024 - 2025',
    description: 'Consistent daily contributions across computer vision repos, full stack tools, and AI algorithms.',
    iconName: 'GitCommit',
    metric: '120+ Days'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Academic Research Supervisor',
    role: 'Professor of Computer Science',
    organization: 'Shri Ramswaroop Memorial University',
    quote: 'Yash demonstrates extraordinary technical foresight in artificial intelligence and computer vision. His research work on Fuzzy CNN architecture demonstrated research rigor far beyond standard undergraduate level.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '2',
    name: 'Lead AI Engineer',
    role: 'Senior Data Scientist',
    organization: 'AI Tech Solutions',
    quote: 'Working with Yash during his internship was seamless. He takes ownership of end-to-end model training, data cleaning, and REST API deployment with rapid velocity and zero hand-holding needed.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Understanding Fuzzy Logic in Modern Deep Learning Architectures',
    date: 'Jan 15, 2025',
    readTime: '6 min read',
    excerpt: 'How combining classic fuzzy membership functions with differentiable PyTorch layers can solve low-light vision challenges.',
    category: 'Computer Vision',
    link: '#'
  },
  {
    id: '2',
    title: 'Building Real-time Pose Estimation with MediaPipe & LSTM Networks',
    date: 'Dec 10, 2024',
    readTime: '8 min read',
    excerpt: 'A practical step-by-step guide to tracking 33 skeletal body landmarks at 30 FPS for action detection.',
    category: 'AI / ML',
    link: '#'
  }
];
