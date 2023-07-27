import getQueryParam from './getQueryParam';

const getQueryFilters = (searchParams: URLSearchParams, maxValue: number) => {
  const queryFilters = {
    colors: getQueryParam('colors', searchParams),
    sizes: getQueryParam('sizes', searchParams),
    maxValue:
      searchParams.get('maxValue') !== null
        ? Number(searchParams.get('maxValue'))
        : maxValue,
    minValue:
      searchParams.get('minValue') !== null
        ? Number(searchParams.get('minValue'))
        : 0
  };
  return queryFilters;
};

export default getQueryFilters;
