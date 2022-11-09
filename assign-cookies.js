(() => {
  // Assign cookies
  const findContentChildren = (g, s) => {
    let solution = 0;
    let greedIdx = 0;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    for (let cookieSize of s) {
      if (cookieSize >= g[greedIdx]) {
        solution++;
        greedIdx++;
      }
    }

    return solution;
  };

  console.log(
    "findContentChildren => ",
    findContentChildren([1, 2, 3], [1, 1])
  );
})();
