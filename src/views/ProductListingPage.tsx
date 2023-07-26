import React from 'react';

import { useAtom } from 'jotai';
import { Col, Container, Row } from 'react-bootstrap';

import selectedCategoryAtom from '../atoms/selectedCategory.atom';
import selectedProductsAtom from '../atoms/selectedProducts.atom';
import ProductCard from '../components/cards/ProductCard';
import CategoryInfo from '../components/utils/CategoryInfo';

const ProductListingPage = () => {
  const [selectedCategory] = useAtom(selectedCategoryAtom);
  const [selectedProducts] = useAtom(selectedProductsAtom);

  return (
    <Container>
      <Row>
        <Col lg={2}>filters</Col>
        <Col lg={10}>
          <Row>
            <Col lg={10}>
              <CategoryInfo
                name={selectedCategory.name}
                description={selectedCategory.page_description}
              />
            </Col>
            <Col lg={2}>sort by</Col>
          </Row>
          <hr />
          <Row>
            {selectedProducts.map((product, index) => (
              <Col key={index} lg={4} md={6} sm={12} className="p-3">
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListingPage;
