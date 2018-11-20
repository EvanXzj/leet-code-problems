/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (t1 == null) return t2
  if (t2 == null) return t1

  t1.val += t2.val
  t1.left = mergeTrees(t1.left, t2.left)
  t1.right = mergeTrees(t1.right, t2.right)

  return t1
}

// Complexity Analysis
// Time complexity: O(m). A total of m nodes need to be traversed. Here, m represents the minimum number of nodes from the two given trees.
// Space complexity: O(m). The depth of the recursion tree can go upto m in the case of a skewed tree. In average case, depth will be O(logm).
