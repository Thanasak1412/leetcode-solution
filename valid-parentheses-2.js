(() => {
    // Valid Parentheses

    function validParentheses(s) {
        if (!s.length) return false;
        if (s.length < 2) return false;
        if (s[s.length - 1] === "[") return false;

        const heap = [];
        const objValid = {
            "[": "]",
            "(": ")",
            "{": "}"
        }

        for (const char of s) {
            if (objValid[char]) {
                heap.push(objValid[char]);
            } else {
                if (heap.pop() !== char) return false;
            }
        }

        return !heap.length;
    }
    
    const s = "[]()[]{}][{}";

    console.log("validParentheses => ", validParentheses(s));
    
})();