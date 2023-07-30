import { atomWithStorage } from 'jotai/utils';

import ICartItem from '../interfaces/ICartItem';

const cartAtom = atomWithStorage<ICartItem[]>('cart', []);

export default cartAtom;
