// BEGIN
const getGirlFriends = (users) => {
    const girlFriends = [];
    users.forEach(user => {
      user.friends.forEach(friend => {
        if (friend.gender === 'female') {
          girlFriends.push(friend);
        }
      });
    });
    return girlFriends;
  };
  
  export default getGirlFriends;
  
// END