export interface BlagPost {
  cover_image?: string;
  date: Date;
  description: string;
  id: number;
  markdown: string;
  shortTitle?: string;
  tags: string; // TODO string[]
  title: string;
}

export interface AddressRegion {
  fullName: string;
  abbreviation: string;
  country: string;
}

export interface Locality {
  name: string;
  state: AddressRegion;
  postalCode: string;
}

export interface Address {
  street?: string;
  line2?: string;
  locality: Locality;
}

// Header

export interface CvImageLink {
  imageUrl: string;
  name: string;
  target: string;
}

export interface Header {
  firstName: string;
  lastName: string;
  email: string;
  subtitle: string;
  links: CvImageLink[];
}

// Intro

export interface Intro {
  oneLiner: string;
  about: string;
  skills: string;
  techs: string;
}

// Date

export enum Month {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

export interface MonthYear {
  year: number;
  month: Month;
}

export interface GraduationDate {
  date: MonthYear;
  expected: boolean;
}

// Degree

interface DegreeType {
  abbreviation: string;
  fullName: string;
  subject: string;
}

interface Degree {
  type: DegreeType;
  graduationDate: GraduationDate;
  gpa: number;
}

// School

export interface SchoolEntry {
  name: string;
  address: Address;
  degrees: Degree[];
}

// Project

export interface Project {
  name: string;
  synopsis: string;
}

// Employment

// TODO encode that there is EITHER an endDate or its current?
export interface Employment {
  title: string;
  employer: string;
  beginDate: MonthYear;
  endDate?: MonthYear;
  current: boolean;
  address: Address;
  bullets: string[];
}

// Toplevel CvData

export interface CvData {
  header: Header;
  intro: Intro;
  education: SchoolEntry[];
  projects: Project[];
  employment: Employment[];
  address: Address;
}
