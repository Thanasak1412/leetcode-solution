(() =>{ 
    // Maximum subarray

    // @param {number[]} nums
    // @return {number}

    function maxSubArray(nums) {
        let solution = nums[0];

        for(let i = 1; i < nums.length; i++) {
            nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
            solution = Math.max(nums[i], solution);
        }

        return solution;
    }
    

    const input = [-2, 1, -3, 4, -1, 2, 1, -5 ,4];
    console.log("maxSubArray => ", maxSubArray(input));
})();