import styled from '@emotion/styled';

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 190px;
  border-radius: 15px;

  @media screen and (min-width: 768px) {
    height: 226px;
  }
`;

export const CardTitle = styled.h2`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.03em;
  text-align: left;
  color: #262626;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
    font-size: 20px;
    line-height: 1.3;
    min-height: 52px;
  }
`;

export const CardText = styled.p`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: left;
  color: #262626;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    margin-top: 14px;
    min-height: 80px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const DateCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
  }
`;

export const CardDate = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: left;
  color: rgba(38, 38, 38, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const ReadMore = styled.a`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: left;
  color: #f6b83d;
  text-decoration: underline;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
