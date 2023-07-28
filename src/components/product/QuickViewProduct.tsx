import React from 'react';

import { MdZoomOutMap } from 'react-icons/md';

import QuickViewProductBody from './QuickViewProductBody';
import IProduct from '../../interfaces/IProduct';
import QuickViewLabel from '../../styles/labels/QuickViewLabel';
import Modal from '../utils/Modal';

interface Props {
  product: IProduct;
  onCloseFunction?: () => void;
}

const QuickViewProduct = ({ product, onCloseFunction }: Props) => {
  return (
    <Modal
      header={<p className="text-uppercase p-2 m-0">Product Quick View</p>}
      body={<QuickViewProductBody product={product} />}
      onCloseFunction={onCloseFunction}
      activateButtonElement={
        <QuickViewLabel>
          Quick view <MdZoomOutMap />
        </QuickViewLabel>
      }
    />
  );
};

export default QuickViewProduct;
