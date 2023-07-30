/* eslint-disable multiline-ternary */
import React, { useEffect } from 'react';

import { useAtomValue } from 'jotai';
import { Col, Container, Image, Row } from 'react-bootstrap';

import EmptyCartImg from '../assets/cart-page/empty-cart.jpg';
import cartAtom from '../atoms/cart.atom';
import TotalPriceContainer from '../components/cart/TotalPriceContainer';
import Breadcrumbs from '../components/navigation/Breadcrumbs';
import Navigation from '../components/navigation/Navigation';
import CartProduct from '../components/product/CartProduct';
import FreeShippingContainer from '../components/utils/FreeShippingContainer';
import CenteredItems from '../styles/CenteredItems';

const CartPage = () => {
  const cart = useAtomValue(cartAtom);
  const total = cart.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <Breadcrumbs />
      {cart.length === 0 ? (
        <CenteredItems flexColumn>
          <Image src={EmptyCartImg} fluid alt="empty cart" />
          <p className="fw-bold fs-4 text-center">
            Currently your cart is empty
          </p>
        </CenteredItems>
      ) : (
        <Container>
          <Row>
            <Col lg={8} className="d-flex flex-column">
              <FreeShippingContainer />
              <div className="p-4 border">
                <div className="d-md-flex flex-md-row flex-column align-items-center justify-content-between">
                  <p className="fw-bold fs-3 m-0">MY BAG</p>
                  <p className="m-0">Items are reserved for 60 minutes</p>
                </div>
                <hr />
                <div style={{ height: '380px', overflow: 'auto' }}>
                  {cart.map((cartItem, index) => (
                    <div key={index} className="pe-3">
                      <CartProduct cartItem={cartItem} />
                      <hr className="w-100" />
                    </div>
                  ))}
                </div>
                <div className="fw-bold text-uppercase d-flex justify-content-end fs-4 mt-4 mb-2">
                  Sub-total ${total.toFixed(2)}
                </div>
              </div>
            </Col>
            <Col lg={4} className="p-4 border h-50">
              <TotalPriceContainer total={total} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default CartPage;
