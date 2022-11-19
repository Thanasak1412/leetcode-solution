(() => {
    // Contains duplicate

    // Given an integer array nums, return true if any value appear at least twice in the array, and return false if every element is distinct.

    // @params {number[]} nums
    // @return {boolean}

    function containsDuplicate(nums) {
        if (!nums.length) return false;
        if (nums.length === 1) return false;

        const memory = {};

        for (let i = 0; i < nums.length; i++) {
            if (memory[nums[i]] === undefined) memory[nums[i]] = nums[i];
            else return true;
        }

        return false;
    }

    const input = [1,2,3,1];
    const input2 = [1,2, 3,4];
    
    console.log("containsDuplicate => ", containsDuplicate(input))
    console.log("containsDuplicate2 => ", containsDuplicate(input2))
})();