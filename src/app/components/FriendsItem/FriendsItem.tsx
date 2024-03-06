import {
  CardContainer,
  CardTitle,
  CompanyList,
  ImageStyled,
  StyledLink,
  TimeBox,
  TimeText,
} from './FriendsItem.styled';

export default function FriendsItem({ data }: any) {
  const timeWork = data.workDays?.find((e: any) => e.isOpen === true);

  return (
    <CardContainer>
      <ImageStyled src={data.imageUrl} alt={data.title} />
      <div>
        <CardTitle>{data.title}</CardTitle>
        <ul style={{ listStyle: 'none' }}>
          <CompanyList>
            <StyledLink href={data.url} target="_blank">
              <span style={{ color: 'rgba(38, 38, 38, 0.5)' }}>Email:</span>{' '}
              {data.email ? data.email : data.url}
            </StyledLink>
          </CompanyList>
          <CompanyList>
            <StyledLink href={data.addressUrl} target="_blank">
              <span style={{ color: 'rgba(38, 38, 38, 0.5)' }}>Address:</span>{' '}
              {data.address ? data.address : 'website only'}
            </StyledLink>
          </CompanyList>
          <CompanyList>
            <StyledLink href="">
              <span style={{ color: 'rgba(38, 38, 38, 0.5)' }}>Phone:</span>{' '}
              {data.phone ? data.phone : 'email only'}
            </StyledLink>
          </CompanyList>
        </ul>
        <TimeBox>
          <TimeText>{timeWork ? `${timeWork?.from}-${timeWork?.to}` : 'Day and night'}</TimeText>
        </TimeBox>
      </div>
    </CardContainer>
  );
}
