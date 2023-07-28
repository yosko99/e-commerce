import React from 'react';

import { Col } from 'react-bootstrap';

interface Props {
  className?: string;
  onClick?: () => any;
  name: string;
  value: string;
}

const ProductSize = ({ className, onClick, name, value }: Props) => {
  return (
    <Col
      onClick={onClick}
      xs={2}
      style={{ width: '50px', height: '50px' }}
      role="button"
      className={`border m-1 d-flex justify-content-center align-items-center ${className}`}
      id={value}
    >
      <p className="m-0 p-2">{name.slice(0, 3)}</p>
    </Col>
  );
};

export default ProductSize;
