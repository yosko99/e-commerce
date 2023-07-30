/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react';

import { useAtom } from 'jotai';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams, useSearchParams } from 'react-router-dom';

import filteredProductsAtom from '../atoms/filteredProducts.atom';
import filtersAtom from '../atoms/filters.atom';
import selectedCategoryAtom from '../atoms/selectedCategory.atom';
import selectedFiltersAtom from '../atoms/selectedFilters.atom';
import selectedProductsAtom from '../atoms/selectedProducts.atom';
import LoadMoreButton from '../components/buttons/LoadMoreButton';
import ProductSort from '../components/filters/ProductSort';
import Breadcrumbs from '../components/navigation/Breadcrumbs';
import Navigation from '../components/navigation/Navigation';
import MultipleProducts from '../components/product/MultipleProducts';
import CategoryInfo from '../components/utils/CategoryInfo';
import Filters from '../components/utils/Filters';
import getCategoryProducts from '../functions/getCategoryProducts';
import getFilteredProducts from '../functions/getFilteredProducts';
import getQueryFilters from '../functions/getQueryFilters';

const ProductListingPage = () => {
  const [selectedCategory] = useAtom(selectedCategoryAtom);
  const [selectedProducts, setSelectedProducts] = useAtom(selectedProductsAtom);
  const [filteredProducts, setFilteredProducts] = useAtom(filteredProductsAtom);
  const [selectedFilters, setSelectedFilters] = useAtom(selectedFiltersAtom);
  const [searchParams] = useSearchParams();
  const [filters] = useAtom(filtersAtom);
  const { subcategory } = useParams();

  const defaultPagination =
    filteredProducts.length < 10 ? filteredProducts.length : 10;
  const [pagination, setPagination] = useState(defaultPagination);

  useEffect(() => {
    setPagination(defaultPagination);
    window.scrollTo(0, 0);
  }, [selectedCategory.name, filteredProducts.length]);

  useEffect(() => {
    const categoryProducts = getCategoryProducts(
      subcategory as string,
      filters
    );
    const queryFilters = getQueryFilters(searchParams, filters.maxValue);

    const filteredProducts = getFilteredProducts(
      getCategoryProducts(subcategory as string, filters),
      queryFilters
    );

    setSelectedProducts([...categoryProducts]);
    setFilteredProducts([...filteredProducts]);

    setSelectedFilters(queryFilters);
  }, []);

  return (
    <>
      <Navigation />
      <Breadcrumbs className="border-bottom" />
      <Container className="mt-3">
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
              <Col lg={2}>
                <ProductSort />
              </Col>
            </Row>
            <hr />
            <Row>
              <MultipleProducts
                pagination={pagination}
                products={filteredProducts}
              />
            </Row>
            <LoadMoreButton
              pagination={pagination}
              setPagination={setPagination}
              productsLength={filteredProducts.length}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductListingPage;
