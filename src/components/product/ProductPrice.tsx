/* eslint-disable multiline-ternary */
import React from 'react';

interface Props {
  isSale?: boolean;
  maxPrice?: number;
  price: number;
  className?: string;
}

const ProductPrice = ({ isSale, maxPrice, price, className }: Props) => {
  return (
    <div className={`d-flex ${className}`}>
      {isSale ? (
        <>
          <p
            className="m-0 p-0 text-muted"
            style={{ textDecoration: 'line-through' }}
          >
            $ {maxPrice || price}{' '}
          </p>
          <p
            className="m-0 p-0 ms-2 text-danger"
            style={{ textDecoration: 'normal' }}
          >
            $ {price}
          </p>
        </>
      ) : (
        <p className="m-0 p-0">$ {price}</p>
      )}
    </div>
  );
};

export default ProductPrice;
