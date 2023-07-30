import React from 'react';

import TopPartProductCard from './TopPartProductCard';
import IProduct from '../../interfaces/IProduct';
import CenteredItems from '../../styles/CenteredItems';
import ProductFavorite from '../product/ProductFavorite';
import ProductPrice from '../product/ProductPrice';

interface Props {
  product: IProduct;
}

const FavoriteProductCard = ({ product }: Props) => {
  return (
    <div className="d-flex flex-column">
      <TopPartProductCard product={product} showQuickView={false} />
      <p className="text-center m-0 mb-1">{product.name}</p>
      <ProductPrice
        product={product}
        className="justify-content-center fw-bold fs-5 mb-1"
      />
      <CenteredItems className="text-center" style={{ fontSize: '0.9em' }}>
        <p className="border p-1">
          {}
          <ProductFavorite
            product={product}
            favoriteText="Favorited "
            nonFavoriteText="Unfavored "
          />
        </p>
      </CenteredItems>
    </div>
  );
};

export default FavoriteProductCard;
