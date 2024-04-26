import {
  ButtonStyled,
  CardBox,
  CardImg,
  CardTitle,
  Comment,
  DetailTitle,
  DetailValue,
  Popularity,
  SVGBox,
  SVGHeart,
  StyledSvg,
} from './NoticesItem.styled';

export default function NoticesItem({ notices }: any) {
  return (
    <CardBox>
      <CardImg src={notices.imgURL} alt={notices.title} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}
      >
        <CardTitle>{notices.title}</CardTitle>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <StyledSvg>
            <use href="/sprite.svg#icon-star"></use>
          </StyledSvg>
          <Popularity>{notices.popularity}</Popularity>
        </div>
      </div>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '13px',
          marginBottom: '16px',
        }}
      >
        <li>
          <DetailTitle>Name</DetailTitle>
          <DetailValue>{notices.name}</DetailValue>
        </li>
        <li>
          <DetailTitle>Birthday</DetailTitle>
          <DetailValue>{notices.birthday.replace(/[\-\/]/g, '.')}</DetailValue>
        </li>
        <li>
          <DetailTitle>Sex</DetailTitle>
          <DetailValue>{notices.sex}</DetailValue>
        </li>
        <li>
          <DetailTitle>Species</DetailTitle>
          <DetailValue>{notices.species}</DetailValue>
        </li>
        <li>
          <DetailTitle>Category</DetailTitle>
          <DetailValue>{notices.category}</DetailValue>
        </li>
      </ul>
      <Comment>{notices.comment}</Comment>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap:'10px'}}>
        <ButtonStyled>Learn more</ButtonStyled>
        <SVGBox>
          <SVGHeart>
          <use href="/sprite.svg#icon-heartheart"></use>
        </SVGHeart>
        </SVGBox>        
      </div>
    </CardBox>
  );
}
