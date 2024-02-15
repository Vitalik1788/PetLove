import styled from '@emotion/styled';
import Image from 'next/image';

export const ImageBox = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 1216px;
  }
`;

export const IMGMobile = styled(Image)`
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const IMGTablet = styled(Image)`
  width: 100%;
  height: auto;
  display: none;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    display: block;
  }
`;

export const IMGDesktop = styled(Image)`
  width: 100%;
  height: auto;

  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
