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
  locality: Locality;
}

export interface Header {
  firstName: string;
  lastName: string;
  email: string;
  subtitle: string;
  links: string[];
}

export interface Intro {
  oneLiner: string;
  about: string;
  skills: string;
  techs: string;
}

interface DegreeType {
  abbreviation: string;
  fullName: string;
  subject: string;
}

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

interface MonthYear {
  year: number;
  month: Month;
}

export interface GraduationDate {
  date: MonthYear;
  expected: boolean;
}

interface Degree {
  type: DegreeType;
  graduationDate: GraduationDate;
  gpa: number;
}

export interface SchoolEntry {
  name: string;
  address: Address;
  degrees: Degree[];
}

export interface Project {
  name: string;
  synopsis: string;
}

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

export interface CvData {
  header: Header;
  intro: Intro;
  education: SchoolEntry[];
  projects: Project[];
  employment: Employment[];
  address: Address;
}
