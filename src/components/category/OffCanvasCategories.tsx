import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import categories from '../../data/categories';
import useChangeCategory from '../../hooks/useChangeCategory';
import CenteredItems from '../../styles/CenteredItems';
import CustomOffCanvas from '../utils/CustomOffCanvas';

const OffCanvasCategories = () => {
  const { handleUpdateCategory } = useChangeCategory();
  const [clickedCategory, setClickedCategory] = useState('men');

  return (
    <CustomOffCanvas
      body={
        <>
          <div className="d-flex">
            <CenteredItems
              onClick={() => setClickedCategory('men')}
              role="button"
              className={`h-100 w-100 ${
                clickedCategory === 'men' ? 'border-bottom fw-bold' : ''
              }`}
            >
              <p className="m-0 p-4">MEN</p>
            </CenteredItems>
            <CenteredItems
              onClick={() => setClickedCategory('women')}
              role="button"
              className={`h-100 w-100 ${
                clickedCategory === 'women' ? 'border-bottom fw-bold' : ''
              }`}
            >
              <p className="m-0 p-4">WOMEN</p>
            </CenteredItems>
          </div>
          <div className="d-flex flex-column">
            {categories[clickedCategory === 'men' ? 0 : 1].categories.map(
              (category) =>
                category.categories?.map((subcategory, subcategoryIndex) => (
                  <Link
                    key={subcategoryIndex}
                    onClick={() => handleUpdateCategory(subcategory)}
                    to={`/${clickedCategory.toLowerCase()}/${subcategory.id}`}
                  >
                    <div
                      style={{ backgroundColor: '#EFEFEF' }}
                      className="w-100 p-5 ps-4 fs-5 text-uppercase fw-bold text-dark my-2"
                    >
                      {subcategory.name}
                    </div>
                  </Link>
                ))
            )}
          </div>
        </>
      }
      position="start"
      activateElement={
        <GiHamburgerMenu
          role="button"
          color="white"
          className="me-3 d-lg-none"
          size={30}
        />
      }
      title="Choose category"
    />
  );
};

export default OffCanvasCategories;
