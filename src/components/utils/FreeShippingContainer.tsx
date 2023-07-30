import React from 'react';

const FreeShippingContainer = () => {
  return (
    <div className="mb-3 p-4 border">
      <p className="m-0 fw-bold fs-5" style={{ color: '#E97040' }}>
        Free shipping for members
      </p>
      <p className="m-0">
        Become a Brand Member for fast and free shipping.{' '}
        <u className="fw-bold" role="button">
          Join us
        </u>{' '}
        or{' '}
        <u className="fw-bold" role="button">
          Sign in
        </u>
      </p>
    </div>
  );
};

export default FreeShippingContainer;
