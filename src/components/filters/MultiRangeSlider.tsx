import React, { useEffect, useState } from 'react';

import { useAtom } from 'jotai';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import selectedFiltersAtom from '../../atoms/selectedFilters.atom';

interface Props {
  max: number;
}

const MultiRangeSlider = ({ max }: Props) => {
  const [selectedFilters, setSelectedFilters] = useAtom(selectedFiltersAtom);
  const [values, setValues] = useState<number[]>([0, max]);

  const handleChange = (e: number | number[]) => {
    const rangeValues = e as number[];
    const tempFilters = selectedFilters;
    tempFilters.minValue = rangeValues[0];
    tempFilters.maxValue = rangeValues[1];

    setSelectedFilters({ ...tempFilters });
    setValues(rangeValues);
  };

  useEffect(() => {
    setValues([0, max]);
  }, [max]);

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
