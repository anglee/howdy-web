/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const frequencyMap = nums.reduce((map, num, index) => {
    if (!map.has(num)) {
      map.set(num, {
        start: index,
        end: index,
        count: 1
      });
    } else {
      map.get(num).end = index;
      map.get(num).count++;
    }
    return map;
  }, new Map());

  const getLength = ({start, end}) => end - start + 1;
  const highestFrequency = [...frequencyMap.entries()]
    .reduce(
      (max, [key, value]) => (
        value.count > max.count || (
          value.count === max.count && getLength(value) < getLength(max)
        )
          ? value
          : max
      ),
      { count: 0 }
    );
  return getLength(highestFrequency);
};

export default findShortestSubArray;