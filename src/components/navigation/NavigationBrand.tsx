import React from 'react';

import { Navbar } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

import { useClearFilters } from '../../hooks/useClearFilters';

const NavigationBrand = () => {
  const { handleClick: handleClearFilters } = useClearFilters();
  const navigate = useNavigate();
  const { subcategory } = useParams();

  const handleClick = () => {
    if (subcategory === undefined) {
      navigate('/');
    } else {
      handleClearFilters();
    }
  };

  return (
    <Navbar.Brand href="#" onClick={handleClick} className="text-white">
      <p className="m-0 fw-bold">Brand</p>
    </Navbar.Brand>
  );
};

export default NavigationBrand;
