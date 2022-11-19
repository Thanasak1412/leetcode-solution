(() => {
  // Prefix hierarchy

  // @param {names, query}
  // @return {number[]}

  function findPrefixNames(names, query) {
    if (!names.length) return [];
    if (!query.length) return [];

    const cache = {};

    for (let i = 0; i < query.length; i++) {
      let countPrefix = 0;
      for (let j = 0; j < names.length; j++) {
        const n = names[j];
        const q = query[i];

        if (n.length > q.length && n.startsWith(q)) {
          cache[q] = ++countPrefix;
        }
      }
    }

    return Object.values(cache);
  }

  const names = ["john", "joe", "jo", "jame", "james", "jam"];
  const query = ["jo", "jame"];

  console.log("findPrefixNames => ", findPrefixNames(names, query));
})();
