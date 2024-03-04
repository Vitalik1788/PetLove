import {
  CardDate,
  CardImage,
  CardText,
  CardTitle,
  Container,
  DateCardBox,
  ReadMore,
} from './NewsItem.styled';

export default function NewsItem({ data }: any) {
  const date = new Date(data.date);
  const cardDate = date.toLocaleString('en-GB').slice(0, 10);

  return (
    <>
      <CardImage src={data.imgUrl} alt="image" />
      <CardTitle>{data.title}</CardTitle>
      <CardText>{data.text}</CardText>
      <DateCardBox>
        <CardDate>{cardDate}</CardDate>
        <ReadMore href={data.url} target="_blank">
          Read more
        </ReadMore>
      </DateCardBox>
    </>
  );
}
