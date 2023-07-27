import React from 'react';

import { Col, Image, Row } from 'react-bootstrap';

import IFilter from '../../interfaces/IFilter';

interface Props {
  filters: IFilter;
}

const ColorFilter = ({ filters }: Props) => {
  return (
    <div>
      {filters.distinctSwatches.size !== 0 && (
        <div className="mb-4">
          <p className="fs-5 mt-4">Colors</p>
          <Row>
            {Array.from(filters.distinctSwatches).map((swatch, index) => (
              <Col
                key={index}
                lg={1}
                xs={1}
                md={1}
                className="d-flex justify-content-center align-items-center m-1"
              >
                <Image
                  role="button"
                  className="border"
                  width={25}
                  height={25}
                  src={require(`../../assets/${swatch[1]}`)}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default ColorFilter;
