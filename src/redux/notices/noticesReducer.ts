import { createSlice } from '@reduxjs/toolkit';
import {
  getCategory,
  getGender,
  getNotices,
  getSpecies,
} from './noticesOperation';

interface INoticesSlice {
  noticesData: Array<object>;
  category: Array<string>;
  sex: Array<string>;
  species: Array<string>;
  isLoading: boolean;
}

const initialState: INoticesSlice = {
  noticesData: [],
  category: [],
  sex: [],
  species: [],
  isLoading: false,
};

const NoticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.isLoading = false;
      })
      .addCase(getGender.fulfilled, (state, action) => {
        state.sex = action.payload;
        state.isLoading = false;
      })
      .addCase(getSpecies.fulfilled, (state, action) => {
        state.species = action.payload;
        state.isLoading = false;
      })
      .addCase(getNotices.fulfilled, (state, action) => {
        state.noticesData = action.payload.results;
        state.isLoading = false;
      }),
});

export const noticesReducer = NoticesSlice.reducer;
