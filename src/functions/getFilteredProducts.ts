import IProduct from '../interfaces/IProduct';
import ISelectedFilters from '../interfaces/ISelectedFilters';
import IVariationAttribute from '../interfaces/IVariationAttribute';

const hasAttribute = (
  product: IProduct,
  desiredValue: string,
  desiredAttribute: string
) => {
  if (product.variation_attributes !== undefined) {
    const attribute = product.variation_attributes.find(
      (attr) => attr.name === desiredAttribute
    ) as IVariationAttribute;

    if (attribute) {
      return attribute.values.some((value) => value.value === desiredValue);
    }
  }
  return false;
};

const getFilteredProducts = (
  products: IProduct[],
  filters: ISelectedFilters
) => {
  const output: IProduct[] = [];

  products.forEach((product) => {
    const sizeSome =
      filters.sizes.length === 0
        ? true
        : filters.sizes.some((value) => hasAttribute(product, value, 'Size'));

    const colorSome =
      filters.colors.length === 0
        ? true
        : filters.colors.some((value) => hasAttribute(product, value, 'Color'));

    if (
      sizeSome &&
      colorSome &&
      product.price <= filters.maxValue &&
      product.price >= filters.minValue
    ) {
      output.push(product);
    }
  });

  return output;
};

export default getFilteredProducts;
