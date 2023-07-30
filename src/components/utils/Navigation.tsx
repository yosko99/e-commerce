import React, { useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BiSearchAlt, BiSolidCart, BiSolidUser } from 'react-icons/bi';

import NavigationTopBar from './NavigationTopBar';
import { useClearFilters } from '../../hooks/useClearFilters';
import CenteredItems from '../../styles/CenteredItems';
import FavoriteButton from '../buttons/FavoriteButton';
import NavigationCategoryButton from '../buttons/NavigationCategoryButton';
import NavbarCategories from '../category/NavbarCategories';
import OffCanvasCategories from '../category/OffCanvasCategories';
import ProductSearch from '../filters/ProductSearch';

const Navigation = () => {
  const { handleClick: handleClearFilters } = useClearFilters();
  const [hoveredCategory, setHoveredCategory] = useState('');
  const [categoryIndex, setCategoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleMouseLeave = () => {
    setHoveredCategory('');
    setCategoryIndex(-1);
  };

  const handleMouseOver = (gender: 'men' | 'women') => {
    setCategoryIndex(gender === 'men' ? 0 : 1);
    setHoveredCategory(gender);
  };

  const handleSearchClick = () => {
    setIsInputFocused(true);
    inputRef.current?.focus();
  };

  return (
    <React.Fragment>
      <NavigationTopBar />
      <Navbar
        sticky="top"
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: '#2D2D2D' }}
        className="bg-body-tertiary p-0 d-flex flex-column"
      >
        <Container style={{ height: '60px' }}>
          <OffCanvasCategories />
          <Navbar.Brand
            href="#"
            onClick={handleClearFilters}
            className="text-white"
          >
            <p className="m-0 fw-bold">Brand</p>
          </Navbar.Brand>
          <NavigationCategoryButton
            gender="men"
            hoveredCategory={hoveredCategory}
            onMouseEnter={() => handleMouseOver('men')}
          />
          <NavigationCategoryButton
            gender="women"
            hoveredCategory={hoveredCategory}
            onMouseEnter={() => handleMouseOver('women')}
          />
          <ProductSearch
            inputRef={inputRef}
            setIsInputFocused={setIsInputFocused}
            isInputFocused={isInputFocused}
          />
          <div className="d-flex">
            <CenteredItems flexColumn role="button" className="me-2 m-0 p-0">
              <BiSearchAlt
                onClick={handleSearchClick}
                className="d-md-none"
                size={30}
                color="white"
              />
            </CenteredItems>
            <FavoriteButton />
            <CenteredItems flexColumn role="button" className="me-2 m-0 p-0">
              <BiSolidCart size={30} color="white" />
            </CenteredItems>
            <CenteredItems flexColumn role="button" className="me-2 m-0 p-0">
              <BiSolidUser size={30} color="white" />
            </CenteredItems>
          </div>
        </Container>
        <NavbarCategories categoryIndex={categoryIndex} />
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
