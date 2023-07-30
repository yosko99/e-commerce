/* eslint-disable multiline-ternary */
import React from 'react';

import { Button } from 'react-bootstrap';

import CenteredItems from '../../styles/CenteredItems';

interface Props {
  pagination: number;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
  productsLength: number;
}

const LoadMoreButton = ({
  pagination,
  productsLength,
  setPagination
}: Props) => {
  const loadMore = () => {
    const tempPagination =
      pagination + 10 > productsLength ? productsLength : pagination + 10;
    setPagination((prev) => tempPagination);
  };

  return pagination < productsLength ? (
    <CenteredItems className="my-5">
      <Button onClick={loadMore} className="w-25 fs-5" variant="dark">
        Load more
      </Button>
    </CenteredItems>
  ) : (
    <></>
  );
};

export default LoadMoreButton;
