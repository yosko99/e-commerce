import React from 'react';

import { useAtom } from 'jotai';
import { useSearchParams } from 'react-router-dom';

import filteredProductsAtom from '../atoms/filteredProducts.atom';
import filtersAtom from '../atoms/filters.atom';
import selectedFiltersAtom from '../atoms/selectedFilters.atom';
import selectedProductsAtom from '../atoms/selectedProducts.atom';

export const useClearFilters = (
  setDoClearFilter?: React.Dispatch<React.SetStateAction<boolean>>
) => {
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
    setDoClearFilter && setDoClearFilter(true);
  };

  return { handleClick };
};
