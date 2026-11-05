import type { SiteContent } from './types';
import { withBase } from '../utils/paths';

export const siteContent: SiteContent = {
  author: {
    namePlaceholder: '[YOUR NAME]',
    emailPlaceholder: '[YOUR EMAIL]',
    profilePhotoPath: withBase('images/profile-placeholder.svg'),
    cvPath: withBase('files/cv.pdf'),
  },
  socials: [
    {
      id: 'facebook',
      platform: 'facebook',
      url: 'https://m.facebook.com/nasrullah.nt/',
      labelKey: 'social.facebook',
    },
    {
      id: 'instagram',
      platform: 'instagram',
      url: 'https://www.instagram.com/nasrun_lucien/',
      labelKey: 'social.instagram',
    },
    {
      id: 'tiktok',
      platform: 'tiktok',
      url: 'https://www.tiktok.com/@nut.lucien?_r=1&_t=ZS-9B8d5Phoja8',
      labelKey: 'social.tiktok',
    },
    {
      id: 'github',
      platform: 'github',
      url: 'https://github.com/nasrullahlucien/',
      labelKey: 'social.github',
    },
  ],
  teachingExperience: [
    {
      id: 'bacho-witthaya',
      dateRange: '[START]–[END]',
      schoolKey: 'exp.school.bacho',
      roleKey: 'exp.role.teacher',
      subjectsKey: 'exp.subjects.bacho',
    },
    {
      id: 'khamphee-witthaya',
      dateRange: '[START]–[END]',
      schoolKey: 'exp.school.khamphee',
      roleKey: 'exp.role.teacher',
      subjectsKey: 'exp.subjects.khamphee',
    },
    {
      id: 'thesaban-4',
      dateRange: '[START]–[END]',
      schoolKey: 'exp.school.thesaban4',
      roleKey: 'exp.role.teacher',
      subjectsKey: 'exp.subjects.thesaban4',
    },
    {
      id: 'private-tutor',
      dateRange: '[START]–[END]',
      schoolKey: 'exp.school.privateTutor',
      roleKey: 'exp.role.tutor',
      subjectsKey: 'exp.subjects.privateTutor',
    },
  ],
  mentoringExperience: [
    {
      id: 'mentoring-project',
      titleKey: 'exp.mentor.scienceProject',
    },
    {
      id: 'mentoring-robotics',
      titleKey: 'exp.mentor.roboticsCoding',
    },
    {
      id: 'mentoring-competition',
      titleKey: 'exp.mentor.scienceQuiz',
    },
    {
      id: 'mentoring-bamboo-robot',
      titleKey: 'exp.mentor.bambooRobot',
    },
    {
      id: 'mentoring-council',
      titleKey: 'exp.mentor.studentCouncil',
      organizationKey: 'exp.school.bacho',
    },
  ],
  education: [
    {
      id: 'edu-master',
      period: '[YEAR]',
      degreeKey: 'edu.master.degree',
      institutionKey: 'edu.master.institution',
    },
    {
      id: 'edu-bachelor',
      period: '[YEAR]',
      degreeKey: 'edu.bachelor.degree',
      institutionKey: 'edu.bachelor.institution',
      honorsKey: 'edu.bachelor.honors',
    },
  ],
  skillCategories: [
    {
      id: 'modern-web-dev',
      titleKey: 'skills.webdev.title',
      descriptionKey: 'skills.webdev.description',
      skills: ['TypeScript', 'Vite', 'Tailwind CSS', 'Modular Web Architecture'],
    },
    {
      id: 'interactive-edtech',
      titleKey: 'skills.edtech.title',
      descriptionKey: 'skills.edtech.description',
      skills: ['HTML5 Canvas/DOM', 'Vanilla JavaScript', 'Interactive Media', 'Virtual Labs'],
    },
    {
      id: 'backend-automation',
      titleKey: 'skills.backend.title',
      descriptionKey: 'skills.backend.description',
      skills: ['Google Apps Script', 'Google Sheets Integration', 'Google Docs Automation'],
    },
    {
      id: 'devops-cicd',
      titleKey: 'skills.devops.title',
      descriptionKey: 'skills.devops.description',
      skills: ['Git', 'GitHub', 'GitHub Actions CI/CD', 'GitHub Pages'],
    },
  ],
  projects: [
    {
      id: 'lab-physics-motion',
      slug: 'physics-simulation',
      labUrl: withBase('labs/physics-simulation/index.html'),
      githubUrl: 'https://github.com/nasrullahlucien/profile',
      tags: ['Physics', 'Interactive Lab', 'Canvas'],
      titleKey: 'projects.item1.title',
      descriptionKey: 'projects.item1.description',
    },
    {
      id: 'lab-earth-space',
      slug: 'earth-space-orbital',
      labUrl: withBase('labs/earth-space-orbital/index.html'),
      githubUrl: 'https://github.com/nasrullahlucien/profile',
      tags: ['Earth & Space', 'Simulation', 'Science EdTech'],
      titleKey: 'projects.item2.title',
      descriptionKey: 'projects.item2.description',
    },
    {
      id: 'lab-virtual-apparatus',
      slug: 'science-apparatus-tool',
      labUrl: withBase('labs/science-apparatus-tool/index.html'),
      githubUrl: 'https://github.com/nasrullahlucien/profile',
      tags: ['Science Tools', 'Virtual Experiment', 'EdTech'],
      titleKey: 'projects.item3.title',
      descriptionKey: 'projects.item3.description',
    },
  ],
  academicWorks: [
    {
      id: 'academic-1',
      year: '[YEAR]',
      titleKey: 'academic.item1.title',
      organizationKey: 'academic.item1.org',
    },
    {
      id: 'academic-2',
      year: '[YEAR]',
      titleKey: 'academic.item2.title',
      organizationKey: 'academic.item2.org',
    },
    {
      id: 'training-1',
      year: '[YEAR]',
      titleKey: 'academic.training1.title',
      organizationKey: 'academic.training1.org',
    },
  ],
  documents: [
    {
      id: 'doc-cv',
      filePath: withBase('files/cv.pdf'),
      fileType: 'PDF',
      fileSize: '[FILE SIZE]',
      titleKey: 'docs.cv.title',
      descriptionKey: 'docs.cv.description',
    },
    {
      id: 'doc-portfolio',
      filePath: withBase('files/cv.pdf'),
      fileType: 'PDF',
      fileSize: '[FILE SIZE]',
      titleKey: 'docs.portfolio.title',
      descriptionKey: 'docs.portfolio.description',
    },
  ],
};
