import React from 'react';

import {
  AiFillBehanceSquare,
  AiFillFacebook,
  AiFillGooglePlusSquare,
  AiFillTwitterSquare
} from 'react-icons/ai';

interface Props {
  size: number;
  className?: string;
}

const ShareButtons = ({ size, className }: Props) => {
  return (
    <div className={`d-flex ${className}`}>
      <AiFillFacebook size={size} className="me-1" role="button" />
      <AiFillTwitterSquare size={size} className="me-1" role="button" />
      <AiFillGooglePlusSquare size={size} className="me-1" role="button" />
      <AiFillBehanceSquare size={size} className="me-1" role="button" />
    </div>
  );
};

export default ShareButtons;
