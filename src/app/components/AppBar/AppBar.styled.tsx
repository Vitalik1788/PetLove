import styled from '@emotion/styled';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';

export const MainWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 28px 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #f6b83d;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding-left: 32px;
    padding-right: 32px;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    padding-left: 64px;
    padding-right: 64px;
  }
`;

export const RestLayoutWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 28px 0px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #f9f9f9;

  @media screen and (max-width: 374px) {
    max-width: 335px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 0px;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    padding-left: 64px;
    padding-right: 64px;
  }
`;

export const AppBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImg = styled(Image)`
  max-width: 76px;
  height: auto;

  @media screen and (min-width: 768px) {
    max-width: 106px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const BurgerMenuIcon = styled(FiMenu)`
  width: 24px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 30px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
