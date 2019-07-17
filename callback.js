const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map(add5);

console.log(arr2);

function add5 (val) {
  return val + 5;
}
