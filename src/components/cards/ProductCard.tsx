import React from 'react';

import { Rating } from 'react-simple-star-rating';

import TopPartProductCard from './TopPartProductCard';
import IProduct from '../../interfaces/IProduct';
import AnimatedDiv from '../../styles/AnimatedDiv';
import AddToCartButton from '../buttons/AddToCartButton';
import ProductFavorite from '../product/ProductFavorite';
import ProductPrice from '../product/ProductPrice';

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  return (
    <AnimatedDiv>
      <div className={'h-100 d-flex flex-column'}>
        <TopPartProductCard product={product} showQuickView />
        <div className="p-3">
          <p
            className="fs-4 m-0 p-0"
            style={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}
          >
            {product.name}
          </p>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Rating
              size={15}
              readonly
              initialValue={Math.floor(Math.random() * 5)}
            />
            <ProductFavorite product={product} />
          </div>
          <p
            style={{
              fontSize: '0.8em',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}
          >
            {product.short_description}
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <ProductPrice className="fs-5" product={product} />
            <AddToCartButton product={product} className="badge" />
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default ProductCard;
