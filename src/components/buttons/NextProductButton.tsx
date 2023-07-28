import React from 'react';

import { useAtom } from 'jotai';

import filteredProductsAtom from '../../atoms/filteredProducts.atom';
import modalProductIndexAtom from '../../atoms/modalProductIndex.atom';

const NextProductButton = () => {
  const [filteredProducts] = useAtom(filteredProductsAtom);
  const [modalProductIndex, setModalProductIndex] = useAtom(
    modalProductIndexAtom
  );

  const handleNextClick = () => {
    const productIndex = filteredProducts.indexOf(
      filteredProducts[modalProductIndex]
    );
    if (productIndex !== filteredProducts.length - 1) {
      setModalProductIndex(productIndex + 1);
    }
  };
  return (
    <div
      onClick={handleNextClick}
      className={`shadow-none badge bg-${
        modalProductIndex !== filteredProducts.length - 1 ? 'dark' : 'secondary'
      } p-2`}
      role="button"
    >
      Next {'>'}
    </div>
  );
};

export default NextProductButton;
