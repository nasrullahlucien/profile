export interface SocialLink {
  id: string;
  platform: 'facebook' | 'instagram' | 'tiktok' | 'github';
  url: string;
  labelKey: string;
}

export interface TeachingExperienceItem {
  id: string;
  dateRange: string; // Placeholder [START]–[END]
  schoolKey: string;
  roleKey: string;
  subjectsKey: string;
}

export interface MentoringItem {
  id: string;
  titleKey: string;
  organizationKey?: string;
}

export interface EducationItem {
  id: string;
  period: string; // Placeholder [YEAR]
  degreeKey: string;
  institutionKey: string;
  honorsKey?: string;
}

export interface SkillCategory {
  id: string;
  titleKey: string;
  descriptionKey: string;
  skills: string[];
}

export interface ProjectLabItem {
  id: string;
  slug: string;
  labUrl: string;
  githubUrl?: string;
  tags: string[];
  titleKey: string;
  descriptionKey: string;
}

export interface AcademicWorkItem {
  id: string;
  year: string; // Placeholder [YEAR]
  titleKey: string;
  organizationKey: string;
  url?: string;
}

export interface DocumentItem {
  id: string;
  filePath: string;
  fileType: string;
  fileSize: string; // Placeholder [FILE SIZE]
  titleKey: string;
  descriptionKey: string;
}

export interface SiteContent {
  author: {
    namePlaceholder: string;
    emailPlaceholder: string;
    profilePhotoPath: string;
    cvPath: string;
  };
  socials: SocialLink[];
  teachingExperience: TeachingExperienceItem[];
  mentoringExperience: MentoringItem[];
  education: EducationItem[];
  skillCategories: SkillCategory[];
  projects: ProjectLabItem[];
  academicWorks: AcademicWorkItem[];
  documents: DocumentItem[];
}
