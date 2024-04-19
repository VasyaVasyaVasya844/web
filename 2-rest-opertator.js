import _ from 'lodash';
// BEGIN
const average = function() {
  const args = Array.from(arguments);
  if (args.length === 0) {
    return null;
  }
  return _.sum(args) / args.length;
};
export default average;
// END