import {
  CardContainer,
  CardTitle,
  ImageStyled,
  StyledLink,
  TimeBox,
  TimeText,
} from './FriendsItem.styled';

export default function FriendsItem({ data }: any) {
  console.log(data);

  return (
    <CardContainer>
      <ImageStyled src={data.imageUrl} alt={data.title} />
      <div>
        <CardTitle>{data.title}</CardTitle>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <StyledLink href={data.url} target="_blank">
              <span style={{ color: 'rgba(38, 38, 38, 0.5)' }}>Email:</span>{' '}
              {data.email ? data.email : data.url}
            </StyledLink>
          </li>
          <li>
            <StyledLink href={data.addressUrl} target="_blank">
              <span style={{ color: 'rgba(38, 38, 38, 0.5)' }}>Address:</span>{' '}
              {data.address ? data.address : 'website only'}
            </StyledLink>
          </li>
          <li>
            <StyledLink href="">
              <span style={{ color: 'rgba(38, 38, 38, 0.5)' }}>Phone:</span>{' '}
              {data.phone ? data.phone : 'email only'}
            </StyledLink>
          </li>
        </ul>
        <TimeBox>
          <TimeText>8:00 - 19:00</TimeText>
        </TimeBox>
      </div>
    </CardContainer>
  );
}
