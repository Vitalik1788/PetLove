import styled from '@emotion/styled';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 20px 0px;
`;

export const LogoImg = styled(Image)`
  max-width: 76px;
  height: auto;
`;

export const BurgerMenuIcon = styled(FiMenu)`
  width: 24px;
  height: auto;
`;
