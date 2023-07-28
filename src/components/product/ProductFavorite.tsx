import React, { useEffect, useState } from 'react';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import checkIfProductLiked from '../../functions/checkProductLiked';
import IProduct from '../../interfaces/IProduct';
import CustomToast from '../utils/CustomToast';

interface Props {
  product: IProduct;
  className?: string;
}

const ProductFavorite = ({ product, className }: Props) => {
  const heartSize = 20;
  const [heart, setHeart] = useState<React.ReactNode>(
    <AiOutlineHeart size={heartSize} />
  );

  const changeIcon = (): void => {
    if (checkIfProductLiked(product.id)) {
      setHeart(<AiFillHeart size={heartSize} />);
    } else {
      setHeart(<AiOutlineHeart size={heartSize} />);
    }
  };

  const handleClick = () => {
    const checkExists = checkIfProductLiked(product.id);

    let likedLocalStorage: string[] = [];
    if (localStorage.getItem('liked') !== '[]') {
      likedLocalStorage = JSON.parse(localStorage.getItem('liked')!);
    }

    if (!checkExists) {
      const likedProducts = [...likedLocalStorage, product.id];
      localStorage.setItem('liked', JSON.stringify(likedProducts));
    } else {
      const likedProducts = likedLocalStorage.filter(
        (likedProduct: string) => likedProduct !== product.id
      );
      localStorage.setItem('liked', JSON.stringify(likedProducts));
    }

    window.dispatchEvent(new Event('storage'));
    changeIcon();
  };

  useEffect(() => {
    changeIcon();
  }, [product.id]);

  return (
    <CustomToast
      body={`${product.name} was ${
        checkIfProductLiked(product.id) ? 'added' : 'removed'
      } from your favorites`}
      activateElement={
        <div className={className} onClick={handleClick} role="button">
          {heart}
        </div>
      }
    />
  );
};

export default ProductFavorite;
