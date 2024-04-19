const sequenceSum = (begin, end) => {
    // BEGIN
      const sumRecursively = (start, acc) => {
        if (start > end) {
          return acc;
        }
        return sumRecursively(start + 1, acc + start);
      };
      
      return begin > end ? NaN : sumRecursively(begin, 0);
    // END
  };
  
export default sequenceSum;
  