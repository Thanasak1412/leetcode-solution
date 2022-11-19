(() => {
  // Maximum Subarray

  // Given an integer array nums, find the subarray which has the largest sum and return its  sums.

  // @param {number[]} nums
  // @return {number}

  function maxSubArray(nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];

    let accSum = nums[0];
    let maxValue = nums[0];

    for (let i = 1; i < nums.length; i++) {
      const calc = Math.max(nums[i], accSum + nums[i]);

      if (calc > maxValue) maxValue = calc;
      accSum = calc;
    }

    return maxValue;
  }

  const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const input2 = [5, 4, -1, 7, 8];

  console.log("maxSubArray", maxSubArray(input));
  console.log("maxSubArray2", maxSubArray(input2));
})();
