import _ from 'lodash';

// BEGIN
const bubbleSort = (arr, comparator) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (comparator(arr[j], arr[j + 1]) > 0) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  };
  
  const takeOldest = (users, count = 1) => {
    const sortedUsers = [...users];
    bubbleSort(sortedUsers, (user1, user2) => {
      const date1 = Date.parse(user1.birthday);
      const date2 = Date.parse(user2.birthday);
      return date1 - date2;
    });
    return sortedUsers.slice(0, count);
  };
  export default takeOldest;
// END