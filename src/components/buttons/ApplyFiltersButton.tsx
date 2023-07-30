import React from 'react';

import { useAtom, useSetAtom } from 'jotai';
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

import filteredProductsAtom from '../../atoms/filteredProducts.atom';
import selectedFiltersAtom from '../../atoms/selectedFilters.atom';
import selectedProductsAtom from '../../atoms/selectedProducts.atom';
import getFilteredProducts from '../../functions/getFilteredProducts';
import CenteredItems from '../../styles/CenteredItems';

const ApplyFiltersButton = () => {
  const setFilteredProducts = useSetAtom(filteredProductsAtom);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProducts] = useAtom(selectedProductsAtom);
  const [selectedFilters] = useAtom(selectedFiltersAtom);

  const handleClick = () => {
    const filteredProducts = getFilteredProducts(
      selectedProducts,
      selectedFilters
    );

    setSearchParams({
      sizes: JSON.stringify(selectedFilters.sizes),
      colors: JSON.stringify(selectedFilters.colors),
      minValue: selectedFilters.minValue.toString(),
      maxValue: selectedFilters.maxValue.toString()
    });

    setFilteredProducts([...filteredProducts]);
  };

  return (
    <CenteredItems>
      <Button variant="info" onClick={handleClick} className="w-100">
        Apply filters
      </Button>
    </CenteredItems>
  );
};

export default ApplyFiltersButton;
