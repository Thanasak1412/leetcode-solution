(() => {
  const decodeString = (s) => {
    let solution = "";
    const multiply = [];
    let tempMultiply = "";
    const repeatStr = [];

    for (let char of s) {
      if (!isNaN(char)) {
        tempMultiply = `${tempMultiply}${char}`;
      } else if (char === "[") {
        multiply.push(tempMultiply);
        tempMultiply = "";

        repeatStr.push(solution);
        solution = "";
      } else if (char === "]") {
        solution = repeatStr.pop() + solution.repeat(multiply.pop());
      } else {
        solution += char;
      }
    }

    return solution;
  };

  console.log("solution => ", decodeString("3[a]2[bc]"));
})();
