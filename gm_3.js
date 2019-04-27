/**
  Question 3: Given a binary tree, invert the binary tree and return it. Look at the example for
  more details.
  Example : Given binary tree
  1
  / \
  2 3
  / \ / \
  4 5 6 7
  invert and return
  1
  / \
  3 2
  / \ / \
  7 6 5 4
 */
var invertTree = function(root) {
  if (root === null || (root.left === null && root.right === null))
    return root;
  var invert = function(node) {
    if (node === null)
      return;
    invert(node.left);
    invert(node.right);
    var temp = node.left;
    node.left = node.right;
    node.right = temp;
  };
  invert(root);
  return root;
};