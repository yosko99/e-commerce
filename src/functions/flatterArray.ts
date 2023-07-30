//   @ts-ignore
const flattenArray = (arr: any) => {
  return arr.reduce((acc: any, val: any) => {
    return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val);
  }, []);
};

export default flattenArray;
