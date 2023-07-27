import { atom } from 'jotai';

import IFilter from '../interfaces/IFilter';

const filtersAtom = atom<IFilter>({
  distinctSwatches: new Map(),
  distinctSizes: new Map(),
  maxValue: 0
});

export default filtersAtom;
