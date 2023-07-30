import IProduct from './IProduct';

interface ICartItem {
  product: IProduct;
  qty: number;
  size: string;
  color: string;
  imgUrl: string;
}

export default ICartItem;
