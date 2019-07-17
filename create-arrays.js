const example1 = [1];
const badExample = new Array();
const example2 = example1.map((val) => {
  return val + 1;
});

console.log(example1);
console.log(example2);
console.log(badExample);
