// Two sum
// Given an array of integers nums and an integer target
// return indices of the two numbers such that they a dd uup to target.

// @param {number[]} nums
// @param {number} target
// @return {number[]}

(() => {
  const twoSum = (nums, target) => {
    let store = {};

    for (let [index, num] of nums.entries()) {
      if (store[num] !== undefined) return [store[num], index];

      store[target - num] = index;
    }
  };

  const nums = [2, 7, 11, 12];
  const target = 9;
  twoSum(nums, target);
})();
