import Link from 'next/link';
import styled from '@emotion/styled';

export const LinksBox = styled.div`
  margin-right: 16px;

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;

export const LinkToLogIn = styled(Link)`
  padding: 15px 35px;
  margin-right: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.03em;
  text-align: center;
  color: #ffffff;
  background-color: #f6b83d;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  text-decoration: none;
`;

export const LinkToReg = styled(Link)`
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.03em;
  text-align: center;
  color: #f6b83d;
  background-color: #fff4df;
  border-radius: 30px;
  text-decoration: none;
`;
