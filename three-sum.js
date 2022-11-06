(() => {
  // @param {number[] } nums
  //   @return {number[][]}

  const threeSum = (nums) => {
    const solution = [];
    let [left, right] = [0, nums.length - 1];

    if (nums.length < 3) return solution;

    nums.sort((a, b) => a - b);

    for (let [idx, num] of nums.entries()) {
      if (num > 0) return solution;
      if (num === nums[idx - 1]) continue;

      left = idx + 1;
      right = nums.length - 1;

      let temp = 0;

      while (left < right) {
        temp = num + nums[left] + nums[right];

        if (temp === 0) {
          solution.push([num, nums[left], nums[right]]);
          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }

          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        } else if (temp > 0) {
          right--;
        } else if (temp < 0) {
          left++;
        }
      }
    }

    return solution;
  };

  console.log("threeSum => ", threeSum([-4, -1, -1, 0, 1, 2]));
})();
