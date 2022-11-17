(() => {
  // const words = ["a","b","ba","bca","bda","bdca"];

  //   @params {string[]} words
  // @return {number}

  function longestStrChain(words) {
    if (!words.length) return 0;
    if (words.length === 1) return 1;

    words.sort((a, b) => a.length - b.length);

    const cache = {};
    let max = 0;

    for (let word of words) {
      let longest = 0;

      for (let i = 0; i < word.length; i++) {
        const subWord = word.slice(0, i) + word.slice(i + 1);
        longest = Math.max(longest, (cache[subWord] || 0) + 1);
      }

      cache[word] = longest;
      max = Math.max(max, longest);
    }

    return max;
  }

  const input = ["a", "b", "ba", "bca", "bda", "bdca"];

  console.log("longestStrChain => ", longestStrChain(input));
})();
