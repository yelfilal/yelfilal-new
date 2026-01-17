import { CVData } from '../models/cv-data.model';

export const cvData: CVData = {
  personal: {
    firstName: 'Yassine',
    lastName: 'El FILALI',
    title: 'FULLSTACK DEVELOPER',
    description: `Passionné par l'apprentissage continu et le développement d'applications qui répondent efficacement aux besoins des utilisateurs.
J'ai une capacité d'apprentissage rapide et je travaille bien en équipe.
Je suis toujours à la recherche de défis qui me permettent de développer mes compétences et de contribuer encore plus efficacement.`,
    profileImage: './img/profile.jpg',
    socialLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/yelfilal',
        icon: 'fab fa-linkedin-in'
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/yelfilal',
        icon: 'fab fa-github'
      }
    ]
  },

  experiences: [
    {
      position: 'Fullstack Developer',
      company: 'ONEM - Office National de l\'Emploi',
      location: 'Bruxelles',
      type: 'Temps plein - Detaché par SMALS',
      startDate: 'Juillet 2022',
      endDate: 'Présent',
      responsibilities: [
        'Participation au projet eBox, avec des responsabilités incluant le développement front-end et back-end, l\'intégration de l\'API, et la maintenance du système.',
        'Maintenance et support d\'une vingtaine d\'applications et services.'
      ]
    },
    {
      position: 'Enseignant au sein de l\'IETS',
      company: 'Province de Hainaut',
      location: 'Charleroi',
      type: 'Temps partiel',
      startDate: 'Mars 2023',
      endDate: 'Juillet 2023',
      responsibilities: [
        'Cours hebdomadaire de bureautique avec encadrement et support aux étudiants.'
      ]
    },
    {
      position: 'FULLSTACK DEVELOPER',
      company: 'AXEL srl',
      location: 'Genappe',
      type: 'Stage',
      startDate: 'Février 2022',
      endDate: 'Mai 2022',
      responsibilities: [
        'Développement d\'Onyx un outil de gestion de projets pour l\'entreprise (projet de fin d\'études).'
      ]
    }
  ],

  education: [
    {
      institution: 'HELHa - Haute Ecole Louvain en Hainaut',
      degree: 'Bachelier en Informatique de Gestion',
      location: 'Montignies-sur-Sambre',
      startDate: 'Septembre 2019',
      endDate: 'Juin 2022',
      distinction: 'Distinction'
    },
    {
      institution: 'IJJ - Institut Jean Jaures',
      degree: 'Sciences Economiques',
      location: 'Charleroi',
      startDate: 'Septembre 2013',
      endDate: 'Juin 2019'
    }
  ],

  skills: [
    { category: 'Frontend', skills: ['HTML', 'CSS', 'Bootstrap', 'JS', 'Angular 2+', 'Angular Material'] },
    { category: 'Backend', skills: ['PHP', 'Java', 'Spring', 'Springboot', 'Hibernate', 'JPA', 'REST', 'SOLID'] },
    { category: 'Databases', skills: ['MSSQL', 'MySQL', 'PostgreSQL'] },
    { category: 'Build Tools', skills: ['Maven', 'Gradle', 'Flyway'] },
    { category: 'Testing', skills: ['JUnit', 'Cypress', 'Karate'] },
    { category: 'DevOps', skills: ['Openshift', 'Kubernetes', 'Skaffold', 'Helm', 'RabbitMQ'] },
    { category: 'Version Control & Tools', skills: ['GIT', 'Bitbucket', 'YouTrack', 'Jira', 'Trello'] },
    { category: 'Modeling', skills: ['UML'] },
    { category: 'Methodologies', skills: ['Méthodes agiles & Scrum'] }
  ],

  interests: `Durant mon temps libre, je plonge volontiers dans différents genres de lecture pour élargir mes horizons. Le football est mon sport préféré, j'adore suivre les matchs et discuter des stratégies avec des amis. La technologie me fascine aussi ; j'aime découvrir les dernières innovations et voir comment elles façonnent notre quotidien.`,

  awards: [
    { name: 'Angular', url: 'https://www.sololearn.com/en/certificates/CC-WALHEEOJ' },
    { name: 'Python for Beginners', url: 'https://www.sololearn.com/en/certificates/CT-3NTZ8P0W' },
    { name: 'Swift 4', url: 'https://www.sololearn.com/Certificate/CT-NPIGMCL9/jpg' },
    { name: 'Web Development Fundamentals', url: 'https://www.sololearn.com/Certificate/CT-YU2O14AW/pdf' },
    { name: 'PHP', url: 'https://www.sololearn.com/Certificate/CT-UF0RHB4N/jpg' },
    { name: 'JavaScript', url: 'https://www.sololearn.com/Certificate/CT-XIBAZTNN/png' },
    { name: 'HTML', url: 'https://www.sololearn.com/Certificate/CT-NBV8ICX5/jpg' },
    { name: 'Elements of AI', url: 'https://certificates.mooc.fi/validate/vp1zdxlv5i8' },
    { name: 'Fondamentaux du marketing numérique', url: './certif/google_certificat_marketing.pdf' }
  ]
};
