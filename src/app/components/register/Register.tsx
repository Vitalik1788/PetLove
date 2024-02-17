'use client';

import { Formik } from 'formik';
import cat_mobile from '../../assets/images/register_cat_mobile.jpg';
import {
  FormBox,
  FormIMG,
  FormText,
  FormTitle,
  Wrapper,
} from './Register.styled';

export default function RegisterForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Wrapper>
      <FormIMG src={cat_mobile} alt="cat" priority={true} />
      <FormBox>
        <FormTitle>Registration</FormTitle>
        <FormText>Thank you for your interest in our platform.</FormText>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
        ></Formik>
      </FormBox>
    </Wrapper>
  );
}
