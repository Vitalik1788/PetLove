import React from 'react';
import {
  BtnBox,
  CancelBtn,
  Closecross,
  ConfirmBtn,
  ModalImage,
  ModalText,
  StyledModal,
} from './ModalApproveAction.styled';
import cat from '../../assets/images/logout_cat_mobile.png';
import { useAppDispatch } from '@/app/hooks/hooks';
import { useRouter } from 'next/navigation';
import { logout } from '@/redux/auth/authOperations';

export interface IApproveModal {
  approveModalOpen: boolean;
  closeApproveModal: () => void;
}

export default function ModalApproveAction({
  approveModalOpen,
  closeApproveModal,
}: IApproveModal) {

  const dispatch = useAppDispatch();
  const router = useRouter();

  function logoutApproved() {
    dispatch(logout());
    closeApproveModal();
    router.push('/');    
  }

  return (
    <div>
      <StyledModal
        isOpen={approveModalOpen}
        onRequestClose={closeApproveModal}
        ariaHideApp={false}
        contentLabel="Logout confirm modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(38, 38, 38, 0.3)',
          },
        }}
      >
        <Closecross onClick={closeApproveModal} />
        <ModalImage src={cat} alt="cat" priority={false} />
        <ModalText>Already leaving?</ModalText>
        <BtnBox>
          <ConfirmBtn onClick={logoutApproved}>Yes</ConfirmBtn>
          <CancelBtn onClick={closeApproveModal}>Cancel</CancelBtn>
        </BtnBox>
      </StyledModal>
    </div>
  );
}
