export interface Skill {
  name: string;
  category: 'Programming' | 'AI/ML' | 'Data Analytics' | 'Development';
  level: number; // percentage 0-100
  iconName: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  overview: string;
  problemStatement: string;
  architecture: string[];
  features: string[];
  technologies: string[];
  challenges: string[];
  results: string[];
  category: 'AI/ML' | 'Data Analytics' | 'Computer Vision' | 'Full Stack';
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  futureImprovements?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Full-Time' | 'Education' | 'Research';
  description: string[];
  technologies: string[];
  achievements: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl: string;
  badgeImage?: string;
  skillsLearned: string[];
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  iconName: string;
  metric?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  conference: string;
  publisher: string;
  year: string;
  abstract: string;
  keywords: string[];
  doiUrl?: string;
  pdfUrl?: string;
  citationsCount?: number;
}
