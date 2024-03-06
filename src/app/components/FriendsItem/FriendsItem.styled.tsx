import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
`;

export const ImageStyled = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  margin-right: 14px;

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
    margin-right: 16px;
  }
`;

export const CardTitle = styled.h2`
  margin-bottom: 14px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.04em;
  text-align: left;
  color: #262626;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 20px;
  }
`;

export const CompanyList = styled.li`
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #262626;
  text-decoration: none;
  cursor: pointer;
`;

export const TimeBox = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: fit-content;
  padding: 8px;
  border-radius: 30px;
  background-color: #fff4df;
`;

export const TimeText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #f6b83d;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
