'use client';

import { useState } from 'react';
import EditUserBtn from '../EditUserBtn/EditUserBtn';
import ModalEditUser from '../ModalEditUser/ModalEditUser';
import PetsBlock from '../PetsBlock/PetsBlock';
import UserBlock from '../UserBlock/UserBlock';
import { Container } from './UserCard.styled';

export default function UserCard() {
  const [editUserModal, setEditUserModal] = useState(false);

  function openEditUserModal() {
    setEditUserModal(true);
    document.body.style.overflowY = 'hidden';
  }

  function closeEditUserModal() {
    setEditUserModal(false);
    document.body.style.overflowY = 'unset';
  }

  return (
    <Container>
      <EditUserBtn openEditUserModal={openEditUserModal} />
      <UserBlock />
      <PetsBlock />
      <ModalEditUser
        editUserModal={editUserModal}
        closeEditUserModal={closeEditUserModal}
      />
    </Container>
  );
}
