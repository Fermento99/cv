interface Profile {
  name: string;
  url: string;
}

interface Workplace {
  organization: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

interface School {
  name: string;
  title: string;
  field: string;
  score: string;
  startDate: string;
  endDate: string;
}

interface Project {
  name: string;
  link: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface ResumeType {
  name: string;
  workTitle: string;
  email: string;
  summary: string;
  profiles: Profile[];
  work: Workplace[];
  education: School[];
  projects: Project[];
  programmingLanguages: string[];
  frameworks: string[];
  databases: string[];
  languages: Language[];
  software: string[];
  hobbies: string[];
}
