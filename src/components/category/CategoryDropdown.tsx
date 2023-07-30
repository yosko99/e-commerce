import React from 'react';

import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import categories from '../../data/categories';
import useChangeCategory from '../../hooks/useChangeCategory';

interface Props {
  gender: 'Men' | 'Women';
  className?: string;
}

const CategoryDropdown = ({ gender, className }: Props) => {
  const { handleUpdateCategory } = useChangeCategory();
  const categoryIndex = gender === 'Men' ? 0 : 1;

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
