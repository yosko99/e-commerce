import React from 'react';

import { useAtom } from 'jotai';
import { AiOutlineClose } from 'react-icons/ai';

import cartAtom from '../../atoms/cart.atom';

interface Props {
  productId: string;
}

const RemoveProductFromCartButton = ({ productId }: Props) => {
  const [cart, setCart] = useAtom(cartAtom);

  const handleClick = () => {
    const productIndex = cart.findIndex(
      (item) => `${item.product.id}-${item.color}` === productId
    );

    const updatedCart = [...cart];
    updatedCart.splice(productIndex, 1);
    setCart([...updatedCart]);
  };

  return <AiOutlineClose size={25} role="button" onClick={handleClick} />;
};

export default RemoveProductFromCartButton;
