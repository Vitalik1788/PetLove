import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
`;

export const ImageStyled = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  margin-right: 14px;
`;

export const CompanyTextItem = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
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
`;

export const CompanyList = styled.li``;

export const StyledLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #262626;
  text-decoration: none;
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
`;
