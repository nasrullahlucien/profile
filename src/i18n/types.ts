export type SupportedLanguage = 'th' | 'en' | 'ms';

export interface TranslationSchema {
  common: {
    skipToContent: string;
    modalClose: string;
    openInNewTab: string;
    viewSource: string;
    placeholderBadge: string;
    backToTop: string;
    allRightsReserved: string;
    launchLab: string;
    downloadFile: string;
  };
  nav: {
    brandName: string;
    about: string;
    experience: string;
    education: string;
    skills: string;
    projects: string;
    academic: string;
    documents: string;
    contact: string;
    languageLabel: string;
    menuToggleLabel: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    summary: string;
    exploreLabs: string;
    downloadCv: string;
    profilePhotoAlt: string;
    fastFacts: {
      role: { label: string; value: string };
      org: { label: string; value: string };
      education: { label: string; value: string };
      honors: { label: string; value: string };
      focus: { label: string; value: string };
    };
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
  };
  experience: {
    title: string;
    subtitle: string;
    teachingHeading: string;
    mentoringHeading: string;
    roles: {
      teacher: string;
      tutor: string;
    };
    schools: {
      bacho: string;
      khamphee: string;
      thesaban4: string;
      privateTutor: string;
    };
    subjects: {
      bacho: string;
      khamphee: string;
      thesaban4: string;
      privateTutor: string;
    };
    mentoring: {
      scienceProject: string;
      roboticsCoding: string;
      scienceQuiz: string;
      bambooRobot: string;
      studentCouncil: string;
    };
  };
  education: {
    title: string;
    subtitle: string;
    masterDegree: string;
    masterInstitution: string;
    bachelorDegree: string;
    bachelorInstitution: string;
    bachelorHonors: string;
  };
  skills: {
    title: string;
    subtitle: string;
    webdevTitle: string;
    webdevDesc: string;
    edtechTitle: string;
    edtechDesc: string;
    backendTitle: string;
    backendDesc: string;
    devopsTitle: string;
    devopsDesc: string;
  };
  projects: {
    title: string;
    subtitle: string;
    playLab: string;
    viewGithub: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
  };
  academic: {
    title: string;
    subtitle: string;
    item1Title: string;
    item1Org: string;
    item2Title: string;
    item2Org: string;
    training1Title: string;
    training1Org: string;
  };
  documents: {
    title: string;
    subtitle: string;
    cvTitle: string;
    cvDesc: string;
    portfolioTitle: string;
    portfolioDesc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailButton: string;
    socialHeading: string;
    directEmailLabel: string;
  };
  social: {
    facebook: string;
    instagram: string;
    tiktok: string;
    github: string;
  };
}
