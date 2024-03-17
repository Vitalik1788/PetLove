import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { getAllNews, getNews } from '@/redux/news/newsOperation';
import {
  selectNews,
  selectIsLoading,
  selectTotalPages,
  selectVisibleNews,
  selectSearchFilter,
} from '@/redux/news/newsSelectors';
import { useEffect, useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import { Container, StyledItem, StyledList } from './NewsList.styled';
import Pagination from '../Pagination/Pagination';

export default function NewsList() {
  const [itemOffset, setItemOffset] = useState(1);
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectNews);
  const isLoading = useAppSelector(selectIsLoading);
  const totalPages = useAppSelector(selectTotalPages);
  const filterValue = useAppSelector(selectSearchFilter);
  // const visibleNews = useAppSelector(selectVisibleNews);

  useEffect(() => {
    const credentials = {
      filter: filterValue,
      page: itemOffset
    }
    dispatch(getNews(credentials));
  }, [dispatch, filterValue, itemOffset]);

  // useEffect(() => {
  //   const limit = totalPages * 6;
  //   dispatch(getAllNews(limit));
  // }, [dispatch, totalPages]);  

  const handlePageClick = (event: any) => {
    const pageCount = event.selected + 1;
    setItemOffset(pageCount);
  };

  return (
    !isLoading && (
      <Container>
        <StyledList>
          {news.length !== 0 &&
            news.map((news: any) => {
              return (
                <StyledItem key={news._id}>
                  <NewsItem data={news} />
                </StyledItem>
              );
            })}
        </StyledList>
        <Pagination
          handlePageClick={handlePageClick}
          totalPages={totalPages}
          itemOffset={itemOffset}
          setItemOffset={setItemOffset}
        />
      </Container>
    )
  );
}
