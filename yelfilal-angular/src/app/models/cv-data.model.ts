/** Icônes des réseaux sociaux (rendues par `app-icon`). */
export type SocialIcon = 'linkedin' | 'github';

/** Icônes des centres d'intérêt (rendues par `app-icon`). */
export type InterestIcon = 'book' | 'ball' | 'chip';

/** Titre d'accueil : `highlight` est mis en avant (italique, couleur d'accent). */
export interface Headline {
  lead: string;
  highlight: string;
  trail: string;
}

/** Légende sous la photo de profil. */
export interface PhotoCaption {
  label: string;
  since: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  headline: Headline;
  intro: string[];
  email: string;
  photoCaption: PhotoCaption;
  profileImage: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: SocialIcon;
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
  issuer: string;
  url: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Interest {
  title: string;
  text: string;
  icon: InterestIcon;
}

export interface CVData {
  personal: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: SkillCategory[];
  interests: Interest[];
  awards: Award[];
}
