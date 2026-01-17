export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  profileImage: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  distinction?: string;
}

export interface Award {
  name: string;
  url: string;
}

export interface SkillCategory {
  category?: string;
  skills: string[];
}

export interface CVData {
  personal: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: SkillCategory[];
  interests: string;
  awards: Award[];
}

