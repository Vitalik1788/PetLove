import styled from '@emotion/styled';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';

export const StyledModal = styled(Modal)`
  position: relative;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 335px;
  padding: 40px 28px;
  background-color: #ffffff;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    max-width: 448px;
    padding: 80px;
  }
`;

export const Closecross = styled(MdClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ModalImage = styled(Image)`
  width: 80px;
  height: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 50%;
`;

export const ModalText = styled.p`
  margin-bottom: 28px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
  text-align: center;
  color: #262626;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmBtn = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #ffffff;
  padding: 12px 57px;
  margin-right: 8px;
  background-color: #f6b83d;
  outline: none;
  border: transparent;
  border-radius: 30px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    padding: 14px 57px;
  }
`;

export const CancelBtn = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #262626;
  padding: 12px 44px;
  background-color: rgba(38, 38, 38, 0.05);
  outline: none;
  border: transparent;
  border-radius: 30px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    padding: 14px 57px;
  }
`;
