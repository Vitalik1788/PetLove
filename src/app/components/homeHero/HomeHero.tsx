'use client';

import { Text, TextSpan, Title, Wrapper } from './HomeHero.styled';

export default function HomeHero() {
  return (
    <Wrapper>
      <Title>
        Take good <TextSpan>care</TextSpan> of your small pets
      </Title>
      <Text>
        Choosing a pet for your home is a choice that is meant to enrich your
        life with immeasurable joy and tenderness.
      </Text>
    </Wrapper>
  );
}
