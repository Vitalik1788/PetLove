import styled from '@emotion/styled';

export const CardBox = styled.div`
  padding: 24px;
  background-color: #ffffff;
  border-radius: 16px;
`;

export const CardImg = styled.img`
  margin-bottom: 24px;
  display: block;
  width: 100%;
  height: 200px;
  border-radius: 16px;
`;

export const CardTitle = styled.h2`
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  color: #2b2b2a;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const StyledSvg = styled.svg`
  width: 16px;
  height: 16px;
`;

export const Popularity = styled.p`
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #2b2b2a;

  @media screen and (min-width: 768px) {
    line-height: 20px;
  }
`;

export const DetailTitle = styled.h3`
  font-family: inherit;
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.02em;
  text-align: left;
  color: rgba(38, 38, 38, 0.5);
`;

export const DetailValue = styled.p`
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #262626;
`;

export const Comment = styled.p`
  min-height: 36px;
  margin-bottom: 42px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #2b2b2a;
`;

export const ButtonStyled = styled.button`
  padding: 14px 80px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.03em;
  text-align: center;
  color: #ffffff;
  border-radius: 30px;
  background-color: #f6b83d;
  outline: none;
  border: transparent;

  @media screen and (min-width: 768px) {
    padding: 14px 78px;
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    padding: 14px 89px;
  }
`;

export const SVGBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  background-color: #fff4df;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const SVGHeart = styled.svg`  
  width: 18px;
  height: 18px;  
`;
