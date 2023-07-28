import React from 'react';

import { useAtom } from 'jotai';

import filteredProductsAtom from '../../atoms/filteredProducts.atom';
import modalProductIndexAtom from '../../atoms/modalProductIndex.atom';

const PrevProductButton = () => {
  const [filteredProducts] = useAtom(filteredProductsAtom);
  const [modalProductIndex, setModalProductIndex] = useAtom(
    modalProductIndexAtom
  );

  const handlePrevClick = () => {
    const productIndex = filteredProducts.indexOf(
      filteredProducts[modalProductIndex]
    );
    if (productIndex !== 0) {
      setModalProductIndex(productIndex - 1);
    }
  };

  return (
    <div
      className={`shadow-none badge bg-${
        modalProductIndex !== 0 ? 'dark' : 'secondary'
      } p-2`}
      role="button"
      onClick={handlePrevClick}
    >
      {'<'} Previous
    </div>
  );
};

export default PrevProductButton;
