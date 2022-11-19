(() => {
  // House robber III

  //   The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

  // Given the root of thea binary tree, return the maximum amount of money the thief can rob without alerting the police.

  class TreeNode {
    constructor(val, left, right) {
      this.val = val === undefined ? 0 : val;
      this.left = val === undefined ? 0 : left;
      this.right = right === undefined ? null : right;
    }
  }

  // @param {TreeNode} root
  // @return {number}

  function rob(root) {
    function decision(node) {
      if (!node) return [0, 0];

      let [leftRob, leftNot] = decision(node.left);
      let [rightRob, rightNot] = decision(node.right);

      let robD = node.val + leftNot + rightNot;
      let notRob = Math.max(
        leftNot + rightNot,
        rightRob + leftRob,
        leftNot + rightRob,
        rightNot + leftRob
      );

      return [robD, notRob];
    }

    return Math.max(...decision(root));
  }

  const input = new TreeNode(3, [2, null, 3], [3, null, 1]);
})();
