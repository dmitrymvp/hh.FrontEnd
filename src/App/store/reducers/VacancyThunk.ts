import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchVacancyList = createAsyncThunk(
  'vacancy/fetchVacancy',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axios.get(
        'https://api.hh.ru/vacancies?industry=7&professional_role=96',
      );
      return responce.data.items.map((item) => ({
        id: item.id,
        name: item.name,
        area: item.area.name,
        salaryMin: item.salary?.from,
        salaryMax: item.salary?.to,
        experience: item.experience?.name,
      }));
    } catch (e) {
      return rejectWithValue('Не удалось загрузить список вакансий');
    }
  },
);
