import React from 'react';

import { useAtom } from 'jotai';
import { Col, Row } from 'react-bootstrap';

import selectedFiltersAtom from '../../atoms/selectedFilters.atom';
import updateSelectedFilter from '../../functions/updateSelectedFilter';
import IFilter from '../../interfaces/IFilter';

interface Props {
  filters: IFilter;
}

const SizeFilter = ({ filters }: Props) => {
  const [selectedFilters, setSelectedFilters] = useAtom(selectedFiltersAtom);

  const handleClick = (value: string) => {
    updateSelectedFilter(selectedFilters, value, selectedFilters.sizes);

    setSelectedFilters({ ...selectedFilters });
  };

  return (
    <>
      {filters.distinctSizes.size !== 0 && (
        <div className="mb-2">
          <p className="fs-5">Sizes</p>
          <Row>
            {Array.from(filters.distinctSizes).map((size, index) => (
              <Col
                onClick={() => handleClick(size[1])}
                lg={2}
                xs={2}
                md={2}
                style={{ width: '50px', height: '50px' }}
                key={index}
                role="button"
                className={`border m-1 d-flex justify-content-center align-items-center ${
                  selectedFilters.sizes.includes(size[1])
                    ? 'bg-dark text-white'
                    : 'bg-white'
                }`}
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
