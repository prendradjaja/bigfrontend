function getHeight(tree) {
  if (!tree) {
    return 0; // It's silly that this is required to pass
  } else if (tree.children.length === 0) {
    return 1;
  }

  const childHeights = Array.from(tree.children).map(subtree => getHeight(subtree));
  return Math.max(...childHeights) + 1;
}
