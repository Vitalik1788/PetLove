'use client';

import useWindowSize from '@/app/hooks/useWindowSize';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
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
} from './Login.styled';
import PetBlock from '../petBlock/PetBlock';
import Title from '../title/Title';
import { Form, Formik } from 'formik';
import dog_mobile from '../../assets/images/login_mobile_dog.jpg';
import dog_tablet from '../../assets/images/tablet_dog_login.jpg';
import dog_desktop from '../../assets/images/desktop_dog_login.jpg';

interface ILoginForm {
  email: string;
  password: string;
}

let schema: Yup.ObjectSchema<ILoginForm> = Yup.object({
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
});

export default function LoginForm() {
  const [passwordIsOpen, setPasswordIsOpen] = useState(false);
  const [image, setImage] = useState(dog_mobile);
  const size = useWindowSize();

  useEffect(() => {
    function getImageBySize() {
      if (size < 768) {
        setImage(dog_mobile);
      } else if (size >= 768 && size < 1280) {
        setImage(dog_tablet);
      } else if (size >= 1280) {
        setImage(dog_desktop);
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

  const initialValues: ILoginForm = {
    email: '',
    password: '',
  };

  function handleSubmit(values: ILoginForm) {
    console.log(values);
  }

  return (
    <Wrapper>
      <PetBlock src={image} alt='Dog' />
      <FormBox>
        <Title>Log in</Title>
        <FormText>
          Welcome! Please enter your credentials to login to the platform:
        </FormText>
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
                </>
              ) : (
                <>
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
                </>
              )}
              <Button type="submit">LOG IN</Button>
              <TextBox>
                <TextToLogin>Don’t have an account?</TextToLogin>
                <ToLoginLink href="/register">Register</ToLoginLink>
              </TextBox>
            </Form>
          )}
        </Formik>
      </FormBox>
    </Wrapper>
  );
}
