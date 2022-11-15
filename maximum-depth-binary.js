(() => {
    // Maximum depth binary tree
  
    // @param {TreeNode} root
    // @return number
    
    const input = [3, 9, 20, null, null, 15, 7];
  
    const maxDepth = (root) => {
      if (Array.isArray(root) && !root.length) return 0;
  
      let maxDepth = 0;
  
      const BFS = (node, level) => {
        console.log("node => ", node);
        if (node === null) return maxDepth;
        if (level > maxDepth) maxDept = level;
  
        BFS(node.left, level++);
        BFS(node.right, level++);
      };
  
      BFS(root, 1);
      
      return maxDepth;
    };
  
    console.log("maxDept =>", maxDepth(input));
  })();
  