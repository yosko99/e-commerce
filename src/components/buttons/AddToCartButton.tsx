import React from 'react';

import { Button } from 'react-bootstrap';

import CustomToast from '../utils/CustomToast';

interface Props {
  productName: string;
}

const AddToCartButton = ({ productName }: Props) => {
  return (
    <CustomToast
      activateElement={
        <Button variant="dark" className="badge">
          Add to cart
        </Button>
      }
      body={`${productName} was added to your cart`}
    />
  );
};

export default AddToCartButton;
