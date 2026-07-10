export interface Project {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  type: string;
  typeAr: string;
  role: string;
  roleAr: string;
  achievements: string[];
  achievementsAr: string[];
  technologies: string[];
  imagePath: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  titleAr: string;
  skills: {
    name: string;
    nameAr?: string;
    level: number; // 1-5 scale or percentage
  }[];
}

export interface Education {
  degree: string;
  degreeAr: string;
  university: string;
  universityAr: string;
  period: string;
  periodAr: string;
  gpa: string;
  gpaAr: string;
}

export interface DeveloperProfile {
  name: string;
  nameAr: string;
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  email: string;
  phone: string;
  phoneAr: string;
  github: string;
  linkedin: string;
  aboutMe: string;
  aboutMeAr: string;
  heroStatement: string;
  heroStatementAr: string;
}
