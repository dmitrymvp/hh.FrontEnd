import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../shared/api/api';
import type {
  FetchVacancyListType,
  Vacancy,
} from '../../../shared/types/types';
import type { RootState } from '../store';

export const fetchVacancyList = createAsyncThunk<
  FetchVacancyListType,
  void,
  { state: RootState }
>('vacancy/fetchVacancy', async (_, { rejectWithValue, getState }) => {
  const state = getState();
  const { city, currentPage, skills, searchQuery } = state.vacancyReducer;

  try {
    const params = new URLSearchParams();
    params.append('per_page', '10');
    params.append('page', (currentPage - 1).toString());
    params.append('industry', '7');
    params.append('professional_role', '96');
    params.append('search_field', 'name');
    params.append('search_field', 'company_name');
    params.append('search_field', 'description');
    params.append('area', city);

    const skillsQuery =
      skills && skills.length
        ? skills.map((skill: string) => `"${skill}"`).join(' AND ')
        : '';

    const textQuery =
      searchQuery && skillsQuery
        ? `"${searchQuery.trim()}" AND ${skillsQuery}`
        : searchQuery && !skillsQuery
          ? `"${searchQuery.trim()}"`
          : `${skillsQuery}`;

    params.append('text', textQuery);

    const response = await axios.get(`${BASE_URL}?${params}`);
    return {
      vacancyItem: response.data.items.map((item: any) => ({
        id: item.id,
        name: item.name,
        area: item.area.name,
        salaryMin: item.salary?.from,
        salaryMax: item.salary?.to,
        experience: item.experience?.name,
        employerName: item.employer?.name,
        workFormat: item.work_format[0]?.id,
        vacancyUrl: item.alternate_url,
      })),
      pages: response.data.pages,
    };
  } catch (e) {
    return rejectWithValue('Не удалось загрузить список вакансий');
  }
});

export const fetchVacancyById = createAsyncThunk<Vacancy, string>(
  'vacancy/fetchVacancyById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.hh.ru/vacancies/${id}`);
      const data = response.data;

      const vacancyItem = {
        id: data.id,
        name: data.name,
        area: data.area.name,
        salaryMin: data.salary?.from,
        salaryMax: data.salary?.to,
        experience: data.experience?.name,
        employerName: data.employer?.name,
        workFormat: data.work_format[0]?.id,
        vacancyUrl: data.alternate_url,
        vacancyDescription: data.description,
      };
      return vacancyItem;
    } catch (e) {
      return rejectWithValue('Не удалось загрузить вакансию');
    }
  },
);
