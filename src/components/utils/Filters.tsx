import React from 'react';

import { useAtom } from 'jotai';
import { Button, Navbar } from 'react-bootstrap';

import filtersAtom from '../../atoms/filters.atom';
import CenteredItems from '../../styles/CenteredItems';
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
        <p className="fs-4 mb-0">Filters</p>
        <hr className="mt-1" />
        <p className="fs-5">Price</p>
        <MultiRangeSlider max={filters.maxValue} />
        <SizeFilter filters={filters} />
        <ColorFilter filters={filters} />

        <CenteredItems className="">
          <Button variant="info" className="w-100">
            Apply filters
          </Button>
        </CenteredItems>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Filters;
