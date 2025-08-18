export enum WorkFormat {
  ON_SITE = 'ОФИС',
  HYBRID = 'ГИБРИД',
  REMOTE = 'УДАЛЁННО',
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
}
