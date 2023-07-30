import React from 'react';

import { AiFillHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import CenteredItems from '../../../styles/CenteredItems';

const FavoriteButton = () => {
  const navigate = useNavigate();

  return (
    <CenteredItems flexColumn role="button" className="me-2 m-0 p-0">
      <AiFillHeart
        size={30}
        color="white"
        onClick={() => navigate('/favorites')}
      />
    </CenteredItems>
  );
};

export default FavoriteButton;
