import React, { useEffect, useState } from 'react';

import { Button, Image } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

import IProduct from '../../interfaces/IProduct';
import AnimatedDiv from '../../styles/AnimatedDiv';
import OnSaleLabel from '../../styles/OnSaleLabel';
import ProductFavorite from '../product/ProductFavorite';
import ProductPrice from '../product/ProductPrice';
import ProductThumbnails from '../product/ProductThumbnails';

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  const mainImgLink = product.image_groups[0].images[0].link;
  const [imgLink, setImgLink] = useState(mainImgLink);

  const handleMouseLeave = () => {
    setImgLink(mainImgLink);
  };

  useEffect(() => {
    setImgLink(mainImgLink);
  }, [product]);

  return (
    <AnimatedDiv>
      <div
        className={'border h-100 d-flex flex-column'}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="d-flex justify-content-center align-items-center flex-column"
          style={{ position: 'relative' }}
        >
          {product.c_isSale && <OnSaleLabel>On sale</OnSaleLabel>}
          <Image
            role="button"
            style={{ width: '100%', height: '250px', objectFit: 'contain' }}
            src={require(`../../assets/${imgLink}`)}
          />
          <ProductThumbnails
            imageGroup={product.image_groups[0]}
            setImgLink={setImgLink}
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
              isSale={product.c_isSale}
              price={product.price}
              maxPrice={product.price_max}
            />

            <Button variant="dark" className="badge">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default ProductCard;
