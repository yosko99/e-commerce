const getQueryParam = (key: string, searchParam: URLSearchParams) => {
  try {
    if (searchParam.get(key) !== null) {
      // @ts-ignore
      return JSON.parse(searchParam.get(key));
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};

export default getQueryParam;
