let example1 = 1;
let example2 = example1;
example2++;

console.log(example1, ' - ', example2);

const example3 = {
  channel: 'YouTube'
};
const example4 = {
  ...example3
};
example4.name = 'Dylan Israel';
console.log(example3, ' - ', example4);
