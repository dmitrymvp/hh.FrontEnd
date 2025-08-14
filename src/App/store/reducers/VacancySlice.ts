import { createSlice } from '@reduxjs/toolkit';
import { fetchVacancyList } from './VacancyThunk';

interface VacancyState {
  vacancyList: [];
  status: 'idle' | 'loading' | 'success' | 'error';
  error: string;
}

export const initialState: VacancyState = {
  vacancyList: [],
  status: 'idle',
  error: '',
};

export const vacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancyList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVacancyList.fulfilled, (state, action) => {
        state.status = 'success';
        state.vacancyList = action.payload;
      })
      .addCase(fetchVacancyList.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default vacancySlice.reducer;
