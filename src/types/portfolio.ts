export interface ProfileData {
  handle: string;
  fullName: string;
  positioningTagline: string;
  heroStatement: string;
  academicSubtitle: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  cgpa: string;
}

export interface DimensionPillar {
  title: string;
  tag: string;
  subtags: string;
  description: string;
}

export interface ProjectData {
  id: string;
  title: string;
  categoryTag: string;
  tagline: string;
  problem: string;
  architecture: string;
  technicalDecisions: string[];
  technologies: string[];
  results?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface RepositoryItem {
  name: string;
  description: string;
  category: string;
  language: string;
  url: string;
}

export interface PublicationData {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  focusAreas: string[];
  journal: string;
  date: string;
  doi: string;
  doiUrl: string;
  zenodoUrl: string;
  pdfUrl?: string;
  abstract: string;
  methodology: string;
  resultsSummary: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: 'Internship' | 'Apprenticeship' | 'Leadership' | 'Program' | 'Open Source';
  period: string;
  year: string;
  location?: string;
  highlights: string[];
  technologies?: string[];
  url?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiresDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
}

export interface StatMetric {
  value: string;
  label: string;
  subtext: string;
}

export interface EducationData {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  details: string;
}

export interface AchievementData {
  title: string;
  rankOrStatus: string;
  organization: string;
  year: string;
  detail: string;
}
