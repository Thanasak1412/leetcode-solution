(() => {
  const longestPalindrome = (s) => {
    if (s.length < 1) return;

    const newString = getModifiedString(s);
    const P = new Array(newString.length).fill(0);

    let center = 0;
    let rightBoundary = 0;

    for (let i = 0; i < newString.length; i++) {
      let indexMirror = center - (i - center);

      if (i < rightBoundary) P[i] = Math.min(rightBoundary - i, P[indexMirror]);

      let right = i + (P[i] + 1);
      let left = i - (P[i] + 1);

      // Loop for check longest palindrome
      while (
        right < newString.length &&
        left >= 0 &&
        newString[left] === newString[right]
      ) {
        P[i]++; // length of palindrome
        left--;
        right++;
      }

      if (i + P[i] > rightBoundary) {
        center = i;
        rightBoundary = i + P[i];
      }
    }

    let maxPalindrome = Math.max(...P);
    let idxMaxPalindrome = P.indexOf(maxPalindrome);

    return newString
      .substring(
        idxMaxPalindrome - maxPalindrome + 1,
        idxMaxPalindrome + maxPalindrome
      )
      .split("#")
      .join("").length;
  };

  //   generate new string for check palindrome
  const getModifiedString = (word) => {
    let hashString = "#";

    for (let char of word) {
      hashString += `${char}#`;
    }

    return hashString;
  };

  console.log("longest palindrome => ", longestPalindrome("abccccdd"));
})();
