/* eslint-disable multiline-ternary */
import React from 'react';

import { Row } from 'react-bootstrap';

import ProductColor from './ProductColor';
import IImageGroup from '../../../interfaces/IImageGroup';
import IProduct from '../../../interfaces/IProduct';
import ProductSize from '../sizes/ProductSize';

interface Props {
  distinctSwatches: Map<string, string>;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  setImageGroup: React.Dispatch<React.SetStateAction<IImageGroup>>;
  selectedColor: string;
  product: IProduct;
}

const QuickViewColors = ({
  distinctSwatches,
  setSelectedColor,
  selectedColor,
  setImageGroup,
  product
}: Props) => {
  const handleSelectColor = (value: string) => {
    setSelectedColor(value);
    const newImageGroup = product.image_groups.find(
      (imageGroup) =>
        imageGroup.variation_value === value && imageGroup.view_type === 'large'
    );
    if (newImageGroup !== undefined) {
      setImageGroup(newImageGroup);
    }
  };

  return (
    <Row className="w-75 ps-2">
      {distinctSwatches.size === 0 ? (
        <ProductSize name={'N/A'} value={'na'} />
      ) : (
        Array.from(distinctSwatches).map((swatch, index) => (
          <ProductColor
            onClick={() => handleSelectColor(swatch[0])}
            link={swatch[1]}
            key={index}
            colSize={2}
            size={50}
            className={
              selectedColor === swatch[0] ? 'border-success border-3' : ''
            }
          />
        ))
      )}
    </Row>
  );
};

export default QuickViewColors;
