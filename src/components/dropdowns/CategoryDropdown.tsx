import React from 'react';

import { Button, ButtonGroup, Dropdown, NavDropdown } from 'react-bootstrap';

import categories from '../../data/categories';

interface Props {
  gender: 'Men' | 'Women';
}

const CategoryDropdown = ({ gender }: Props) => {
  const categoryIndex = gender === 'Men' ? 0 : 1;

  return (
    <Dropdown as={ButtonGroup} className="shadow-sm mx-2 border ">
      <Button variant="" className="text-dark w-100" disabled>
        {gender}
      </Button>
      <Dropdown.Toggle variant="" id="dropdown-split-basic" />

      <Dropdown.Menu>
        {categories[categoryIndex].categories.map((category, categoryIndex) =>
          category.categories?.map((subcategory, subcategoryIndex) => (
            <NavDropdown.Item key={subcategoryIndex} href="#asd" role="button">
              {subcategory.name}
            </NavDropdown.Item>
          ))
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryDropdown;
