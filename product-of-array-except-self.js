(() => {
  // Product of array except self

  // Given an array of n integers where n > 1, nums, return an array output such that
  //   output[i] is equal to the product of all the elements of nums except nums[i]

  //   Solve it without division and in O(n).

  // For example, given [1, 2, 3, 4], return [24,12, 8, 6].

  function productExceptSelf(nums) {
    if (!nums.length) return 0;

    let res = new Array(nums.length);

    res[0] = 1;

    for (let i = 1; i < nums.length; i++) {
      res[i] = res[i - 1] * nums[i - 1];
    }

    console.log("res => ", res);

    let r = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      res[i] *= r;
      r *= nums[i];
      console.log("r => ", r);
    }

    return res;
  }

  const input = [1, 2, 3, 4];

  console.log("productExceptSelf => ", productExceptSelf(input));
})();
