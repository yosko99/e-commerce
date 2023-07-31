import React from 'react';

import { Button, Image } from 'react-bootstrap';

import QuickViewProductBody from './QuickViewProductBody';
import IProduct from '../../interfaces/IProduct';
import Modal from '../utils/Modal';

interface Props {
  isHovered: boolean;
  product: IProduct;
  setHoveredSearchIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  onClick?: () => void;
}

const SearchBarProduct = ({
  isHovered,
  product,
  setHoveredSearchIndex,
  index,
  onClick
}: Props) => {
  return (
    <Modal
      header={<p className="text-uppercase p-2 m-0">Product Quick View</p>}
      body={
        <>
          <QuickViewProductBody product={product} />
        </>
      }
      activateButtonElement={
        <Button
          onClick={() => onClick && onClick()}
          variant={isHovered ? 'secondary' : ''}
          onMouseOver={() => setHoveredSearchIndex(index)}
          onMouseLeave={() => setHoveredSearchIndex(-1)}
          className="w-100 shadow-none d-flex align-items-center"
        >
          <Image
            style={{ objectFit: 'contain' }}
            width={50}
            className="me-3"
            height={50}
            src={require(`../../assets/${product.image_groups[0].images[0].link}`)}
          />
          <p className="m-0">{product.name}</p>
        </Button>
      }
    />
  );
};

export default SearchBarProduct;
