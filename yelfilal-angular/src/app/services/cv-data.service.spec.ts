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
      expect(personal.title).toBe('Java Fullstack Engineer');
      expect(personal.profileImage).toBe('./img/profile.jpg');
    });

    it('should return the e-mail address', () => {
      expect(service.getPersonalInfo().email).toBe('yelfilal.ict@ik.me');
    });

    it('should return the headline split around the highlighted words', () => {
      const { headline } = service.getPersonalInfo();
      const full = headline.lead + headline.highlight + headline.trail;

      expect(headline.highlight).toBe('répondent efficacement');
      expect(full).toBe('Des applications qui répondent efficacement aux besoins des utilisateurs.');
    });

    it('should return two intro paragraphs', () => {
      const { intro } = service.getPersonalInfo();

      expect(intro.length).toBe(2);
      expect(intro[0]).toContain('Angular et Spring Boot');
    });

    it('should return the photo caption', () => {
      const { photoCaption } = service.getPersonalInfo();

      expect(photoCaption.label).toBe('ONEM · détaché par SMALS');
      expect(photoCaption.since).toBe('Depuis juillet 2022');
    });

    it('should return social links with icon names', () => {
      const personal = service.getPersonalInfo();

      expect(personal.socialLinks.length).toBe(2);
      expect(personal.socialLinks[0].platform).toBe('LinkedIn');
      expect(personal.socialLinks[0].icon).toBe('linkedin');
      expect(personal.socialLinks[1].platform).toBe('GitHub');
      expect(personal.socialLinks[1].icon).toBe('github');
    });

    it('should keep asset paths relative (GitHub Pages)', () => {
      expect(service.getPersonalInfo().profileImage.startsWith('/')).toBeFalse();
    });
  });

  describe('getExperiences', () => {
    it('should return 3 professional experiences', () => {
      expect(service.getExperiences().length).toBe(3);
    });

    it('should return experiences in correct order (antichronological)', () => {
      const experiences = service.getExperiences();

      expect(experiences[0].company).toContain('ONEM');
      expect(experiences[0].endDate).toBe('Présent');
      expect(experiences[1].company).toContain('Province de Hainaut');
      expect(experiences[2].company).toContain('AXEL');
    });

    it('should use the corrected labels', () => {
      const experiences = service.getExperiences();

      expect(experiences[0].type).toBe('Temps plein · détaché par SMALS');
      expect(experiences[2].position).toBe('Fullstack Developer');
      expect(experiences[2].responsibilities[0]).toContain('Onyx, un outil');
    });
  });

  describe('getEducation', () => {
    it('should return 3 academic formations', () => {
      expect(service.getEducation().length).toBe(3);
    });

    it('should return education with correct institutions', () => {
      const education = service.getEducation();

      expect(education[0].institution).toContain('Condorcet');
      expect(education[0].distinction).toBe('Distinction');
      expect(education[1].institution).toContain('HELHa');
      expect(education[1].distinction).toBe('Distinction');
      expect(education[2].institution).toContain('IJJ');
      expect(education[2].distinction).toBeUndefined();
    });
  });

  describe('getSkills', () => {
    it('should return 6 skill categories in the expected order', () => {
      const categories = service.getSkills().map(s => s.category);

      expect(categories).toEqual([
        'Frontend',
        'Backend',
        'Bases de données',
        'DevOps & outillage',
        'Qualité & conception',
        'Agilité & gestion de projet'
      ]);
    });

    it('should keep every skill after regrouping, without duplicates', () => {
      const all = service.getSkills().flatMap(s => s.skills);

      expect(all.length).toBe(38);
      expect(new Set(all).size).toBe(all.length);
    });

    it('should include Frontend category', () => {
      const frontend = service.getSkills().find(s => s.category === 'Frontend');

      expect(frontend).toBeTruthy();
      expect(frontend!.skills).toContain('Angular 2+');
    });
  });

  describe('getInterests', () => {
    it('should return the 3 interests with their icons', () => {
      const interests = service.getInterests();

      expect(interests.map(i => i.title)).toEqual(['Lecture', 'Football', 'Technologie']);
      expect(interests.map(i => i.icon)).toEqual(['book', 'ball', 'chip']);
      interests.forEach(interest => expect(interest.text.length).toBeGreaterThan(0));
    });
  });

  describe('getAwards', () => {
    it('should return 9 certifications', () => {
      expect(service.getAwards().length).toBe(9);
    });

    it('should return awards with a name, an issuer and a URL', () => {
      service.getAwards().forEach(award => {
        expect(award.name).toBeTruthy();
        expect(award.issuer).toBeTruthy();
        expect(award.url.length).toBeGreaterThan(0);
      });
    });

    it('should set the expected issuers', () => {
      const issuers = service.getAwards().map(a => a.issuer);

      expect(issuers.slice(0, 7).every(i => i === 'Sololearn')).toBeTrue();
      expect(issuers[7]).toBe('MOOC.fi');
      expect(issuers[8]).toBe('Google');
    });

    it('should keep the Google certificate path relative', () => {
      const google = service.getAwards().find(a => a.issuer === 'Google');

      expect(google!.url).toBe('./certif/google_certificat_marketing.pdf');
    });

    it('should include Angular certification', () => {
      const angular = service.getAwards().find(a => a.name === 'Angular');

      expect(angular).toBeTruthy();
      expect(angular!.url).toContain('sololearn.com');
    });
  });
});
