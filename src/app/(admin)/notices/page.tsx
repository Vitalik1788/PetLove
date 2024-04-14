'use client';

import Title from "@/app/components/title/Title";
import { Wrapper } from "./page.styled";
import NoticesFilters from "@/app/components/NoticesFilters/NoticesFilters";


export default function Notices() {
  return (
    <Wrapper>
      <Title>Find your favorite pet</Title>
      <NoticesFilters />
    </Wrapper>
  );
}