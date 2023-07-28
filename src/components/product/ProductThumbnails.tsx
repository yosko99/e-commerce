import React from 'react';

import { Image } from 'react-bootstrap';

import IImageGroup from '../../interfaces/IImageGroup';

interface Props {
  imageGroup: IImageGroup;
  setImgLink: React.Dispatch<React.SetStateAction<string>>;
}

const ProductThumbnails = ({ imageGroup, setImgLink }: Props) => {
  const handleClick = (link: string) => {
    setImgLink(link);
  };

  return (
    <div className="d-flex mt-2">
      {imageGroup.images.map((image, index) => (
        <Image
          role="button"
          key={index}
          className="border"
          onClick={() => handleClick(image.link)}
          style={{ width: '30px', height: '30px', objectFit: 'contain' }}
          src={require(`../../assets/${image.link}`)}
        />
      ))}
    </div>
  );
};

export default ProductThumbnails;
