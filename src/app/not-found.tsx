'use client';
import {
  HomeBtn,
  OpsText,
  Styled4,
  StyledBox,
  StyledCat,
  Wrapper,
} from './not-found.styled';
import cat from './assets/images/image404_cat.png';
import { useRouter } from 'next/navigation';

export default function Custom404() {
  const router = useRouter();

  return (
    <Wrapper>
      <StyledBox>
        <Styled4>4</Styled4>
        <StyledCat src={cat} alt="cat" priority={true} />
        <Styled4>4</Styled4>
      </StyledBox>
      <OpsText>Ooops! This page not found :(</OpsText>
      <HomeBtn onClick={() => router.push('/')}>To home page</HomeBtn>
    </Wrapper>
  );
}
