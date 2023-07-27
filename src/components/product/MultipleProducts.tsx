/* eslint-disable multiline-ternary */
import React from 'react';

import { Col, Image } from 'react-bootstrap';

import NoProductsImg from '../../assets/frontPage/no-products.png';
import IProduct from '../../interfaces/IProduct';
import CenteredItems from '../../styles/CenteredItems';
import ProductCard from '../cards/ProductCard';

interface Props {
  products: IProduct[];
  pagination: number;
}

const MultipleProducts = ({ pagination, products }: Props) => {
  return (
    <>
      {products.length === 0 ? (
        <CenteredItems>
          <Image src={NoProductsImg} height={500} fluid />
        </CenteredItems>
      ) : (
        products.map(
          (product, index) =>
            index < pagination && (
              <Col key={index} lg={4} md={6} sm={12} className="p-3">
                <ProductCard product={product} />
              </Col>
            )
        )
      )}
    </>
  );
};

export default MultipleProducts;
