const getFirstMapEntries = (map: Map<any, any>) => {
  if (map.size !== 0) {
    // @ts-ignore
    const [firstKey] = map.keys();
    // @ts-ignore
    const [firstValue] = map.values();
    return [firstKey, firstValue];
  } else {
    return ['', ''];
  }
};

export default getFirstMapEntries;
