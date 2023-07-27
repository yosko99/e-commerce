import initFilters from './initFilters';
import products from '../data/products';
import IFilter from '../interfaces/IFilter';

const getCategoryProducts = (category: string, filters: IFilter) => {
  const categoryProducts = products.filter((product) => {
    if (product.primary_category_id === category) {
      initFilters(product, filters);
    }
    return product.primary_category_id === category;
  });

  return categoryProducts;
};

export default getCategoryProducts;
