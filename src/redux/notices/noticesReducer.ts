import { createSlice } from "@reduxjs/toolkit";
import { getCategory, getGender } from "./noticesOperation";

interface INoticesSlice {
  category: Array<string>;
  sex: Array<string>;
  isLoading: boolean;
}

const initialState: INoticesSlice = {
  category: [],
  sex: [],
  isLoading: false,
}

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
      }),
});

export const noticesReducer = NoticesSlice.reducer;

