(() => {
    // Palindrome number

    // Given an integer x, return true if x is a palindrome, and false otherwise.

    // @param {number} x
    // @return {boolean}

    function isPalindrome (x) {
        if (x < 0) return false;

        let reverse = 0;
        for (let i = x; i >= 1; i = Math.floor(i/10)) reverse = reverse * 10 + i % 10;
        return reverse === x;
    }
    
    const input = 121;
    const input2 = -121;
    
    console.log("isPalindrome => ", isPalindrome(input));
    console.log("isPalindrome2 => ", isPalindrome(input2));
})();