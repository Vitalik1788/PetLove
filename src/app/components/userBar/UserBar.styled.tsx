import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSVG = styled.svg`
  width: 40px;
  height: 40px;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    margin-right: 8px;
  }
`;

export const UserName = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-right: 18px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.03em;
    text-align: left;
    color: #ffffff;
  }
`;

export const LogoutBtn = styled.button`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    margin-right: 8px;
    padding: 15px 35px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.03em;
    text-align: left;
    color: #ffffff;
    background-color: #f6b83d;
    outline: none;
    border: transparent;
  }
`;
