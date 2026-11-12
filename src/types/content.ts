export type SectionId = 'about' | 'skills' | 'process' | 'projects' | 'contacts';

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface ContactLink {
  id: 'telegram' | 'vk';
  label: string;
  handle: string;
  href: string;
}

export interface PersonalInfo {
  fullName: string;
  firstName: string;
  lastName: string;
  roles: string[];
  contacts: ContactLink[];
}

export interface SectionHeading {
  index: string;
  title: string;
}

export interface Hero {
  headline: string;
  lead: string;
  primaryAction: string;
  secondaryAction: string;
}

export interface About extends SectionHeading {
  paragraphs: string[];
  principles: string[];
}

export interface Skill {
  id: 'design' | 'development' | 'ai';
  title: string;
  description: string;
  focus: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Process extends SectionHeading {
  lead: string;
  steps: ProcessStep[];
}

export interface Projects extends SectionHeading {
  status: string;
  description: string;
  caseStructure: { title: string; description: string }[];
  action: string;
}

export interface Contact extends SectionHeading {
  headline: string;
  description: string;
}
