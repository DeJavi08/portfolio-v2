export interface SocialLink {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  url: string;
  description?: string;
  badge?: string;
  color?: string; // border or shadow accent
}

export interface ProjectCard {
  id: string;
  name: string;
  description: string;
  emoji: string;
  status: string; // e.g., "Live Demo & GitHub", "GitHub", "Live Demo & Replit"
  liveUrl?: string;
  githubUrl?: string;
  replitUrl?: string;
  tags: string[];
}

export interface ProfileDetails {
  username: string;
  fullName: string;
  avatarUrl: string;
  bio: string;
  location: string;
}

export interface ExperienceItem {
  id: string;
  date: string;
  role: string;
  company: string;
  badge?: string;
  body: string;
  colorContrast?: boolean;
}

export interface SkillBarItem {
  id: string;
  name: string;
  percentage: number;
}

export interface EducationCardItem {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  tag: string;
}

export interface EducationDetailItem {
  id: string;
  school: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organizerOrType?: string;
  year?: string;
  description: string;
  certificateUrl?: string;
}

