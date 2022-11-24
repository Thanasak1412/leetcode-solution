(() => {
  // Fibonacci sequence

  function fib(n) {
    if (!n) return 0;
    if (n === 1) return 1;

    let a = 0,
      b = 1,
      c,
      i;
    for (i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }

    return b;
  }

  console.log("fib => ", fib(3));
})();
