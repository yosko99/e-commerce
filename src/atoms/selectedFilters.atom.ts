import { atom } from 'jotai';

import ISelectedFilters from '../interfaces/ISelectedFilters';

const selectedFiltersAtom = atom<ISelectedFilters>({
  colors: [],
  sizes: [],
  minValue: 0,
  maxValue: 0
});

export default selectedFiltersAtom;
