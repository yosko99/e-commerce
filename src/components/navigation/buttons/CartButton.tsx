import React from 'react';

import { BiSolidCart } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import CenteredItems from '../../../styles/CenteredItems';

const CartButton = () => {
  const navigate = useNavigate();

  return (
    <CenteredItems flexColumn role="button" className="me-2 m-0 p-0">
      <BiSolidCart onClick={() => navigate('/cart')} size={30} color="white" />
    </CenteredItems>
  );
};

export default CartButton;
