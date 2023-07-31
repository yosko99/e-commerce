import React, { useEffect, useState } from 'react';

import { useAtom } from 'jotai';
import { Dropdown } from 'react-bootstrap';
import { BiSort } from 'react-icons/bi';
import {
  BsSortAlphaDown,
  BsSortAlphaUpAlt,
  BsSortUp,
  BsSortUpAlt
} from 'react-icons/bs';

import filteredProductsAtom from '../../atoms/filteredProducts.atom';
import CenteredItems from '../../styles/CenteredItems';

const ProductSort = () => {
  const [filteredProducts, setFilteredProducts] = useAtom(filteredProductsAtom);
  const [selectedSort, setSelectedSort] = useState<React.ReactNode>(
    <BiSort size={20} />
  );

  const sortAZ = () => {
    const sorted = filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredProducts([...sorted]);
    setSelectedSort(<BsSortAlphaDown size={20} />);
  };

  const sortZA = () => {
    const sorted = filteredProducts.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setFilteredProducts([...sorted]);
    setSelectedSort(<BsSortAlphaUpAlt size={20} />);
  };

  const sortPriceAsc = () => {
    const sorted = filteredProducts.sort((a, b) => a.price - b.price);
    setFilteredProducts([...sorted]);
    setSelectedSort(<BsSortUpAlt size={20} />);
  };

  const sortPriceDsc = () => {
    const sorted = filteredProducts.sort((a, b) => b.price - a.price);
    setFilteredProducts([...sorted]);
    setSelectedSort(<BsSortUp size={20} />);
  };

  useEffect(() => {
    setSelectedSort(<BiSort size={20} />);
  }, [window.location.href]);

  return (
    <CenteredItems className="h-100">
      <p className="m-0 me-2">Sort by</p>
      <Dropdown>
        <Dropdown.Toggle variant="" className="shadow-sm text-dark">
          {selectedSort}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={sortAZ}>Alphabetical A-Z</Dropdown.Item>
          <Dropdown.Item onClick={sortZA}>Alphabetical Z-A</Dropdown.Item>
          <Dropdown.Item onClick={sortPriceAsc}>Price ascending</Dropdown.Item>
          <Dropdown.Item onClick={sortPriceDsc}>Price descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </CenteredItems>
  );
};

export default ProductSort;
