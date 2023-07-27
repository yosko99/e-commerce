import React from 'react';

import { useAtom } from 'jotai';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import filteredProductsAtom from '../../atoms/filteredProducts.atom';
import filtersAtom from '../../atoms/filters.atom';
import selectedCategoryAtom from '../../atoms/selectedCategory.atom';
import selectedFiltersAtom from '../../atoms/selectedFilters.atom';
import selectedProductsAtom from '../../atoms/selectedProducts.atom';
import categories from '../../data/categories';
import getCategoryProducts from '../../functions/getCategoryProducts';
import ISubcategory from '../../interfaces/ISubcategory';

interface Props {
  gender: 'Men' | 'Women';
  className?: string;
}

const CategoryDropdown = ({ gender, className }: Props) => {
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);
  const [selectedProducts, setSelectedProducts] = useAtom(selectedProductsAtom);
  const [filteredProducts, setFilteredProducts] = useAtom(filteredProductsAtom);
  const [selectedFilters, setSelectedFilters] = useAtom(selectedFiltersAtom);
  const [filters] = useAtom(filtersAtom);

  const categoryIndex = gender === 'Men' ? 0 : 1;

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

  return (
    <Dropdown as={ButtonGroup} className={`shadow-sm mx-2 border ${className}`}>
      <Button variant="" className="text-dark w-100" disabled>
        {gender}
      </Button>
      <Dropdown.Toggle variant="" id="dropdown-split-basic" />

      <Dropdown.Menu>
        {categories[categoryIndex].categories.map((category) =>
          category.categories?.map((subcategory, subcategoryIndex) => (
            <Link
              key={subcategoryIndex}
              onClick={() => handleUpdateCategory(subcategory)}
              to={`/${gender.toLowerCase()}/${subcategory.id}`}
            >
              <Button className="w-100 shadow-none" variant="">
                {subcategory.name}
              </Button>
            </Link>
          ))
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryDropdown;
