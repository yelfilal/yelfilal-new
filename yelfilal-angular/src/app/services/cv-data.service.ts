import { Injectable } from '@angular/core';
import {
  CVData,
  PersonalInfo,
  Experience,
  Education,
  SkillCategory,
  Award
} from '../models/cv-data.model';
import { cvData } from '../data/cv-data';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {
  constructor() { }

  getCVData(): CVData {
    return cvData;
  }

  getPersonalInfo(): PersonalInfo {
    return cvData.personal;
  }

  getExperiences(): Experience[] {
    return cvData.experiences;
  }

  getEducation(): Education[] {
    return cvData.education;
  }

  getSkills(): SkillCategory[] {
    return cvData.skills;
  }

  getInterests(): string {
    return cvData.interests;
  }

  getAwards(): Award[] {
    return cvData.awards;
  }
}

