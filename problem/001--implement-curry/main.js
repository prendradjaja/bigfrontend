function main() {
  // Given examples
  const join = (a, b, c) => {
    return `${a}_${b}_${c}`
  }
  const curriedJoin = curry(join)
  console.log(curriedJoin(1, 2, 3) === '1_2_3');
  console.log(curriedJoin(1)(2, 3) === '1_2_3');
  console.log(curriedJoin(1, 2)(3) === '1_2_3');

  // My extra examples
  const join5 = (a, b, c, d, e) => {
    return `${a}_${b}_${c}_${d}_${e}`
  }
  console.log(curry(join5)(1, 2)(3)(4)(5) === '1_2_3_4_5');
  console.log(curry(join5)(1, 2)(3)(4, 5) === '1_2_3_4_5');
}

function curry(f, arity = f.length) {
  return (...args) => {
    if (args.length >= arity) {
      return f(...args);
    } else {
      return curry(
        (...moreArgs) => f(...args, ...moreArgs),
        arity - args.length
      );
    }
  }
}

main();
