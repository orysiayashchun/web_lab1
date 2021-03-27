let tree = [
        [1],
        [2],
        [3, 5],
        [4],
        [],
        [6],
        []]
  function bypassingTheTree(i) {
      let count = 1;
      if (tree[i].length) {
          for (let j = 0; j <tree[i].length; j++) {
            count += bypassingTheTree(tree[i][j]);
          }
      }
      return count
  }
  let result = [];
  for (let i = 0; i < tree.length; i++) {
    result[i] = bypassingTheTree(i);
  }
  console.log(result);
