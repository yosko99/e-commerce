import IFilter from '../interfaces/IFilter';
import IProduct from '../interfaces/IProduct';

const initFilters = (product: IProduct, filter: IFilter) => {
  // Get distinct swatches
  const swatches = product.image_groups.filter(
    (group) => group.view_type === 'swatch'
  );
  swatches.forEach((item) => {
    if (
      !filter.distinctSwatches.has(item.variation_value!) &&
      item.variation_value !== undefined
    ) {
      filter.distinctSwatches.set(item.variation_value, item.images[0].link);
    }
  });

  // // Get distinct sizes
  if (
    product.variation_attributes &&
    product.variation_attributes[1] !== undefined
  ) {
    const { values } = product.variation_attributes[1];
    values.forEach((sizes) => {
      const { name, value } = sizes;
      if (!filter.distinctSizes.has(name)) {
        filter.distinctSizes.set(name, value);
      }
    });
  }

  if (product.price > filter.maxValue) {
    filter.maxValue = product.price;
  }
};

export default initFilters;
