const run = (text) => {
    // BEGIN
    const takeLast = (text, n) => {
      if (text.length < n || text === '') {
        return null;
      }
      let result = '';
      for (let i = text.length - 1; i >= text.length - n; i--) {
        result += text[i];
      }
      return result;
    };
    // END
  
    return takeLast(text, 4);
  };
  
export default run;