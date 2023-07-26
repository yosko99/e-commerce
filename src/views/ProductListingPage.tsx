import React, { useEffect, useState } from 'react';

import { useAtom } from 'jotai';
import { Col, Container, Row } from 'react-bootstrap';

import selectedCategoryAtom from '../atoms/selectedCategory.atom';
import selectedProductsAtom from '../atoms/selectedProducts.atom';
import LoadMoreButton from '../components/buttons/LoadMoreButton';
import ProductCard from '../components/cards/ProductCard';
import CategoryInfo from '../components/utils/CategoryInfo';

const ProductListingPage = () => {
  const [selectedCategory] = useAtom(selectedCategoryAtom);
  const [selectedProducts] = useAtom(selectedProductsAtom);

  const defaultPagination =
    selectedProducts.length < 10 ? selectedProducts.length : 10;
  const [pagination, setPagination] = useState(defaultPagination);

  useEffect(() => {
    setPagination(defaultPagination);
    window.scrollTo(0, 0);
  }, [selectedCategory.name, selectedProducts.length]);

  return (
    <Container>
      <Row>
        <Col lg={2}>filters</Col>
        <Col lg={10}>
          <Row>
            <Col lg={10}>
              <CategoryInfo
                shownProducts={pagination}
                totalProducts={selectedProducts.length}
                name={selectedCategory.name}
                description={selectedCategory.page_description}
              />
            </Col>
            <Col lg={2}>sort by</Col>
          </Row>
          <hr />
          <Row>
            {selectedProducts.map(
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
            productsLength={selectedProducts.length}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListingPage;
