(() => {
  // Binary tree InOrder traversal | Morris Traversal Algorithm

  // @param {TreeNode} root
  // @return {number[]}

  function inOrderTraversal(root) {
    const solution = [];
    let tourist = root;

    while (tourist !== null) {
      let guide = tourist.left;

      if (tourist.left !== null) {
        while (guide.right !== null && guide.right !== tourist) {
          guide = guide.right;
        }

        if (guide.right === null) {
          guide = tourist.right;
          tourist = tourist.left;
        } else {
          guide.right = null;
          solution.push(tourist.val);
          tourist = tourist.right;
        }
      } else {
        solution.push(tourist.val);
        tourist = tourist.right;
      }
    }

    return solution;
  }
})();
