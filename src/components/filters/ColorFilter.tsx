import React from 'react';

import { useAtom } from 'jotai';
import { Col, Image, Row } from 'react-bootstrap';

import selectedFiltersAtom from '../../atoms/selectedFilters.atom';
import updateSelectedFilter from '../../functions/updateSelectedFilter';
import IFilter from '../../interfaces/IFilter';

interface Props {
  filters: IFilter;
}

const ColorFilter = ({ filters }: Props) => {
  const [selectedFilters, setSelectedFilters] = useAtom(selectedFiltersAtom);

  const handleClick = (value: string) => {
    updateSelectedFilter(selectedFilters, value, selectedFilters.colors);

    setSelectedFilters({ ...selectedFilters });
  };

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
                  onClick={() => handleClick(swatch[0])}
                  role="button"
                  className={`border ${
                    selectedFilters.colors.includes(swatch[0]) &&
                    'border-info border-3'
                  }`}
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
