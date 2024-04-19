const smallestDivisor = (num) => {
    // BEGIN
    if (num === 1) {
      return 1;
    }
  
    if (num % 2 === 0) {
      return 2;
    }
  
    let divisor = 3;
    const maxDivisor = Math.sqrt(num);
    while (divisor <= maxDivisor) {
      if (num % divisor === 0) {
        return divisor;
      }
      divisor += 2;
    }
  
    return num;
    // END
  };
  
export default smallestDivisor;
  