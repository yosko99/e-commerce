import React from 'react';

import { BiSolidUser } from 'react-icons/bi';

import CenteredItems from '../../../styles/CenteredItems';
import CustomToast from '../../utils/CustomToast';

const ProfileButton = () => {
  return (
    <CustomToast
      body="Sorry profile page is not implemented...yet"
      activateElement={
        <CenteredItems flexColumn role="button" className="me-2 m-0 p-0">
          <BiSolidUser size={30} color="white" />
        </CenteredItems>
      }
      type="warning"
    />
  );
};

export default ProfileButton;
