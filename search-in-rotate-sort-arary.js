(() => {
  // Search in rotated sorted array

  // There is an integer array nums sorted in ascending order (with distinct values)

  // You must write an algorithm with O(log n) runtime complexity

  // @param {number[]} nums
  // @param {number} target
  // @return {number}

  function search(nums, target) {
    if (!nums.length) return -1;

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const midPoint = Math.floor((left + right) / 2);

      if (nums[midPoint] === target) return midPoint;

      if (nums[left] <= nums[midPoint]) {
        if (nums[left] <= target && target <= nums[midPoint])
          right = midPoint - 1;
        else left = midPoint + 1;
      } else {
        if (nums[midPoint] <= target && target <= nums[right])
          left = midPoint + 1;
        else right = midPoint - 1;
      }
    }

    return -1;
  }

  const nums = [3, 4, 5, 6, 0, 1, 2];
  const target = 0;

  const nums2 = [5, 1, 3];
  const target2 = 3;

  console.log("search => ", search(nums, target));
  console.log("search => ", search(nums2, target2));
})();
