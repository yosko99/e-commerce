/* eslint-disable multiline-ternary */
import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

import products from '../../data/products';
import IProduct from '../../interfaces/IProduct';
import SearchBarProduct from '../product/SearchBarProduct';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
  isInputFocused: boolean;
  setIsInputFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductSearch = ({
  inputRef,
  isInputFocused,
  setIsInputFocused
}: Props) => {
  const [searchedProducts, setSearchedProducts] = useState<IProduct[]>([]);
  const [value, setValue] = useState('');
  const [hoveredSearchIndex, setHoveredSearchIndex] = useState(-1);

  const handleSearch = (value: string) => {
    setValue(value);
    setSearchedProducts(
      products.filter((product) => product.name.toLowerCase().includes(value))
    );
  };

  const handleOnBlur = () => {
    setValue('');
    setSearchedProducts([]);
    setIsInputFocused(false);
  };

  return (
    <div
      style={{ position: 'relative' }}
      className={`w-100 me-5 ${
        isInputFocused && window.innerWidth <= 768
          ? 'd-block'
          : 'd-none d-md-block'
      }`}
    >
      <div className="search-product-input-container">
        {isInputFocused &&
          value.length !== 0 &&
          searchedProducts.map((product, index) =>
            index === 0 ? (
              <Button variant="" key={index}>
                <p></p>
              </Button>
            ) : (
              index < 6 && (
                <SearchBarProduct
                  onClick={() => {
                    setIsInputFocused(true);
                    inputRef.current?.focus();
                  }}
                  isHovered={index === hoveredSearchIndex}
                  setHoveredSearchIndex={setHoveredSearchIndex}
                  index={index}
                  product={product}
                />
              )
            )
          )}
      </div>
      <input
        ref={inputRef}
        type="text"
        autoFocus={isInputFocused}
        onFocus={() => setIsInputFocused(true)}
        className="p-1 ps-4 mx-4 search-product-input"
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search"
      />
      <div
        onClick={handleOnBlur}
        className={`backdrop ${isInputFocused ? 'active' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;
