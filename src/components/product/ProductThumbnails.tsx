import React from 'react';

import { Image } from 'react-bootstrap';

import IImageGroup from '../../interfaces/IImageGroup';
import CenteredItems from '../../styles/CenteredItems';

interface Props {
  imageGroup: IImageGroup;
  thumbnailSize: string;
  setImgLink: React.Dispatch<React.SetStateAction<string>>;
}

const ProductThumbnails = ({
  imageGroup,
  setImgLink,
  thumbnailSize
}: Props) => {
  const handleClick = (link: string) => {
    setImgLink(link);
  };

  return (
    <CenteredItems className="mt-2">
      {imageGroup.images.map((image, index) => (
        <Image
          role="button"
          key={index}
          className="border"
          onClick={() => handleClick(image.link)}
          style={{
            width: thumbnailSize,
            height: thumbnailSize,
            objectFit: 'contain'
          }}
          src={require(`../../assets/${image.link}`)}
        />
      ))}
    </CenteredItems>
  );
};

export default ProductThumbnails;
