export enum WorkFormat {
  ON_SITE = 'ON_SITE',
  HYBRID = 'HYBRID',
  REMOTE = 'REMOTE',
}

export interface Vacancy {
  id?: number;
  name: string;
  area: string;
  salaryMin?: number | null;
  salaryMax?: number | null;
  experience?: string;
  employerName?: string;
  workFormat?: WorkFormat;
  vacancyUrl: string;
  requirement?: string;
  responsibility?: string;
}
