import styled from '@emotion/styled';
import { Field } from 'formik';
import Image from 'next/image';
import { FiUploadCloud } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  position: relative;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 335px;
  padding: 40px 20px;
  background-color: #ffffff;
  border-radius: 30px;
  border: transparent;
  outline: none;
`;

export const Closecross = styled(MdClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 20px;
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  text-align: left;
  color: var(--primary-text-color);
`;

export const UserAvatar = styled(Image)`
  display: block;
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
  border-radius: 100px;
`;

export const AvatarBox = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;

export const ImagePathInput = styled(Field)`
  max-width: 161px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 12px;
  padding-right: 39px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #262626;
  border-radius: 30px;
  border: 1px solid #f6b83d;
  outline: none;
`;

export const UploadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #262626;
  background-color: #fff4df;
  outline: none;
  border: transparent;
  border-radius: 30px;
`;

export const UploadBtnIcon = styled(FiUploadCloud)`
  width: 18px;
  height: 18px;
  margin-left: 8px;
  color: #f6b83d;
`;

export const StyledUserField = styled(Field)`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #262626;
  border-radius: 30px;
  border: 1px solid #f6b83d;
  outline: none;
`;

export const GoToProfile = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 11px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #ffffff;
  background-color: #f6b83d;
  border: transparent;
  border-radius: 30px;
  outline: none;
`;
