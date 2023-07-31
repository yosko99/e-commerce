import React, { useEffect, useState } from 'react';

import { Image } from 'react-bootstrap';

import ProductThumbnails from './ProductThumbnails';
import IImageGroup from '../../interfaces/IImageGroup';
import CenteredItems from '../../styles/CenteredItems';

interface Props {
  imageGroup: IImageGroup;
  imageSize: string;
  thumbnailSize: string;
  className?: string;
}

const ProductImageWithThumbnails = ({
  imageGroup,
  imageSize,
  thumbnailSize,
  className
}: Props) => {
  const [imgLink, setImgLink] = useState(imageGroup.images[0].link);

  useEffect(() => {
    setImgLink(imageGroup.images[0].link);
  }, [imageGroup]);

  return (
    <CenteredItems flexColumn className={`h-100 ${className}`}>
      <Image
        alt={imageGroup.images[0].alt}
        style={{ width: '100%', height: imageSize, objectFit: 'contain' }}
        src={require(`../../assets/${imgLink}`)}
      />
      <ProductThumbnails
        thumbnailSize={thumbnailSize}
        imageGroup={imageGroup}
        setImgLink={setImgLink}
      />
    </CenteredItems>
  );
};

export default ProductImageWithThumbnails;
