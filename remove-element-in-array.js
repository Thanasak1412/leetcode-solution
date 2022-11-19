(() => {
  // Remove Element

  // Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
  // The relative order of the elements may be changed.

  // Since is impossible to change the length of the array in some languages,
  // you must instead have the result be placed in the first part of the array nums
  // More formally, if there are k elements after removing the duplicates, the the first k elements.

  // Return k after placing the final result in the first k slots of nums.

  function removeElement(nums, val) {
    if (!nums.length) return 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
        nums.splice(i, 1);
      }
    }

    return nums.length;
  }

  const nums = [3, 2, 2, 3];
  const val = 3;

  console.log("removeElement => ", removeElement(nums, val));
})();
