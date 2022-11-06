(() => {
  // Reverse Integer
  // @param {number}
  // @return {number}

  const reverseInteger = (x) => {
    let solution = x.toString().split("").reverse().join("");

    if (solution.includes("-")) {
      solution = parseInt(`-${solution.replace("-", "")}`);
    }

    console.log(2 ** 31 - 1 > 9646324351);

    return solution > (-2) ** 31 || solution < 2 ** 31 - 1 ? 0 : solution;
  };

  reverseInteger(-2147483648);
})();
