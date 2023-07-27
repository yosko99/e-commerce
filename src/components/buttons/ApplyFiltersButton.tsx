import React from 'react';

import { useAtom } from 'jotai';
import { Button } from 'react-bootstrap';

import filteredProductsAtom from '../../atoms/filteredProducts.atom';
import selectedFiltersAtom from '../../atoms/selectedFilters.atom';
import selectedProductsAtom from '../../atoms/selectedProducts.atom';
import getFilteredProducts from '../../functions/getFilteredProducts';
import CenteredItems from '../../styles/CenteredItems';

const ApplyFiltersButton = () => {
  const [filteredProducts, setFilteredProducts] = useAtom(filteredProductsAtom);
  const [selectedProducts] = useAtom(selectedProductsAtom);
  const [selectedFilters] = useAtom(selectedFiltersAtom);

  const handleClick = () => {
    const filteredProducts = getFilteredProducts(
      selectedProducts,
      selectedFilters
    );

    setFilteredProducts([...filteredProducts]);
  };

  return (
    <CenteredItems className="">
      <Button variant="info" onClick={handleClick} className="w-100">
        Apply filters
      </Button>
    </CenteredItems>
  );
};

export default ApplyFiltersButton;
