import React from 'react';

import { Button, Image } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

import IProduct from '../../interfaces/IProduct';
import OnSaleLabel from '../../styles/OnSaleLabel';
import ProductPrice from '../product/ProductPrice';

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="shadow-sm border h-100 d-flex flex-column">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ position: 'relative' }}
      >
        {product.c_isSale && <OnSaleLabel>On sale</OnSaleLabel>}
        <Image
          role="button"
          style={{ width: '100%', height: '250px', objectFit: 'contain' }}
          src={require(`../../assets/${product.image_groups[0].images[0].link}`)}
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
        <Rating
          size={15}
          readonly
          className="mb-3"
          initialValue={Math.floor(Math.random() * 5)}
        />
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
            isSale={product.c_isSale}
            price={product.price}
            maxPrice={product.price_max}
          />

          <Button variant="rounded" className="">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
