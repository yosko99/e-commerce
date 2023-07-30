import React from 'react';

import { Image } from 'react-bootstrap';

import ProductFavorite from './ProductFavorite';
import ProductPrice from './ProductPrice';
import ICartItem from '../../interfaces/ICartItem';
import RemoveProductFromCartButton from '../buttons/RemoveProductFromCartButton';

interface Props {
  cartItem: ICartItem;
}

const CartProduct = ({ cartItem }: Props) => {
  return (
    <div className="w-100 d-md-flex flex-md-row flex-column justify-content-start my-3">
      <div className="d-flex justify-content-center">
        <Image
          style={{
            height: '150px',
            width: '150px',
            objectFit: 'contain'
          }}
          src={require(`../../assets/${cartItem.imgUrl}`)}
        />
      </div>
      <div className="d-flex w-100 ps-3 flex-column">
        <div className="d-flex w-100 justify-content-between">
          <ProductPrice product={cartItem.product} className="fs-5 fw-bold" />
          <RemoveProductFromCartButton
            productId={`${cartItem.product.id}-${cartItem.color}`}
          />
        </div>
        <p className="m-0 fs-4 mb-2">{cartItem.product.name}</p>
        <div className="d-flex ">
          <p style={{ borderRight: '1px solid black' }} className="me-2 pe-2">
            Color {cartItem.color}
          </p>
          <p style={{ borderRight: '1px solid black' }} className="me-2 pe-2">
            Size {cartItem.size}
          </p>
          <p>Qty {cartItem.qty}</p>
        </div>
        <ProductFavorite
          className="border p-1"
          product={cartItem.product}
          favoriteText="Remove from favorites "
          nonFavoriteText="Save for later "
        />
      </div>
    </div>
  );
};

export default CartProduct;
