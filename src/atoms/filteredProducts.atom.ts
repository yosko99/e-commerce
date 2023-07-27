import { atom } from 'jotai';

import IProduct from '../interfaces/IProduct';

const filteredProductsAtom = atom<IProduct[]>([]);

export default filteredProductsAtom;
