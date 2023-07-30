import React, { useEffect, useState } from 'react';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import checkIfProductLiked from '../../functions/checkProductLiked';
import IProduct from '../../interfaces/IProduct';
import CustomToast from '../utils/CustomToast';

interface Props {
  product: IProduct;
  className?: string;
  favoriteText?: string;
  nonFavoriteText?: string;
}

const ProductFavorite = ({
  product,
  className,
  favoriteText,
  nonFavoriteText
}: Props) => {
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
    changeIcon();
  };

  useEffect(() => {
    changeIcon();
  }, [product.id]);

  return (
    <CustomToast
      type="info"
      body={`${product.name} was ${
        checkIfProductLiked(product.id) ? 'removed from' : 'added to'
      } your favorites`}
      activateElement={
        <span className={className} onClick={handleClick} role="button">
          {checkIfProductLiked(product.id) ? favoriteText : nonFavoriteText}
          {heart}
        </span>
      }
    />
  );
};

export default ProductFavorite;
