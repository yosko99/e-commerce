import React from 'react';

interface Props {
  name: string;
  description: string;
  totalProducts: number;
  shownProducts: number;
}

const CategoryInfo = ({
  description,
  name,
  totalProducts,
  shownProducts
}: Props) => {
  return (
    <div>
      <p className="fs-2 m-0">
        {name}{' '}
        <span className="text-muted" style={{ fontSize: '0.6em' }}>
          {shownProducts} out of {totalProducts}
        </span>
      </p>
      <p className="m-0">{description}</p>
    </div>
  );
};

export default CategoryInfo;
