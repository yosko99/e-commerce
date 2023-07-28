import React from 'react';

import { useAtom } from 'jotai';
import { Row } from 'react-bootstrap';

import selectedFiltersAtom from '../../atoms/selectedFilters.atom';
import updateSelectedFilter from '../../functions/updateSelectedFilter';
import IFilter from '../../interfaces/IFilter';
import ProductColor from '../product/colors/ProductColor';

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
              <ProductColor
                key={index}
                colSize={1}
                size={25}
                link={swatch[1]}
                onClick={() => handleClick(swatch[0])}
                className={
                  selectedFilters.colors.includes(swatch[0])
                    ? 'border-info border-3'
                    : ''
                }
              />
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default ColorFilter;
