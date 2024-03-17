import { RootState } from '../store';

export const selectNews = (state: RootState) => state.news.news;

export const selectPerPage = (state: RootState) => state.news.perPage;

export const selectTotalPages = (state: RootState) => state.news.totalPages;

export const selectIsLoading = (state: RootState) => state.news.isLoading;

export const selectSearchFilter = (state: RootState) => state.news.searchFilter;


