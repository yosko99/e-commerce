import React, { useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import CartButton from './buttons/CartButton';
import FavoriteButton from './buttons/FavoriteButton';
import ProfileButton from './buttons/ProfileButton';
import SearchProductButton from './buttons/SearchProductButton';
import NavigationBrand from './NavigationBrand';
import NavigationTopBar from './NavigationTopBar';
import NavigationCategoryButton from '../buttons/NavigationCategoryButton';
import NavbarCategories from '../category/NavbarCategories';
import OffCanvasCategories from '../category/OffCanvasCategories';
import ProductSearch from '../filters/ProductSearch';

const Navigation = () => {
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
        <Container className="navigation">
          <OffCanvasCategories />
          <NavigationBrand />
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
            <SearchProductButton handleSearchClick={handleSearchClick} />
            <FavoriteButton />
            <CartButton />
            <ProfileButton />
          </div>
        </Container>
        <NavbarCategories categoryIndex={categoryIndex} />
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
