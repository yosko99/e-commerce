import React, { useEffect, useState } from 'react';

import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import categories from '../../data/categories';
import flattenArray from '../../functions/flatterArray';
import useChangeCategory from '../../hooks/useChangeCategory';
import ISubcategory from '../../interfaces/ISubcategory';

interface Props {
  categoryIndex: number;
}

const NavbarCategories = ({ categoryIndex }: Props) => {
  const { handleUpdateCategory } = useChangeCategory();

  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(-1);
  const [navbarCategories, setNavbarCategories] = useState<ISubcategory[]>([]);

  useEffect(() => {
    const index = categoryIndex === -1 ? 0 : categoryIndex;
    setNavbarCategories(
      flattenArray(
        categories[index].categories.map((category) =>
          category.categories?.map((subcategory) => subcategory)
        )
      )
    );
  }, [categoryIndex]);

  return (
    <>
      {categoryIndex !== -1 && (
        <div
          className="w-100 d-flex py-1"
          style={{
            backgroundColor: '#525050',
            position: 'absolute',
            top: '60px'
          }}
        >
          <Container className="d-flex">
            {navbarCategories.map((subcategory: ISubcategory, index) => (
              <Link
                key={subcategory.name}
                onMouseEnter={() => setHoveredCategoryIndex(index)}
                onMouseLeave={() => setHoveredCategoryIndex(-1)}
                style={
                  hoveredCategoryIndex === index
                    ? { transform: 'skew(-12deg)', backgroundColor: 'red' }
                    : {}
                }
                onClick={() => handleUpdateCategory(subcategory)}
                to={`/${'men'.toLowerCase()}/${subcategory.id}`}
              >
                <Button
                  style={{ transform: 'skew(-12deg)' }}
                  className="w-100 shadow-none text-white"
                  variant=""
                >
                  {subcategory.name}
                </Button>
              </Link>
            ))}
          </Container>
        </div>
      )}
    </>
  );
};

export default NavbarCategories;
