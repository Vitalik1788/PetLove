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
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useAppDispatch();
  const allNews = useAppSelector(selectAllNews);
  const isLoading = useAppSelector(selectIsLoading);
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = allNews.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allNews.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % allNews.length;
    setItemOffset(newOffset);
  };


  return (
    !isLoading && (
      <Container>
        <StyledList>
          {currentItems.length !== 0 &&
            currentItems.map((news: any) => {
              return (
                <StyledItem key={news._id}>
                  <NewsItem data={news} />
                </StyledItem>
              );
            })}
        </StyledList>
        <Pagination
          pageCount={pageCount}
          handlePageClick={handlePageClick}
          itemOffset={itemOffset}
        />
      </Container>
    )
  );
}
