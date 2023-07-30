import React from 'react';

import { GrLanguage } from 'react-icons/gr';

import CenteredItems from '../../styles/CenteredItems';

const NavigationTopBar = () => {
  return (
    <div
      className="container d-lg-flex d-none justify-content-end"
      style={{ fontSize: '0.8em' }}
    >
      <CenteredItems role="button" className="border-start border-end h-100">
        <p className="m-0 p-1 mx-2 text-muted">Marketplace</p>
      </CenteredItems>
      <CenteredItems role="button" className="border-end h-100">
        <p className="m-0 p-1 mx-2 text-muted">Help & FAQs</p>
      </CenteredItems>
      <CenteredItems role="button" className="border-end h-100">
        <GrLanguage className="m-0 p-1 mx-2" size={25} color="lightgray" />
      </CenteredItems>
    </div>
  );
};

export default NavigationTopBar;
