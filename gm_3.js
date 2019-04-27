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