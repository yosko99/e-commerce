/* eslint-disable indent */
import React, { useEffect } from 'react';

import { useAtom } from 'jotai';
import { Button } from 'react-bootstrap';

import cartAtom from '../../atoms/cart.atom';
import getProductCartAttributes from '../../functions/getProductCartAttributes';
import IProduct from '../../interfaces/IProduct';
import CustomToast from '../utils/CustomToast';

interface Props {
  product: IProduct;
  className?: string;
  qty?: number;
  size?: string;
  color?: string;
}

const AddToCartButton = ({ product, className, qty, color, size }: Props) => {
  const [cart, setCart] = useAtom(cartAtom);

  const handleClick = () => {
    const { productColor, productImgUrl, productSize, quantity } =
      getProductCartAttributes({ product, qty, color, size });

    const itemIndex = cart.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.size === productSize &&
        item.color === productColor
    );

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].qty += quantity;
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          product,
          qty: quantity,
          color: productColor,
          size: productSize,
          imgUrl: productImgUrl
        }
      ]);
    }
  };

  useEffect(() => {}, [size, color]);

  return (
    <CustomToast
      activateElement={
        <Button variant="dark" onClick={handleClick} className={className}>
          Add to cart
        </Button>
      }
      type="success"
      body={`${product.name} was added to your cart`}
    />
  );
};

export default AddToCartButton;
