import React from 'react';

import { useAtom } from 'jotai';
import { MdZoomOutMap } from 'react-icons/md';

import QuickViewProductBody from './QuickViewProductBody';
import filteredProductsAtom from '../../atoms/filteredProducts.atom';
import modalProductIndexAtom from '../../atoms/modalProductIndex.atom';
import IProduct from '../../interfaces/IProduct';
import QuickViewLabel from '../../styles/labels/QuickViewLabel';
import NextProductButton from '../buttons/NextProductButton';
import PrevProductButton from '../buttons/PrevProductButton';
import Modal from '../utils/Modal';

interface Props {
  product: IProduct;
  onCloseFunction?: () => void;
}

const QuickViewProduct = ({ product, onCloseFunction }: Props) => {
  const [filteredProducts] = useAtom(filteredProductsAtom);
  const [modalProductIndex, setModalProductIndex] = useAtom(
    modalProductIndexAtom
  );

  const handleInitClick = () => {
    const productIndex = filteredProducts.indexOf(product);
    setModalProductIndex(productIndex);
  };

  return (
    <Modal
      header={<p className="text-uppercase p-2 m-0">Product Quick View</p>}
      body={
        <>
          <div className="d-flex justify-content-between p-2 px-4">
            <PrevProductButton />
            <NextProductButton />
          </div>
          <QuickViewProductBody product={filteredProducts[modalProductIndex]} />
        </>
      }
      onCloseFunction={onCloseFunction}
      activateButtonElement={
        <QuickViewLabel onClick={handleInitClick}>
          Quick view <MdZoomOutMap />
        </QuickViewLabel>
      }
    />
  );
};

export default QuickViewProduct;
