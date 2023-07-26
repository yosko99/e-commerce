import { atom } from 'jotai';

import IProduct from '../interfaces/IProduct';

const selectedProductsAtom = atom<IProduct[]>([]);

export default selectedProductsAtom;
