import { TestBed } from '@angular/core/testing';
import { CvDataService } from './cv-data.service';
import { CVData } from '../models/cv-data.model';

describe('CvDataService', () => {
  let service: CvDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCVData', () => {
    it('should return complete CV data', () => {
      const data: CVData = service.getCVData();

      expect(data).toBeTruthy();
      expect(data.personal).toBeTruthy();
      expect(data.experiences).toBeTruthy();
      expect(data.education).toBeTruthy();
      expect(data.skills).toBeTruthy();
      expect(data.interests).toBeTruthy();
      expect(data.awards).toBeTruthy();
    });
  });

  describe('getPersonalInfo', () => {
    it('should return personal information with correct names', () => {
      const personal = service.getPersonalInfo();

      expect(personal.firstName).toBe('Yassine');
      expect(personal.lastName).toBe('El FILALI');
      expect(personal.title).toBe('FULLSTACK DEVELOPER');
      expect(personal.profileImage).toBe('./img/profile.jpg');
    });

    it('should return social links', () => {
      const personal = service.getPersonalInfo();

      expect(personal.socialLinks).toBeTruthy();
      expect(personal.socialLinks.length).toBe(2);
      expect(personal.socialLinks[0].platform).toBe('LinkedIn');
      expect(personal.socialLinks[1].platform).toBe('GitHub');
    });
  });

  describe('getExperiences', () => {
    it('should return 3 professional experiences', () => {
      const experiences = service.getExperiences();

      expect(experiences).toBeTruthy();
      expect(experiences.length).toBe(3);
    });

    it('should return experiences in correct order (antichronological)', () => {
      const experiences = service.getExperiences();

      expect(experiences[0].company).toContain('ONEM');
      expect(experiences[0].endDate).toBe('Présent');
      expect(experiences[1].company).toContain('Province de Hainaut');
      expect(experiences[2].company).toContain('AXEL');
    });
  });

  describe('getEducation', () => {
    it('should return 2 academic formations', () => {
      const education = service.getEducation();

      expect(education).toBeTruthy();
      expect(education.length).toBe(2);
    });

    it('should return education with correct institutions', () => {
      const education = service.getEducation();

      expect(education[0].institution).toContain('HELHa');
      expect(education[0].distinction).toBe('Distinction');
      expect(education[1].institution).toContain('IJJ');
    });
  });

  describe('getSkills', () => {
    it('should return skill categories', () => {
      const skills = service.getSkills();

      expect(skills).toBeTruthy();
      expect(skills.length).toBe(9);
    });

    it('should include Frontend category', () => {
      const skills = service.getSkills();
      const frontend = skills.find(s => s.category === 'Frontend');

      expect(frontend).toBeTruthy();
      expect(frontend!.skills).toContain('Angular 2+');
    });
  });

  describe('getInterests', () => {
    it('should return interests text', () => {
      const interests = service.getInterests();

      expect(interests).toBeTruthy();
      expect(typeof interests).toBe('string');
      expect(interests.length).toBeGreaterThan(0);
    });
  });

  describe('getAwards', () => {
    it('should return 9 certifications', () => {
      const awards = service.getAwards();

      expect(awards).toBeTruthy();
      expect(awards.length).toBe(9);
    });

    it('should return awards with valid URLs', () => {
      const awards = service.getAwards();

      awards.forEach(award => {
        expect(award.name).toBeTruthy();
        expect(award.url).toBeTruthy();
        expect(award.url.length).toBeGreaterThan(0);
      });
    });

    it('should include Angular certification', () => {
      const awards = service.getAwards();
      const angular = awards.find(a => a.name === 'Angular');

      expect(angular).toBeTruthy();
      expect(angular!.url).toContain('sololearn.com');
    });
  });
});

