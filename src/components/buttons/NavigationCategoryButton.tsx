import React from 'react';

import CenteredItems from '../../styles/CenteredItems';

interface Props {
  gender: 'men' | 'women';
  hoveredCategory: string;
  onMouseEnter: () => void;
}

const NavigationCategoryButton = ({
  gender,
  hoveredCategory,
  onMouseEnter
}: Props) => {
  return (
    <CenteredItems
      role="button"
      onMouseEnter={() => onMouseEnter()}
      style={{
        backgroundColor: hoveredCategory === gender ? '#525050' : ''
      }}
      className="border text-white border-top-0 border-bottom-0 h-100 d-none d-lg-flex"
    >
      <p className="m-0 p-4 fw-bold text-uppercase">{gender}</p>
    </CenteredItems>
  );
};

export default NavigationCategoryButton;
