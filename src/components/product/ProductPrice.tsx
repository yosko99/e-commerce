/* eslint-disable multiline-ternary */
import React from 'react';

import IProduct from '../../interfaces/IProduct';

interface Props {
  product: IProduct;
  className?: string;
}

const ProductPrice = ({ product, className }: Props) => {
  return (
    <div className={`d-flex ${className}`}>
      {product.c_isSale ? (
        <>
          <p
            className="m-0 p-0 text-muted"
            style={{ textDecoration: 'line-through' }}
          >
            $ {product.price_max || product.price}{' '}
          </p>
          <p
            className="m-0 p-0 ms-2 text-danger"
            style={{ textDecoration: 'normal' }}
          >
            $ {product.price}
          </p>
        </>
      ) : (
        <p className="m-0 p-0">$ {product.price}</p>
      )}
    </div>
  );
};

export default ProductPrice;
