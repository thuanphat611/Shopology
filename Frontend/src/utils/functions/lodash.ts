/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from "lodash";

const getObjectsDifference = (obj1: any, obj2: any) => {
  const allKeys = _.union(Object.keys(obj1), Object.keys(obj2));
  return _.pickBy(obj1, (value, key) => {
    return allKeys.includes(key) && !_.isEqual(value, obj2[key]);
  });
};

export { getObjectsDifference };
