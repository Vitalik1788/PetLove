import {
  AvatarBox,
  Closecross,
  GoToProfile,
  ImagePathInput,
  ModalTitle,
  StyledModal,
  StyledUserField,
  UploadBtn,
  UploadBtnIcon,
  UserAvatar,
} from './ModalEditUser.styled';
import * as Yup from 'yup';
import anonimus from '../../assets/images/unknow_user.jpg';
import { useRef } from 'react';
import { Form, Formik } from 'formik';
import { useAppSelector } from '@/app/hooks/hooks';
import { selectUser } from '@/redux/auth/authSelectors';

interface IModalEditUser {
  editUserModal: boolean;
  closeEditUserModal: () => void;
}

interface IUserForm {
  name: string;
  phone: string|undefined;
  email: string; 
  avatar?: string; 
}

let schema: Yup.ObjectSchema<IUserForm> = Yup.object({
  name: Yup.string().trim().required('Name is required'),
  email: Yup.string()
    .trim()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Enter valid email'
    )
    .required('Email is required'),
  avatar: Yup.string()
    .trim()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      'Please choose your avatar'
    ),
  phone: Yup.string()
    .trim()
    .matches(/^\+38\d{10}$/, 'Enter valid phone number'),
});


export default function ModalEditUser({
  editUserModal,
  closeEditUserModal,
}: IModalEditUser) {

  const currentUser = useAppSelector(selectUser);


  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const handleClick = (event: any) => {
    if (hiddenFileInput.current) {
      return hiddenFileInput.current.click();
    }
  };

  const handleChange = (event: any) => {
    const fileUpload = event.target.files[0];
  };

  const initialValues: IUserForm = {
    name: currentUser.name,
    email: currentUser.email,
    phone: currentUser.phone ? currentUser.phone : '+380',
    avatar: currentUser.avatar,
  };

  return (
    <div>
      <StyledModal
        isOpen={editUserModal}
        onRequestClose={closeEditUserModal}
        ariaHideApp={false}
        contentLabel="Edit user modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(38, 38, 38, 0.3)',
          },
        }}
      >
        <Closecross onClick={closeEditUserModal} />
        <ModalTitle>Edit information</ModalTitle>
        <UserAvatar src={anonimus} alt="anonimus"></UserAvatar>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
          validationSchema={schema}
        >
          {({ values }) => (
            <Form>
              <AvatarBox>
                <input
                  type="file"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                />
                <ImagePathInput
                  type="text"
                  name="avatarPath"
                  value={values.avatar}                  
                />
                <UploadBtn type="button" onClick={handleClick}>
                  Upload photo
                  <UploadBtnIcon />
                </UploadBtn>
              </AvatarBox>
              <StyledUserField name="name" type="text" value={values.name} />
              <StyledUserField name="email" type="email" value={values.email} />
              <StyledUserField name="phone" type="phone" value={values.phone} />
              <GoToProfile type="submit">Go to profile</GoToProfile>
            </Form>
          )}
        </Formik>
      </StyledModal>
    </div>
  );
}
