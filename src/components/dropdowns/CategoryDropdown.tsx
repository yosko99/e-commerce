import React from 'react';

import { useAtom } from 'jotai';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import filtersAtom from '../../atoms/filters.atom';
import selectedCategoryAtom from '../../atoms/selectedCategory.atom';
import selectedProductsAtom from '../../atoms/selectedProducts.atom';
import categories from '../../data/categories';
import products from '../../data/products';
import initFilters from '../../functions/initFilters';
import ISubcategory from '../../interfaces/ISubcategory';

interface Props {
  gender: 'Men' | 'Women';
  className?: string;
}

const CategoryDropdown = ({ gender, className }: Props) => {
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);
  const [selectedProducts, setSelectedProducts] = useAtom(selectedProductsAtom);

  const categoryIndex = gender === 'Men' ? 0 : 1;

  const [filters] = useAtom(filtersAtom);

  const updateCategory = (category: ISubcategory) => {
    filters.distinctSizes = new Map();
    filters.distinctSwatches = new Map();
    filters.maxValue = 0;

    setSelectedProducts(
      products.filter((product) => {
        if (product.primary_category_id === category.id) {
          initFilters(product, filters);
        }
        return product.primary_category_id === category.id;
      })
    );
    setSelectedCategory(category);
  };

  return (
    <Dropdown as={ButtonGroup} className={`shadow-sm mx-2 border ${className}`}>
      <Button variant="" className="text-dark w-100" disabled>
        {gender}
      </Button>
      <Dropdown.Toggle variant="" id="dropdown-split-basic" />

      <Dropdown.Menu>
        {categories[categoryIndex].categories.map((category, categoryIndex) =>
          category.categories?.map((subcategory, subcategoryIndex) => (
            <Link
              key={subcategoryIndex}
              onClick={() => updateCategory(subcategory)}
              to={`/${gender.toLowerCase()}/${subcategory.name.toLowerCase()}`}
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
