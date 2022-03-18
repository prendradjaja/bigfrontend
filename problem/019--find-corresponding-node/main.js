function main() {
  const $ = s => document.querySelector(s);
  console.log(
    findCorrespondingNode(
      $('#a'),
      $('#b'),
      $('#a p')
    ).innerText
  );
}

function findCorrespondingNode(rootA, rootB, target) {
  let node = rootB;
  for (let index of findPath(rootA, target)) {
    node = node.children[index];
  }
  return node;
}

function findPath(root, target) {
  if (root === target) {
    return [];
  }

  for (let [i, child] of Array.from(root.children).entries()) {
    const path = findPath(child, target);
    if (path) {
      return [i, ...path];
    }
  }
}

main();
