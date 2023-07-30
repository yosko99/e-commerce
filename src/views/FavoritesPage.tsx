/* eslint-disable indent */
/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react';

import { Col, Container, Image, Row } from 'react-bootstrap';

import FavoriteProductCard from '../components/cards/FavoriteProductCard';
import Navigation from '../components/navigation/Navigation';
import products from '../data/products';
import IProduct from '../interfaces/IProduct';

const FavoritesPage = () => {
  const likedProductsLocalStorage = localStorage.getItem('liked');
  const [favoriteProducts, setFavoriteProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (likedProductsLocalStorage !== null) {
      const productIds: string[] = JSON.parse(likedProductsLocalStorage);
      setFavoriteProducts(
        products.filter((product) => productIds.includes(product.id))
      );
    }
  }, []);

  return (
    <>
      <Navigation />
      <Container>
        {likedProductsLocalStorage === null ||
        likedProductsLocalStorage === '[]' ? (
          <div className="text-center">
            <Image
              src={require('../assets/favorites-page/no-favourites-us.webp')}
              fluid
              alt="no favourites"
            />
          </div>
        ) : (
          <>
            <p className="fw-bold fs-1 mb-0 mt-3">My favorites</p>
            <p className="text-muted">Home / Favorites</p>
            <Row className="d-flex justify-content-center">
              {favoriteProducts.map((product, index) => (
                <Col lg={3} md={6} key={index}>
                  <FavoriteProductCard product={product} />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default FavoritesPage;
