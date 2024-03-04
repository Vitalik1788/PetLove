import { RootState } from "../store";

export const selectAllNews = (state: RootState) => state.news.news;