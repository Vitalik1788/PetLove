'use client';

import Title from '@/app/components/title/Title';
import { TitleSearchBox, Wrapper } from './page.styled';
import SearchField from '@/app/components/searchField/SearchField';

export default function News() {
  return (
    <Wrapper>
      <TitleSearchBox>
        <Title>News</Title>
        <SearchField />
      </TitleSearchBox>
    </Wrapper>
  );
}
