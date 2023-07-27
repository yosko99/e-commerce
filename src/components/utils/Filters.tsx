import React from 'react';

import { useAtom } from 'jotai';
import { Navbar, Offcanvas } from 'react-bootstrap';

import filtersAtom from '../../atoms/filters.atom';
import ApplyFiltersButton from '../buttons/ApplyFiltersButton';
import ColorFilter from '../filters/ColorFilter';
import MultiRangeSlider from '../filters/MultiRangeSlider';
import SizeFilter from '../filters/SizeFilter';

const Filters = () => {
  const [filters] = useAtom(filtersAtom);

  return (
    <Navbar expand="lg" style={{ boxShadow: 'none' }}>
      <Navbar.Toggle
        className="border text-center w-100 p-2"
        aria-controls={'offcanvasNavbar-expand-md'}
      >
        Filters
      </Navbar.Toggle>
      <Navbar.Offcanvas
        id={'offcanvasNavbar-expand-md'}
        aria-labelledby={'offcanvasNavbarLabel-expand-md'}
        placement="start"
        className="p-3 h-100"
        style={{ height: '100%', overflow: 'auto' }}
      >
        <div className="d-flex justify-content-between">
          <p className="fs-4 mb-0">Filters</p>
          <Offcanvas.Header closeButton></Offcanvas.Header>
        </div>
        <hr className="mt-1" />
        <p className="fs-5">Price</p>
        <MultiRangeSlider max={filters.maxValue} />
        <SizeFilter filters={filters} />
        <ColorFilter filters={filters} />

        <ApplyFiltersButton />
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Filters;
