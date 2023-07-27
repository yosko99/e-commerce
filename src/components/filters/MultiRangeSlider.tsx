import React, { useEffect, useState } from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface Props {
  max: number;
}

const MultiRangeSlider = ({ max }: Props) => {
  const [values, setValues] = useState<number[]>([0, max]);

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
        onChange={(e) => {
          const rangeValues = e as number[];
          setValues(rangeValues);
        }}
      />
      <div className="d-flex justify-content-between">
        <p className="text-muted mb-2">{values[0]}</p>
        <p className="text-muted mb-2">{values[1]}</p>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
