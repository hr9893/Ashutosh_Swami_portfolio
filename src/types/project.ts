export type ProjectStatus = "Completed" | "In Progress";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string[];
  status: ProjectStatus;
  year: number;
  role: string;
  featured: boolean;
  techStack: string[];
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: {
    markdown?: string;
    diagram?: string; // Made optional
    image?: string;
    images?: string[];
    notes: string;
  };
  challenges: {
    challenge: string;
    resolution: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  links: {
    github: string | null;
    live: string | null;
    demo: string | null;
    video: string | null;
  };
  images: string[];
}