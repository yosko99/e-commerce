import React from 'react';

import { BiSearchAlt } from 'react-icons/bi';

import CenteredItems from '../../../styles/CenteredItems';

interface Props {
  handleSearchClick: () => void;
}

const SearchProductButton = ({ handleSearchClick }: Props) => {
  return (
    <CenteredItems flexColumn role="button" className="me-2 m-0 p-0">
      <BiSearchAlt
        onClick={handleSearchClick}
        className="d-md-none"
        size={30}
        color="white"
      />
    </CenteredItems>
  );
};

export default SearchProductButton;
