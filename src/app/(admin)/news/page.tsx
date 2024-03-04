'use client';

import Title from '@/app/components/title/Title';
import { TitleSearchBox, Wrapper } from './page.styled';
import SearchField from '@/app/components/searchField/SearchField';
import NewsList from '@/app/components/NewsList/NewsList';

export default function News() {
  return (
    <div style={{ padding: '0px 20px' }}>
      <Wrapper>
        <TitleSearchBox>
          <Title>News</Title>
          <SearchField />
        </TitleSearchBox>
        <NewsList />
      </Wrapper>
    </div>
  );
}
