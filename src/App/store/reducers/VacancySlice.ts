import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchVacancyById, fetchVacancyList } from './VacancyThunk';
import type { Vacancy } from '../../../shared/types/types';

export interface VacancyState {
  vacancyList: Vacancy[];
  status: 'idle' | 'loading' | 'success' | 'error';
  error: string;
  skills: Array<string>;
  skillInput: string;
  searchInput: string;
  searchQuery: string;
  city: string;
  pages: number;
  currentPage: number;
  currentVacancy: Vacancy | null;
}

export const initialState: VacancyState = {
  vacancyList: [],
  status: 'idle',
  error: '',
  skills: ['React', 'TypeScript', 'Redux'],
  skillInput: '',
  searchInput: '',
  searchQuery: '',
  city: '113',
  pages: 0,
  currentPage: 1,
  currentVacancy: null,
};

export const vacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {
    setSkillInput(state, action: PayloadAction<string>) {
      state.skillInput = action.payload;
    },
    addSkill(state) {
      state.skillInput = state.skillInput.trim();

      if (state.skillInput !== '') {
        state.skills.push(state.skillInput);
        state.skillInput = '';
      }
    },
    startSkills(state, action) {
      state.skills = action.payload;
    },
    removeSkill(state, action: PayloadAction<string>) {
      state.skills = state.skills.filter((skill) => skill !== action.payload);
    },
    setSearchInput(state, action: PayloadAction<string>) {
      state.searchInput = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancyList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVacancyList.fulfilled, (state, action) => {
        state.status = 'success';
        state.vacancyList = action.payload.vacancyItem;
        state.pages = action.payload.pages;
      })
      .addCase(fetchVacancyList.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchVacancyById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVacancyById.fulfilled, (state, action) => {
        state.status = 'success';
        state.currentVacancy = action.payload;
      })
      .addCase(fetchVacancyById.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const {
  setSkillInput,
  addSkill,
  removeSkill,
  setSearchInput,
  setCity,
  setCurrentPage,
  startSkills,
  setSearchQuery,
} = vacancySlice.actions;

export default vacancySlice.reducer;
