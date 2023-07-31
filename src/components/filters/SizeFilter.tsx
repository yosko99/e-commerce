import React from 'react';

import { useAtom } from 'jotai';
import { Row } from 'react-bootstrap';

import selectedFiltersAtom from '../../atoms/selectedFilters.atom';
import updateSelectedFilter from '../../functions/updateSelectedFilter';
import IFilter from '../../interfaces/IFilter';
import ProductSize from '../product/sizes/ProductSize';

interface Props {
  filters: IFilter;
}

const SizeFilter = ({ filters }: Props) => {
  const [selectedFilters, setSelectedFilters] = useAtom(selectedFiltersAtom);

  const handleClick = (value: string) => {
    updateSelectedFilter(value, selectedFilters.sizes);

    setSelectedFilters({ ...selectedFilters });
  };

  return (
    <>
      {filters.distinctSizes.size !== 0 && (
        <div className="mb-2">
          <p className="fs-5">Sizes</p>
          <Row>
            {Array.from(filters.distinctSizes).map((size, index) => (
              <ProductSize
                onClick={() => handleClick(size[1])}
                name={size[0]}
                value={size[1]}
                key={index}
                className={
                  selectedFilters.sizes.includes(size[1])
                    ? 'bg-dark text-white'
                    : 'bg-white'
                }
              />
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default SizeFilter;
