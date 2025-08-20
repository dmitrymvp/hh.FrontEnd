import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../shared/api/api';
import type { Vacancy } from '../../../shared/types/types';
import type { RootState } from '../store';

interface FetchVacancyListType {
  vacancyItem: Vacancy[];
  pages: number;
}

export const fetchVacancyList = createAsyncThunk<
  FetchVacancyListType,
  void,
  { state: RootState }
>('vacancy/fetchVacancy', async (_, { rejectWithValue, getState }) => {
  const state = getState();
  const { searchInput, city, currentPage, skills } = state.vacancyReducer;

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
      searchInput && skillsQuery
        ? `"${searchInput.trim()}" AND ${skillsQuery}`
        : searchInput && !skillsQuery
          ? `"${searchInput.trim()}"`
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
        requirement: item.snippet?.requirement,
        responsibility: item.snippet?.responsibility,
      })),
      pages: response.data.pages,
    };
  } catch (e) {
    return rejectWithValue('Не удалось загрузить список вакансий');
  }
});
