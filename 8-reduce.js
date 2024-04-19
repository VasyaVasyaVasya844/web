// BEGIN
const groupBy = (items, key) => {
    return items.reduce((acc, item) => {
      const groupValue = item[key];
      acc[groupValue] = (acc[groupValue] || []).concat(item);
      return acc;
    }, {});
  };
  
  export default groupBy;
  
// END