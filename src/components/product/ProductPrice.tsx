/* eslint-disable multiline-ternary */
import React from 'react';

interface Props {
  isSale?: boolean;
  maxPrice?: number;
  price: number;
}

const ProductPrice = ({ isSale, maxPrice, price }: Props) => {
  return (
    <div className="d-flex">
      {isSale ? (
        <>
          <p
            className="m-0 p-0 fs-5 text-muted"
            style={{ textDecoration: 'line-through' }}
          >
            $ {maxPrice || price}{' '}
          </p>
          <p
            className="m-0 p-0 fs-4 ms-2 text-danger"
            style={{ textDecoration: 'normal' }}
          >
            $ {price}
          </p>
        </>
      ) : (
        <p className="m-0 p-0 fs-5">$ {price}</p>
      )}
    </div>
  );
};

export default ProductPrice;
