export interface Skill {
  name: string;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  skills: string[]
}

export interface Project {
  title: string;
  description: string[];
  techStack: string[];
  imageUrl: string;
  projectUrl: string | null;
  githubUrl: string | null;
}

export interface SocialLink {
  name: string;
  url: string;
}