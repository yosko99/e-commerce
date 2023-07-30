import React from 'react';

import { Button } from 'react-bootstrap';

import { useClearFilters } from '../../hooks/useClearFilters';
import CenteredItems from '../../styles/CenteredItems';

interface Props {
  setDoClearFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClearFiltersButton = ({ setDoClearFilter }: Props) => {
  const { handleClick } = useClearFilters(setDoClearFilter);

  return (
    <CenteredItems>
      <Button variant="" onClick={handleClick} className="w-100 mt-3">
        Clear filters
      </Button>
    </CenteredItems>
  );
};

export default ClearFiltersButton;
