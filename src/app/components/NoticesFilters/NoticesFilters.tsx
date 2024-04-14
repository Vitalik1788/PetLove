import Select from 'react-select';
import SearchField from '../searchField/SearchField';
import { Box, FiltersBox } from './NoticesFilters.styled';
import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { useEffect, useState } from 'react';
import { getCategory, getGender } from '@/redux/notices/noticesOperation';
import { selectCategory, selectSex } from '@/redux/notices/noticesSelectors';

export default function NoticesFilters() {
  const [categoryOptions, setCategoryOptions] = useState(null);
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);
  const sex = useAppSelector(selectSex);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getGender());
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
            }),
          }}
        />
      </FiltersBox>
    </Box>
  );
}
