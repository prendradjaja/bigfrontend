function main() {
  // Given examples
  const arr = [1, [2], [3, [4]]];
  assertEquals(flat(arr), [1, 2, 3, [4]]);
  assertEquals(flat(arr, 1), [1, 2, 3, [4]]);
  assertEquals(flat(arr, 2), [1, 2, 3, 4]);

  // My extra examples
  assertEquals(flat([1, [2, [3, [4]]]], 1), [1, 2, [3, [4]]]);
  assertEquals(flat([1, [2, [3, [4]]]], 2), [1, 2, 3, [4]]);
  assertEquals(flat([1, [2, [3, [4]]]], 3), [1, 2, 3, 4]);
}

function flat(arr, depth = 1) {
  if (depth <= 0) {
    return arr;
  } else {
    const result = [];
    for (let item of arr) {
      if (!(item instanceof Array)) {
        result.push(item);
      } else {
        for (let subitem of flat(item, depth - 1)) {
          result.push(subitem);
        }
      }
    }
    return result;
  }
}

function assertEquals(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('OK');
  } else {
    console.log(`FAIL:
- Expected: ${JSON.stringify(expected)}
- Actual: ${JSON.stringify(actual)}`);
  }
}

main();
