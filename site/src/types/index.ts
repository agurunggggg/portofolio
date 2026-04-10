export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectKPI {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  dataset: string;
  tools: string[];
  analysis: string[];
  insights: string[];
  impact: string;
  kpis: ProjectKPI[];
}
