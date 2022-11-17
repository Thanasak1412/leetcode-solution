(() => {
  // House robber

  // @param {number[]} nums
  // @return {number}

  const rob = (nums) => {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    const res = new Array(nums.length);
    res[0] = nums[0];
    res[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
      res[i] = Math.max(res[i - 2] + nums[i], res[i - 1]);
    }

    return res[nums.length - 1];
  };

  const input3 = [2, 1, 1, 2];
  const input = [1, 4, 1, 1, 10];

  console.log("rob => ", rob(input3));
  console.log("rob => ", rob(input));
})();
