/* eslint-disable multiline-ternary */
import React from 'react';

import { Row } from 'react-bootstrap';

import ProductSize from './ProductSize';

interface Props {
  distinctSizes: Map<string, string>;
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

const QuickViewSizes = ({
  distinctSizes,
  setSelectedSize,
  selectedSize
}: Props) => {
  return (
    <Row className="w-75 ps-2">
      {distinctSizes.size === 0 ? (
        <ProductSize name={'N/A'} value={'na'} />
      ) : (
        Array.from(distinctSizes).map((size, index) => (
          <ProductSize
            onClick={() => setSelectedSize(size[0])}
            name={size[0]}
            value={size[1]}
            key={index}
            className={
              selectedSize === size[0] ? 'bg-dark text-white' : 'bg-white'
            }
          />
        ))
      )}
    </Row>
  );
};

export default QuickViewSizes;
