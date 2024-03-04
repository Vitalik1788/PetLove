import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { getAllNews } from '@/redux/news/newsOperation';
import { selectAllNews } from '@/redux/news/newsSelectors';
import { useEffect } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import { Container, StyledItem, StyledList } from './NewsList.styled';

export default function NewsList() {
  const dispatch = useAppDispatch();
  const allNews = useAppSelector(selectAllNews);

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  return (
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
    </Container>
  );
}
