import React, { useState } from 'react';

import IProduct from '../../interfaces/IProduct';
import OnSaleLabel from '../../styles/labels/OnSaleLabel';
import ProductImageWithThumbnails from '../product/ProductImageWithThumbnails';
import QuickViewProduct from '../product/QuickViewProduct';

interface Props {
  product: IProduct;
  showQuickView: boolean;
}

const TopPartProductCard = ({ product, showQuickView }: Props) => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsImageHovered(true)}
      onMouseLeave={() => setIsImageHovered(false)}
    >
      {product.c_isSale && <OnSaleLabel>On sale</OnSaleLabel>}
      {showQuickView && isImageHovered && (
        <QuickViewProduct
          onCloseFunction={() => setIsImageHovered(false)}
          product={product}
        />
      )}
      <ProductImageWithThumbnails
        imageGroup={product.image_groups[0]}
        imageSize="250px"
        thumbnailSize="30px"
      />
    </div>
  );
};

export default TopPartProductCard;
