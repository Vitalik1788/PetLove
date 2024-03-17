import { createSlice } from '@reduxjs/toolkit';
import { getAllNews, getNews, setFilterValue } from './newsOperation';

interface INewsSlice {
  news: Array<object>;
  allNews: Array<object>;
  isLoading: boolean;
  perPage: number;
  totalPages: number;
  searchFilter: string | undefined;
}

const initialState: INewsSlice = {
  news: [],
  allNews: [],
  isLoading: false,
  perPage: 0,
  totalPages: 0,
  searchFilter: '',
};

const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.allNews = action.payload.results;
        state.isLoading = false;
      })
      .addCase(getAllNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload.results;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setFilterValue.fulfilled, (state, action) => {
        state.searchFilter = action.payload;
        state.isLoading = false;
      })
      .addCase(setFilterValue.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const newsReducer = NewsSlice.reducer;
