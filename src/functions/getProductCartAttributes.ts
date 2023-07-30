import getFirstMapEntries from './getFirstMapEntries';
import initFilters from './initFilters';
import IFilter from '../interfaces/IFilter';
import IImageGroup from '../interfaces/IImageGroup';
import IProduct from '../interfaces/IProduct';

interface Props {
  product: IProduct;
  size?: string;
  color?: string;
  qty?: number;
}

const getProductCartAttributes = ({ product, qty, color, size }: Props) => {
  const variants: IFilter = {
    distinctSizes: new Map(),
    distinctSwatches: new Map(),
    maxValue: 0
  };
  initFilters(product, variants);
  const [firstSize] = getFirstMapEntries(variants.distinctSizes);
  const [firstColor] = getFirstMapEntries(variants.distinctSwatches);

  const productColor = color === undefined ? firstColor : color;
  const productSize = size === undefined ? firstSize : size;
  const quantity = qty || 1;

  let productImgUrl = '';

  if (productColor === '') {
    productImgUrl = product.image_groups[0].images[0].link;
  } else {
    const variantImages = product.image_groups.find(
      (imageGroup) =>
        imageGroup.variation_value === productColor &&
        imageGroup.view_type === 'large'
    ) as IImageGroup;
    productImgUrl = variantImages.images[0].link;
  }

  return { productColor, productSize, quantity, productImgUrl };
};

export default getProductCartAttributes;
