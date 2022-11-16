(() => {
  // Find minimum in rotated sorted array

  // @param {number[]} nums
  // @return {number}

  function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let midPoint = Math.floor((left + right) /2);

        if (nums[midPoint] > nums[right]) left = midPoint + 1;
        else right = midPoint;
    }

    return nums[left];
  }

  const input = [3, 4, 5, 1, 2];
  const input2 = [15, 18, 2, 3, 6, 12];

  console.log("findMin => ", findMin(input));
  console.log("findMin => ", findMin(input2));
})();
