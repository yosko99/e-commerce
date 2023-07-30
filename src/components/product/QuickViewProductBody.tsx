/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react';

import { Button, Form } from 'react-bootstrap';

import QuickViewColors from './colors/QuickViewColors';
import ProductImageWithThumbnails from './ProductImageWithThumbnails';
import ProductPrice from './ProductPrice';
import QuickViewSizes from './sizes/QuickViewSizes';
import getFirstMapEntries from '../../functions/getFirstMapEntries';
import initFilters from '../../functions/initFilters';
import IFilter from '../../interfaces/IFilter';
import IProduct from '../../interfaces/IProduct';
import CenteredItems from '../../styles/CenteredItems';
import AddToCartButton from '../buttons/AddToCartButton';
import ShareButtons from '../buttons/ShareButtons';

interface Props {
  product: IProduct;
}

const QuickViewProductBody = ({ product }: Props) => {
  const [imageGroup, setImageGroup] = useState(product.image_groups[0]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [qty, setQty] = useState(1);
  const [variants, setVariants] = useState<IFilter>({
    distinctSwatches: new Map(),
    distinctSizes: new Map(),
    maxValue: 0
  });

  useEffect(() => {
    variants.distinctSizes = new Map();
    variants.distinctSwatches = new Map();

    initFilters(product, variants);
    setVariants({ ...variants });
    const firstColor = getFirstMapEntries(variants.distinctSwatches);
    setSelectedColor(firstColor[0]);
    const firstSize = getFirstMapEntries(variants.distinctSizes);
    setSelectedSize(firstSize[0]);
    setImageGroup(product.image_groups[0]);
  }, [product]);

  return (
    <CenteredItems>
      <div className="d-flex">
        <div>
          <ProductImageWithThumbnails
            imageGroup={imageGroup}
            imageSize="100%"
            className="p-5"
            thumbnailSize="50px"
          />
        </div>
        <div className="border-start ps-4 pt-2 pe-2" style={{ width: '500px' }}>
          <p className="mb-0 fs-3">{product.name}</p>
          <small className="text-muted m-0 mb-3">Item No. {product.id}</small>
          <ProductPrice className="mt-2 fs-4 mb-2" product={product} />
          <p className="fw-bold mt-2">Select size</p>
          <QuickViewSizes
            distinctSizes={variants.distinctSizes}
            setSelectedSize={setSelectedSize}
            selectedSize={selectedSize}
          />
          <p className="fw-bold mt-2">Select color</p>
          <QuickViewColors
            distinctSwatches={variants.distinctSwatches}
            product={product}
            selectedColor={selectedColor}
            setImageGroup={setImageGroup}
            setSelectedColor={setSelectedColor}
          />
          <hr className="me-3" />
          <p className="fw-bold m-0">AVAILABILITY</p>
          <small className="text-success m-0">In stock</small>
          <div className="d-flex align-items-center mt-2">
            <p className="m-0 me-2 fw-bold">QTY</p>
            <Form.Control
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              max={9}
              style={{ width: '50px', height: '50px' }}
            />
            <AddToCartButton
              product={product}
              qty={qty}
              color={selectedColor}
              size={selectedSize}
              className="ms-2 bg-dark"
            />
          </div>
          <hr className="me-3" />
          <div className="d-flex">
            <Button variant="outline-secondary">Add to wishlist</Button>
            <Button variant="outline-secondary">Add to gift registry</Button>
          </div>
          <ShareButtons size={40} className="my-3 mb-4" />
        </div>
      </div>
    </CenteredItems>
  );
};

export default QuickViewProductBody;
