'use client';

import EditUserBtn from '../EditUserBtn/EditUserBtn';
import PetsBlock from '../PetsBlock/PetsBlock';
import UserBlock from '../UserBlock/UserBlock';
import { Container } from './UserCard.styled';

export default function UserCard() {
  return (
    <Container>
      <EditUserBtn />
      <UserBlock />
      <PetsBlock />
    </Container>)
}
