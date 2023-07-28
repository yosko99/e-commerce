import React, { useEffect, useState } from 'react';

import { AiFillHeart } from 'react-icons/ai';

import CenteredItems from '../../styles/CenteredItems';

const FavoriteButton = () => {
  const [counter, setCounter] = useState<number>();

  const setCounterNumber = () => {
    const localStorageLiked = localStorage.getItem('liked');

    if (localStorageLiked === null || localStorageLiked === '') {
      setCounter(0);
    } else {
      setCounter(JSON.parse(localStorageLiked).length);
    }
  };

  useEffect(() => {
    setCounterNumber();
    window.addEventListener('storage', setCounterNumber);
  }, []);

  return (
    <CenteredItems flexColumn role="button" className="me-2 m-0 p-0">
      <div>
        <AiFillHeart />
        <span className="text-black ps-2 pe-2">{counter}</span>
      </div>
      <small className="text-center">Favorites</small>
    </CenteredItems>
  );
};

export default FavoriteButton;
