import ISelectedFilters from '../interfaces/ISelectedFilters';

const updateSelectedFilter = (
  filters: ISelectedFilters,
  value: string,
  attributeArr: string[]
) => {
  const indexOfSize = attributeArr.indexOf(value);
  if (indexOfSize === -1) {
    attributeArr.push(value);
  } else {
    attributeArr.splice(indexOfSize, 1);
  }
};

export default updateSelectedFilter;
