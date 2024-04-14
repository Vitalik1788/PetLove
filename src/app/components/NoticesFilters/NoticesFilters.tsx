import Select from 'react-select';
import SearchField from '../searchField/SearchField';
import { Box, FiltersBox } from './NoticesFilters.styled';
import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { useEffect, useState } from 'react';
import { getCategory, getGender, getSpecies } from '@/redux/notices/noticesOperation';
import { selectCategory, selectSex, selectSpecies } from '@/redux/notices/noticesSelectors';

export default function NoticesFilters() {
  const [categoryOptions, setCategoryOptions] = useState(null);
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);
  const sex = useAppSelector(selectSex);
  const species = useAppSelector(selectSpecies);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getGender());
    dispatch(getSpecies());
  }, [dispatch]);

  const options = category.map((e) => [
    {
      value: e,
      label: e.charAt(0).toUpperCase() + e.slice(1),
    },
  ]);
  const data = options.flat(2);

  const sexOption = sex.map((e) => [
    {
      value: e,
      label: e.charAt(0).toUpperCase() + e.slice(1),
    },
  ]);
  const sexData = sexOption.flat(2);

  const speciesOption = species.map((e) => [
    {
      value: e,
      label: e.charAt(0).toUpperCase() + e.slice(1),
    },
  ]);
  const speciesData = speciesOption.flat(2);

  return (
    <Box>
      <SearchField />
      <FiltersBox>
        <Select
          defaultValue={categoryOptions}
          placeholder="Category"
          options={data}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: '30px',
              color: '#262626',
              fontFamily: 'inherit',
              fontWeight: 500,
              fontSize: '14px',
            }),
          }}
        />
        <Select
          placeholder="By gender"
          options={sexData}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: '30px',
              color: '#262626',
              fontFamily: 'inherit',
              fontWeight: 500,
              fontSize: '14px',
            }),
          }}
        />
      </FiltersBox>
      <Select
        placeholder="By type"
        options={speciesData}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: '30px',
            color: '#262626',
            fontFamily: 'inherit',
            fontWeight: 500,
            fontSize: '14px',
            marginBottom: '12px',
          }),
        }}
      />
    </Box>
  );
}
