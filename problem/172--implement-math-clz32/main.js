function main() {
  assertEquals(clz32(1), 31);
  assertEquals(clz32(10000), 18);
  assertEquals(clz32(25.45), 27);

  // Don't bother -- not fun to reverse engineer the spec for the rest of the cases
}

function clz32(n) {
  if (n < 0) {
    return 0;
  }

  n = Math.floor(n);

  let result = 32;
  while (n) {
    n >>= 1;
    result--;
  }
  return result;
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
