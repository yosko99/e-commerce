import React from 'react';

import { Button, Form, Image } from 'react-bootstrap';

import AcceptedCardsImg from '../../assets/cart-page/accepted-cards.png';
import { DELIVERY_PRICE } from '../../constants/pricing';

interface Props {
  total: number;
}

const TotalPriceContainer = ({ total }: Props) => {
  return (
    <>
      <p className="fw-bold fs-3 m-0">TOTAL</p>
      <hr />
      <div className="d-flex justify-content-between fs-5">
        <div className="fw-bold">
          <p className="m-0">Sub-total</p>
          <p className="m-0">Delivery</p>
          <p className="m-0">Estimated tax</p>
        </div>
        <div className="fw-bold d-flex align-items-end flex-column">
          <p className="m-0">$ {total.toFixed(2)}</p>
          <p className="m-0">$ {DELIVERY_PRICE}</p>
          <p className="m-0">--</p>
        </div>
      </div>
      <hr />
      <div className="d-flex w-100 fw-bold justify-content-between fs-5">
        <div>
          <p className="m-0">Total</p>
        </div>
        <div>
          <p className="m-0">$ {(total + DELIVERY_PRICE).toFixed(2)}</p>
        </div>
      </div>
      <Form.Select className="text-muted mt-3">
        <option>Courier brand</option>
      </Form.Select>
      <Button variant="success" className="fs-5 w-100 mt-3">
        CHECKOUT
      </Button>
      <p className="text-uppercase fw-bold mt-3 mb-0">We accept:</p>
      <Image src={AcceptedCardsImg} alt="accepted cards" fluid />
      <p>Got a discount code? Add it in the next step.</p>
    </>
  );
};

export default TotalPriceContainer;
