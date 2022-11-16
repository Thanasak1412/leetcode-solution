(() => {
    // Valid parentheses

    // @param {string} s
    //  @return {boolean}
    
    function isValid (s) {
        const objValid = {
            "(": ")",
            "[": "]",
            "{": "}",
        };
        
        const heap = [];
        
        for (let char of s) {
            if (objValid[char]) {
                heap.push(objValid[char]);
            } else {
                if (heap.pop() !== char) return false;
            }
        }

        return !heap.length;
    }

    const input = "()";
    const input2 = "()[]{}";
    const input3 = "()[]{}()][";
    
    console.log("isValid => ", isValid(input));
    console.log("isValid => ", isValid(input2));
    console.log("isValid =>", isValid(input3));
    
})();