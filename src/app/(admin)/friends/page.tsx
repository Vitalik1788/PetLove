'use client';

import Title from '@/app/components/title/Title';
import { Box } from './page.styled';
import FriendsList from '@/app/components/FriendsList/FriendsList';

export default function Friends() {
  return (
    <Box>
      <Title>Our friends</Title>
      <FriendsList />
    </Box>
  );
}
