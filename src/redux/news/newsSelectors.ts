import { RootState } from "../store";

export const selectAllNews = (state: RootState) => state.news.news;

export const selectPerPage = (state: RootState) => state.news.perPage;

export const selectTotalPages = (state: RootState) => state.news.totalPages;

export const selectIsLoading = (state: RootState) => state.news.isLoading;