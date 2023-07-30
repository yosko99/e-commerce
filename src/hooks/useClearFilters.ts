import React from 'react';

import { useAtomValue, useSetAtom } from 'jotai';
import { useSearchParams } from 'react-router-dom';

import filteredProductsAtom from '../atoms/filteredProducts.atom';
import filtersAtom from '../atoms/filters.atom';
import selectedFiltersAtom from '../atoms/selectedFilters.atom';
import selectedProductsAtom from '../atoms/selectedProducts.atom';

export const useClearFilters = (
  setDoClearFilter?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const setSelectedFilters = useSetAtom(selectedFiltersAtom);
  const setFilteredProducts = useSetAtom(filteredProductsAtom);
  const selectedProducts = useAtomValue(selectedProductsAtom);
  const filters = useAtomValue(filtersAtom);

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
