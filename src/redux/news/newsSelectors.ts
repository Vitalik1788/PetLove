import { RootState } from '../store';

export const selectNews = (state: RootState) => state.news.news;

export const selectAllNews = (state: RootState) => state.news.allNews;

export const selectPerPage = (state: RootState) => state.news.perPage;

export const selectTotalPages = (state: RootState) => state.news.totalPages;

export const selectIsLoading = (state: RootState) => state.news.isLoading;

export const selectSearchFilter = (state: RootState) => state.news.searchFilter;

export const selectVisibleNews = (state: RootState) => {
  const allNews = selectAllNews(state);
  const news = selectNews(state);
  const filter = selectSearchFilter(state)?.toLowerCase().trim();
  

  if (filter === '' || filter === undefined) {
    return news;
  } else  {
    return allNews.filter((el: any) => el.title.toLowerCase().includes(filter));
  }

};
