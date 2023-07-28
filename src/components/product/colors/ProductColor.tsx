import React from 'react';

import { Col, Image } from 'react-bootstrap';

interface Props {
  className?: string;
  onClick?: () => any;
  link: string;
  colSize: number;
  size: number;
}

const ProductColor = ({ link, className, onClick, colSize, size }: Props) => {
  return (
    <Col
      xs={colSize}
      className={`d-flex justify-content-center align-items-center ${
        colSize === 1 ? 'm-1' : ''
      }`}
    >
      <Image
        onClick={onClick}
        role="button"
        className={`border ${className}`}
        width={size}
        height={size}
        src={require(`../../../assets/${link}`)}
      />
    </Col>
  );
};

export default ProductColor;
