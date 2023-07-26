import React from 'react';

interface Props {
  name: string;
  description: string;
}

const CategoryInfo = ({ description, name }: Props) => {
  return (
    <div>
      <p className="fs-2 m-0">{name}</p>
      <p className="m-0">{description}</p>
    </div>
  );
};

export default CategoryInfo;
