'use client';
import { Form, Formik } from 'formik';
import cat_mobile from '../../assets/images/register_cat_mobile.jpg';
import {
  Button,
  FieldError,
  FieldIconEye,
  FormBox,
  FormField,
  FormText,
  PasswordBox,
  TextBox,
  TextToLogin,
  ToLoginLink,
  Wrapper,
} from './Register.styled';
import * as Yup from 'yup';
import Title from '../title/Title';
import PetBlock from '../petBlock/PetBlock';
import { useState } from 'react';

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

let schema: Yup.ObjectSchema<IRegisterForm> = Yup.object({
  name: Yup.string()
    .min(2, 'Name should be of minimum 2 characters length')
    .trim()
    .required('Name is required'),
  email: Yup.string()
    .trim()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Enter valid email'
    )
    .required('Email is required'),
  password: Yup.string()
    .trim()
    .min(7, 'Password should be of minimum 7 characters length')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .trim()
    .min(7, 'Password should be of minimum 7 characters length')
    .required('Password is required')    
});

export default function RegisterForm() {
  const [passwordIsOpen, setPasswordIsOpen] = useState(false);

  function togglePassword() {
    if (passwordIsOpen) {
      setPasswordIsOpen(false);
      return;
    }
    setPasswordIsOpen(true);
  }


  const initialValues: IRegisterForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  function handleSubmit(values: IRegisterForm) {
    if (values.password !== values.confirmPassword) {
      alert("Password is not confirmed")
    }
    console.log(values);
  }

  return (
    <Wrapper>
      <PetBlock src={cat_mobile} />
      <FormBox>
        <Title>Registration</Title>
        <FormText>Thank you for your interest in our platform.</FormText>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={schema}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ values, errors, isValid }) => (
            <Form>
              <FormField id="name" name="name" type="text" placeholder="Name" />
              <FieldError>{errors.name}</FieldError>
              <FormField
                id="email"
                name="email"
                type="email"
                placeholder="Email"
              />
              <FieldError>{errors.email}</FieldError>
              <PasswordBox>
                <FormField
                  id="password"
                  name="password"
                  type={passwordIsOpen ? 'text' : 'password'}
                  placeholder="Password"
                />
                <FieldIconEye onClick={togglePassword}>
                  {passwordIsOpen ? (
                    <use href="/sprite.svg#icon-eye_close"></use>
                  ) : (
                    <use href="/sprite.svg#icon-eye"></use>
                  )}
                </FieldIconEye>
              </PasswordBox>
              <FieldError>{errors.password}</FieldError>
              <PasswordBox>
                <FormField
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  type={passwordIsOpen ? 'text' : 'password'}
                />
                <FieldIconEye onClick={togglePassword}>
                  {passwordIsOpen ? (
                    <use href="/sprite.svg#icon-eye_close"></use>
                  ) : (
                    <use href="/sprite.svg#icon-eye"></use>
                  )}
                </FieldIconEye>
              </PasswordBox>
              <FieldError>{errors.confirmPassword}</FieldError>
              <Button type="submit">REGISTRATION</Button>
              <TextBox>
                <TextToLogin>Already have an account?</TextToLogin>
                <ToLoginLink href="/login">Login</ToLoginLink>
              </TextBox>
            </Form>
          )}
        </Formik>
      </FormBox>
    </Wrapper>
  );
}
