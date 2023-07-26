import { atom } from 'jotai';

import categories from '../data/categories';
import ISubcategory from '../interfaces/ISubcategory';

// @ts-ignore
const defaultCategory = categories[0].categories[0].categories[0];
const selectedCategoryAtom = atom<ISubcategory>(defaultCategory);

export default selectedCategoryAtom;
