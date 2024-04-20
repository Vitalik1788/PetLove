import { RootState } from '../store';

export const selectCategory = (state: RootState) => state.notices.category;

export const selectSex = (state: RootState) => state.notices.sex;

export const selectSpecies = (state: RootState) => state.notices.species;

export const selectNotices = (state: RootState) => state.notices.noticesData;
