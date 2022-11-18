(() => {
  // Word Break

  // Given a string s and a dictionary of strings wordDct, return true if s can be segmented into a space-separated
  // sequence of one or more dictionary words.

  // Note: that the same word in the dictionary may be reused multiple ties in the segmentation.

  // @param {string} s
  // @param {string[]]} wordDict
  // @return {boolean}

  function wordBreak(word, wordDict) {
    return verifyBreak(word, wordDict, 0, []);
  }

  function verifyBreak(word, dict, start, memo) {
    if (start === word.length) return true;
    if (memo[start] !== undefined) return memo[start];

    for (let end = start + 1; end <= word.length; end++) {
      let wildGuess = word.substring(start, end)

      if (dict.includes(wildGuess) && verifyBreak(word, dict, end, memo)) {
        return (memo[start] = true);
      }
    }

    return (memo[start] = false);
  }

  const s = "leetcode";
  const wordDict = ["leet", "code"];

  const s2 = "catsandog";
  const wordDict2 = ["cats", "dog", "sand", "and", "cat"];

  console.log("wordBreak => ", wordBreak(s, wordDict));
  console.log("wordBreak2 => ", wordBreak(s2, wordDict2));
})();
