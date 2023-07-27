import React, { useEffect, useState } from 'react';

import { Button, Image } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

import IProduct from '../../interfaces/IProduct';
import AnimatedDiv from '../../styles/AnimatedDiv';
import OnSaleLabel from '../../styles/OnSaleLabel';
import ProductPrice from '../product/ProductPrice';

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  const mainImgLink = product.image_groups[0].images[0].link;
  const [imgLink, setImgLink] = useState(mainImgLink);

  const handleClick = (link: string) => {
    setImgLink(link);
  };

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
          <div className="d-flex mt-2">
            {product.image_groups[0].images.map((image, index) => (
              <Image
                role="button"
                key={index}
                className="border"
                onClick={() => handleClick(image.link)}
                style={{ width: '30px', height: '30px', objectFit: 'contain' }}
                src={require(`../../assets/${image.link}`)}
              />
            ))}
          </div>
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
