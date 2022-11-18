(() => {
  // Group anagrams

  // Given an array of strings strs, group the anagrams together . You can return the answer in any order
  // An Anagram is a word or phrase formed be rearranging the letter of a difference word or phrase,
  // typically using all the original letters exactly once.

  // @param {string[]} strs
  // @return {string[][]}

  function groupAnagrams(strs) {
    if (!strs.length) return strs;

    const cache = {};
    const primeNumber = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 63, 67,
      71, 73, 79, 83, 89, 97, 101,
    ];

    for (let str of strs) {
      const key = str
        .split("")
        .reduce((total, char) => total * primeNumber[char.charCodeAt() - 97], 1);
      !cache[key] ? (cache[key] = [str]) : cache[key].push(str);
    }

    return Object.values(cache);
  }

  const strs = ["eat","tea","tan","ate","nat","bat"];

  console.log("groupAnagrams => ", groupAnagrams(strs));
})();
