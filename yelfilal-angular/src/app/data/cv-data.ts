import { CVData } from '../models/cv-data.model';

export const cvData: CVData = {
  personal: {
    firstName: 'Yassine',
    lastName: 'El FILALI',
    title: 'Java Fullstack Engineer',
    headline: {
      lead: 'Des applications qui ',
      highlight: 'répondent efficacement',
      trail: ' aux besoins des utilisateurs.'
    },
    intro: [
      'Passionné par l\'apprentissage continu, je développe en Angular et Spring Boot, du frontend à l\'intégration d\'API.',
      'J\'ai une capacité d\'apprentissage rapide et je travaille bien en équipe. Je suis toujours à la recherche de défis qui me permettent de développer mes compétences et de contribuer encore plus efficacement.'
    ],
    email: 'yelfilal.ict@ik.me',
    photoCaption: {
      label: 'ONEM · détaché par SMALS',
      since: 'Depuis juillet 2022'
    },
    profileImage: './img/profile.jpg',
    socialLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/yelfilal',
        icon: 'linkedin'
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/yelfilal',
        icon: 'github'
      }
    ]
  },

  experiences: [
    {
      position: 'Fullstack Developer',
      company: 'ONEM - Office National de l\'Emploi',
      location: 'Bruxelles',
      type: 'Temps plein · détaché par SMALS',
      startDate: 'Juillet 2022',
      endDate: 'Présent',
      responsibilities: [
        'Contribution à la mise en place d\'une API qui met les données de référence à disposition des différentes équipes métier.',
        'Participation au projet eBox : développement frontend et backend, intégration de l\'API et maintenance de l\'application.',
        'Maintenance et support d\'une quarantaine d\'applications et services.'
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
      position: 'Fullstack Developer',
      company: 'AXEL srl',
      location: 'Genappe',
      type: 'Stage',
      startDate: 'Février 2022',
      endDate: 'Mai 2022',
      responsibilities: [
        'Développement d\'Onyx, un outil de gestion de projets pour l\'entreprise.'
      ]
    }
  ],

  education: [
    {
      institution: 'HEPH-Condorcet - Haute Ecole Provinciale de Hainaut',
      degree: 'Bachelier de spécialisation en Sécurité des réseaux et systèmes informatiques',
      location: 'Froyennes',
      startDate: 'Septembre 2025',
      endDate: 'Juin 2026',
      distinction: 'Distinction'
    },
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
    // Dans chaque groupe, les compétences liées sont côte à côte (ex. Java → Spring → JPA → Hibernate)
    { category: 'Frontend', skills: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Angular 2+', 'Angular Material'] },
    { category: 'Backend', skills: ['Java', 'Spring', 'Springboot', 'JPA', 'Hibernate', 'REST', 'RabbitMQ', 'PHP'] },
    { category: 'Bases de données', skills: ['PostgreSQL', 'MySQL', 'MSSQL', 'Flyway'] },
    { category: 'DevOps & outillage', skills: ['Openshift', 'Kubernetes', 'Helm', 'Skaffold', 'Maven', 'Gradle', 'GIT', 'GitHub', 'Bitbucket', 'Azure DevOps'] },
    { category: 'Qualité & conception', skills: ['JUnit', 'Cypress', 'Karate', 'SOLID', 'UML'] },
    { category: 'Agilité & gestion de projet', skills: ['Méthodes agiles', 'Scrum', 'Jira', 'YouTrack', 'Trello'] }
  ],

  interests: [
    {
      title: 'Lecture',
      text: 'Différents genres de lecture pour élargir mes horizons.',
      icon: 'book'
    },
    {
      title: 'Football',
      text: 'Mon sport préféré : suivre les matchs et discuter des stratégies avec des amis.',
      icon: 'ball'
    },
    {
      title: 'Technologie',
      text: 'Découvrir les dernières innovations et voir comment elles façonnent notre quotidien.',
      icon: 'chip'
    }
  ],

  awards: [
    { name: 'Angular', issuer: 'Sololearn', url: 'https://www.sololearn.com/en/certificates/CC-WALHEEOJ' },
    { name: 'Python for Beginners', issuer: 'Sololearn', url: 'https://www.sololearn.com/en/certificates/CT-3NTZ8P0W' },
    { name: 'Swift 4', issuer: 'Sololearn', url: 'https://www.sololearn.com/Certificate/CT-NPIGMCL9/jpg' },
    { name: 'Web Development Fundamentals', issuer: 'Sololearn', url: 'https://www.sololearn.com/Certificate/CT-YU2O14AW/pdf' },
    { name: 'PHP', issuer: 'Sololearn', url: 'https://www.sololearn.com/Certificate/CT-UF0RHB4N/jpg' },
    { name: 'JavaScript', issuer: 'Sololearn', url: 'https://www.sololearn.com/Certificate/CT-XIBAZTNN/png' },
    { name: 'HTML', issuer: 'Sololearn', url: 'https://www.sololearn.com/Certificate/CT-NBV8ICX5/jpg' },
    { name: 'Elements of AI', issuer: 'MOOC.fi', url: 'https://certificates.mooc.fi/validate/vp1zdxlv5i8' },
    { name: 'Fondamentaux du marketing numérique', issuer: 'Google', url: './certif/google_certificat_marketing.pdf' }
  ]
};
