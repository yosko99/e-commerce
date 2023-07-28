import React from 'react';

import { Button } from 'react-bootstrap';

import CustomToast from '../utils/CustomToast';

interface Props {
  productName: string;
  className?: string;
}

const AddToCartButton = ({ productName, className }: Props) => {
  return (
    <CustomToast
      activateElement={
        <Button variant="dark" className={className}>
          Add to cart
        </Button>
      }
      type="success"
      body={`${productName} was added to your cart`}
    />
  );
};

export default AddToCartButton;
