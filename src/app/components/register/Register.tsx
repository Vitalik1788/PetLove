'use client';
import { Form, Formik } from 'formik';
import cat_mobile from '../../assets/images/register_cat_mobile.jpg';
import {
  Button,
  FieldError,
  FieldIconBox,
  FieldIconEye,
  FormBox,
  FormField,
  FormText,
  IconCheckBox,
  IconCheckInPassword,
  PasswordBox,
  TextBox,
  TextToLogin,
  ToLoginLink,
  Wrapper,
} from './Register.styled';
import * as Yup from 'yup';
import Title from '../title/Title';
import PetBlock from '../petBlock/PetBlock';
import { useEffect, useState } from 'react';
import useWindowSize from '@/app/hooks/useWindowSize';
import tablet_cat from '../../assets/images/tablet_register_cat.jpg';
import desktop_cat from '../../assets/images/desktop_cat_reg.jpg';
import { useAppDispatch } from '@/app/hooks/hooks';
import { signUp } from '@/redux/auth/authOperations';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';

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
    .required('Password is required'),
});

export default function RegisterForm() {
  const [passwordIsOpen, setPasswordIsOpen] = useState(false);
  const [image, setImage] = useState(cat_mobile);
  const size = useWindowSize();
  const dispatch = useAppDispatch();
    
    useEffect(() => {
    function getImageBySize() {
      if (size < 768) {
        setImage(cat_mobile);
      } else if (size >= 768 && size < 1280) {
        setImage(tablet_cat);
      } else if (size >= 1280) {
        setImage(desktop_cat);
      }
    }
    getImageBySize();
  }, [size]);

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
      alert('Password is not confirmed');
      return;
    }
    if (values) {
      const user = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      dispatch(signUp(user));
    }
  }

  return (
    <Wrapper>
      <PetBlock src={image} alt="Red cat" />
      <FormBox>
        <Title>Registration</Title>
        <FormText>Thank you for your interest in our platform.</FormText>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={schema}
        >
          {({ values, errors, isValid }) => (
            <Form>
              {!isValid ? (
                <>
                  <FieldIconBox>
                    <FormField
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      style={
                        errors.name
                          ? { border: '1px solid #EF2447' }
                          : { border: '1px solid #08AA83' }
                      }
                    />
                    <IconCheckBox>
                      <use
                        href={
                          !errors.name
                            ? '/sprite.svg#icon-check_correct'
                            : '/sprite.svg#icon-close_cross'
                        }
                      ></use>
                    </IconCheckBox>
                  </FieldIconBox>
                  <FieldError
                    style={
                      errors.name ? { color: '#EF2447' } : { color: '#08AA83' }
                    }
                  >
                    {errors.name ? errors.name : 'Name is valid'}
                  </FieldError>
                  <FieldIconBox>
                    <FormField
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      style={
                        errors.email
                          ? { border: '1px solid #EF2447' }
                          : { border: '1px solid #08AA83' }
                      }
                    />
                    <IconCheckBox>
                      <use
                        href={
                          !errors.email
                            ? '/sprite.svg#icon-check_correct'
                            : '/sprite.svg#icon-close_cross'
                        }
                      ></use>
                    </IconCheckBox>
                  </FieldIconBox>
                  <FieldError
                    style={
                      errors.email ? { color: '#EF2447' } : { color: '#08AA83' }
                    }
                  >
                    {errors.email ? errors.email : 'Email is valid'}
                  </FieldError>
                  <PasswordBox>
                    <FormField
                      id="password"
                      name="password"
                      type={passwordIsOpen ? 'text' : 'password'}
                      placeholder="Password"
                      style={
                        errors.password
                          ? { border: '1px solid #EF2447' }
                          : { border: '1px solid #08AA83' }
                      }
                    />
                    <FieldIconEye onClick={togglePassword}>
                      <use
                        href={
                          passwordIsOpen
                            ? '/sprite.svg#icon-eye_close'
                            : '/sprite.svg#icon-eye'
                        }
                      ></use>
                    </FieldIconEye>
                    <IconCheckInPassword>
                      <use
                        href={
                          !errors.password
                            ? '/sprite.svg#icon-check_correct'
                            : '/sprite.svg#icon-close_cross'
                        }
                      ></use>
                    </IconCheckInPassword>
                  </PasswordBox>
                  <FieldError
                    style={
                      errors.password
                        ? { color: '#EF2447' }
                        : { color: '#08AA83' }
                    }
                  >
                    {errors.password ? errors.password : 'Password is secure'}
                  </FieldError>
                  <PasswordBox>
                    <FormField
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      type={passwordIsOpen ? 'text' : 'password'}
                      style={
                        errors.confirmPassword
                          ? { border: '1px solid #EF2447' }
                          : { border: '1px solid #08AA83' }
                      }
                    />
                    <FieldIconEye onClick={togglePassword}>
                      <use
                        href={
                          passwordIsOpen
                            ? '/sprite.svg#icon-eye_close'
                            : '/sprite.svg#icon-eye'
                        }
                      ></use>
                    </FieldIconEye>
                    <IconCheckInPassword>
                      <use
                        href={
                          !errors.confirmPassword
                            ? '/sprite.svg#icon-check_correct'
                            : '/sprite.svg#icon-close_cross'
                        }
                      ></use>
                    </IconCheckInPassword>
                  </PasswordBox>
                  <FieldError
                    style={
                      errors.confirmPassword
                        ? { color: '#EF2447' }
                        : { color: '#08AA83' }
                    }
                  >
                    {errors.confirmPassword
                      ? errors.confirmPassword
                      : 'Password is secure'}
                  </FieldError>
                </>
              ) : (
                <>
                  <FormField
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                  />
                  <FormField
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
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
                </>
              )}
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
