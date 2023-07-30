import React from 'react';

import { Button, Image } from 'react-bootstrap';

import IProduct from '../../interfaces/IProduct';

interface Props {
  isHovered: boolean;
  product: IProduct;
  setHoveredSearchIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}

const SearchBarProduct = ({
  isHovered,
  product,
  setHoveredSearchIndex,
  index
}: Props) => {
  return (
    <Button
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
  );
};

export default SearchBarProduct;
