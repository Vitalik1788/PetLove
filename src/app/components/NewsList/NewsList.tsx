import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { getAllNews } from '@/redux/news/newsOperation';
import {
  selectAllNews,
  selectIsLoading,
  selectTotalPages,
} from '@/redux/news/newsSelectors';
import { useEffect, useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import { Container, StyledItem, StyledList } from './NewsList.styled';
import Pagination from '../Pagination/Pagination';

export default function NewsList() {
  const [itemOffset, setItemOffset] = useState(1);
  const dispatch = useAppDispatch();
  const allNews = useAppSelector(selectAllNews);
  const isLoading = useAppSelector(selectIsLoading);
  const totalPages = useAppSelector(selectTotalPages);

  useEffect(() => {
    dispatch(getAllNews(itemOffset));
  }, [dispatch, itemOffset]);

  const handlePageClick = (event: any) => {
    const pageCount = event.selected + 1;
    setItemOffset(pageCount);
  };

  return (
    !isLoading && (
      <Container>
        <StyledList>
          {allNews.length !== 0 &&
            allNews.map((news: any) => {
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
