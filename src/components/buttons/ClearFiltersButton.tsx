import React from 'react';

import { useAtom } from 'jotai';
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

import filteredProductsAtom from '../../atoms/filteredProducts.atom';
import filtersAtom from '../../atoms/filters.atom';
import selectedFiltersAtom from '../../atoms/selectedFilters.atom';
import selectedProductsAtom from '../../atoms/selectedProducts.atom';
import CenteredItems from '../../styles/CenteredItems';

interface Props {
  setDoClearFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClearFiltersButton = ({ setDoClearFilter }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useAtom(selectedFiltersAtom);
  const [filteredProducts, setFilteredProducts] = useAtom(filteredProductsAtom);
  const [selectedProducts] = useAtom(selectedProductsAtom);
  const [filters] = useAtom(filtersAtom);

  const handleClick = () => {
    setSearchParams({});
    setSelectedFilters({
      colors: [],
      sizes: [],
      maxValue: filters.maxValue,
      minValue: 0
    });
    setFilteredProducts(selectedProducts);
    setDoClearFilter(true);
  };

  return (
    <CenteredItems>
      <Button variant="" onClick={handleClick} className="w-100 mt-3">
        Clear filters
      </Button>
    </CenteredItems>
  );
};

export default ClearFiltersButton;
