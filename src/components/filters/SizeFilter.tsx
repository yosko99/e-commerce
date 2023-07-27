import React from 'react';

import { Col, Row } from 'react-bootstrap';

import IFilter from '../../interfaces/IFilter';
interface Props {
  filters: IFilter;
}

const SizeFilter = ({ filters }: Props) => {
  return (
    <>
      {filters.distinctSizes.size !== 0 && (
        <div className="mb-2">
          <p className="fs-5">Sizes</p>
          <Row>
            {Array.from(filters.distinctSizes).map((size, index) => (
              <Col
                lg={2}
                xs={2}
                md={2}
                style={{ width: '50px', height: '50px' }}
                key={index}
                role="button"
                className="border m-1 d-flex justify-content-center align-items-center"
                id={size[1]}
              >
                <p className="m-0 p-2">{size[0].slice(0, 3)}</p>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default SizeFilter;
