import React from 'react';
import { Formik } from 'formik';
import {
  CleanCrossBox,
  CleanCrossIcon,
  FormBox,
  SearchIcon,
  SearchIconBox,
  StyledField,
} from './SearchField.styled';
import { useAppDispatch } from '@/app/hooks/hooks';
import { setFilterValue } from '@/redux/news/newsOperation';

interface ISearchField {
  text: string;
}

export default function SearchField() {
  const dispatch = useAppDispatch();

  const initialState: ISearchField = {
    text: '',
  };

  function handleSubmit(values: ISearchField) {
    if (values.text !== '') {
      dispatch(setFilterValue(values.text)); 
    }
  }

  return (
    <div>
      <Formik
        initialValues={initialState}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values }) => (
          <FormBox>
            <StyledField
              id="text"
              name="text"
              type="text"
              values={values.text}
              placeholder="Search"              
            />
            <SearchIconBox type="submit">
              <SearchIcon />
            </SearchIconBox>
            <CleanCrossBox type="reset" onClick={() => dispatch(setFilterValue(''))}>
              <CleanCrossIcon>
                <use
                  href={
                    values.text.trim() === ''
                      ? ''
                      : '/sprite.svg#icon-close_cross'
                  }
                ></use>
              </CleanCrossIcon>
            </CleanCrossBox>
          </FormBox>
        )}
      </Formik>
    </div>
  );
}
