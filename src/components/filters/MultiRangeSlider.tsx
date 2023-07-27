import React, { useEffect, useState } from 'react';

import { useAtom } from 'jotai';
// eslint-disable-next-line import/order
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import { useSearchParams } from 'react-router-dom';

import selectedFiltersAtom from '../../atoms/selectedFilters.atom';
import getQueryFilters from '../../functions/getQueryFilters';

interface Props {
  max: number;
  setDoClearFilter: React.Dispatch<React.SetStateAction<boolean>>;
  doClearFilter: boolean;
}

const MultiRangeSlider = ({ max, doClearFilter, setDoClearFilter }: Props) => {
  const [selectedFilters, setSelectedFilters] = useAtom(selectedFiltersAtom);
  const [values, setValues] = useState<number[]>([0, max]);
  const [searchParams] = useSearchParams();
  const queryFilters = getQueryFilters(searchParams, max);

  const handleChange = (e: number | number[]) => {
    const rangeValues = e as number[];
    const tempFilters = selectedFilters;
    tempFilters.minValue = rangeValues[0];
    tempFilters.maxValue = rangeValues[1];

    setSelectedFilters({ ...tempFilters });
    setValues(rangeValues);
  };

  useEffect(() => {
    setDoClearFilter(false);
    setValues([queryFilters.minValue, queryFilters.maxValue]);
  }, [max, doClearFilter]);

  return (
    <div>
      <Slider
        range
        value={values}
        min={0}
        max={max}
        defaultValue={[0, 5]}
        allowCross={false}
        onChange={handleChange}
      />
      <div className="d-flex justify-content-between">
        <p className="text-muted mb-2">{values[0]}</p>
        <p className="text-muted mb-2">{values[1]}</p>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
