import React from 'react';

import { useAtom } from 'jotai';

import filteredProductsAtom from '../atoms/filteredProducts.atom';
import filtersAtom from '../atoms/filters.atom';
import selectedCategoryAtom from '../atoms/selectedCategory.atom';
import selectedFiltersAtom from '../atoms/selectedFilters.atom';
import selectedProductsAtom from '../atoms/selectedProducts.atom';
import getCategoryProducts from '../functions/getCategoryProducts';
import ISubcategory from '../interfaces/ISubcategory';

const useChangeCategory = () => {
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);
  const [selectedProducts, setSelectedProducts] = useAtom(selectedProductsAtom);
  const [filteredProducts, setFilteredProducts] = useAtom(filteredProductsAtom);
  const [selectedFilters, setSelectedFilters] = useAtom(selectedFiltersAtom);
  const [filters] = useAtom(filtersAtom);

  const handleUpdateCategory = (category: ISubcategory) => {
    filters.distinctSizes = new Map();
    filters.distinctSwatches = new Map();
    filters.maxValue = 0;

    const categoryProducts = getCategoryProducts(category.id, filters);

    setSelectedProducts([...categoryProducts]);
    setFilteredProducts([...categoryProducts]);
    setSelectedCategory(category);
    setSelectedFilters({
      colors: [],
      sizes: [],
      maxValue: filters.maxValue,
      minValue: 0
    });
  };

  return { handleUpdateCategory };
};

export default useChangeCategory;
