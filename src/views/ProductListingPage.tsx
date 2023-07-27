/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react';

import { useAtom } from 'jotai';
import { Col, Container, Image, Row } from 'react-bootstrap';

import NoProductsImg from '../assets/frontPage/no-products.png';
import filteredProductsAtom from '../atoms/filteredProducts.atom';
import selectedCategoryAtom from '../atoms/selectedCategory.atom';
import LoadMoreButton from '../components/buttons/LoadMoreButton';
import ProductCard from '../components/cards/ProductCard';
import CategoryInfo from '../components/utils/CategoryInfo';
import Filters from '../components/utils/Filters';
import CenteredItems from '../styles/CenteredItems';

const ProductListingPage = () => {
  const [selectedCategory] = useAtom(selectedCategoryAtom);
  const [filteredProducts] = useAtom(filteredProductsAtom);

  const defaultPagination =
    filteredProducts.length < 10 ? filteredProducts.length : 10;
  const [pagination, setPagination] = useState(defaultPagination);

  useEffect(() => {
    setPagination(defaultPagination);
    window.scrollTo(0, 0);
  }, [selectedCategory.name, filteredProducts.length]);

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <Filters />
        </Col>
        <Col lg={9}>
          <Row>
            <Col lg={10}>
              <CategoryInfo
                shownProducts={pagination}
                totalProducts={filteredProducts.length}
                name={selectedCategory.name}
                description={selectedCategory.page_description}
              />
            </Col>
            <Col lg={2}>sort by</Col>
          </Row>
          <hr />
          <Row>
            {filteredProducts.length === 0 ? (
              <CenteredItems>
                <Image src={NoProductsImg} height={500} fluid />
              </CenteredItems>
            ) : (
              filteredProducts.map(
                (product, index) =>
                  index < pagination && (
                    <Col key={index} lg={4} md={6} sm={12} className="p-3">
                      <ProductCard product={product} />
                    </Col>
                  )
              )
            )}
            {filteredProducts.map(
              (product, index) =>
                index < pagination && (
                  <Col key={index} lg={4} md={6} sm={12} className="p-3">
                    <ProductCard product={product} />
                  </Col>
                )
            )}
          </Row>
          <LoadMoreButton
            pagination={pagination}
            setPagination={setPagination}
            productsLength={filteredProducts.length}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListingPage;
