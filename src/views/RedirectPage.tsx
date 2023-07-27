import React, { useEffect } from 'react';

import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import filteredProductsAtom from '../atoms/filteredProducts.atom';
import filtersAtom from '../atoms/filters.atom';
import selectedCategoryAtom from '../atoms/selectedCategory.atom';
import selectedProductsAtom from '../atoms/selectedProducts.atom';
import getCategoryProducts from '../functions/getCategoryProducts';

const RedirectPage = () => {
  const navigate = useNavigate();
  const [selectedCategory] = useAtom(selectedCategoryAtom);
  const [selectedProducts, setSelectedProducts] = useAtom(selectedProductsAtom);
  const [filteredProducts, setFilteredProducts] = useAtom(filteredProductsAtom);
  const [filters] = useAtom(filtersAtom);

  useEffect(() => {
    const categoryProducts = getCategoryProducts(selectedCategory.id, filters);

    setSelectedProducts([...categoryProducts]);
    setFilteredProducts([...categoryProducts]);
  }, []);

  useEffect(() => {
    navigate('/men/mens-clothing-suits');
  }, []);
  return <></>;
};

export default RedirectPage;
