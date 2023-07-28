import React, { useState } from 'react';

import { Rating } from 'react-simple-star-rating';

import IProduct from '../../interfaces/IProduct';
import AnimatedDiv from '../../styles/AnimatedDiv';
import OnSaleLabel from '../../styles/labels/OnSaleLabel';
import AddToCartButton from '../buttons/AddToCartButton';
import ProductFavorite from '../product/ProductFavorite';
import ProductImageWithThumbnails from '../product/ProductImageWithThumbnails';
import ProductPrice from '../product/ProductPrice';
import QuickViewProduct from '../product/QuickViewProduct';

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <AnimatedDiv>
      <div className={'border h-100 d-flex flex-column'}>
        <div
          className="d-flex justify-content-center align-items-center flex-column"
          style={{ position: 'relative' }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          {product.c_isSale && <OnSaleLabel>On sale</OnSaleLabel>}
          {isImageHovered && (
            <QuickViewProduct
              onCloseFunction={() => setIsImageHovered(false)}
              product={product}
            />
          )}
          <ProductImageWithThumbnails
            imageGroup={product.image_groups[0]}
            imageSize="250px"
            thumbnailSize="30px"
          />
        </div>
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
            <ProductPrice
              className="fs-5"
              isSale={product.c_isSale}
              price={product.price}
              maxPrice={product.price_max}
            />
            <AddToCartButton productName={product.name} className="badge" />
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default ProductCard;
