const prices = [1, 2, 3, 10, 20, 30];

const mapExample = prices.map((value) => value + 1);
const filterExample = prices.filter((value) => value < 10);
const reduceExample = prices.reduce((total, current) => {
  return total += current;
}, 0);

const reduceArrayExample = prices.reduce((accumulator, value) => {
  const newValue = value + 1;

  if (newValue <= 20) {
    accumulator.push(newValue);
  }

  return accumulator;
}, []);

console.log(prices);
console.log(mapExample);
console.log(filterExample);
console.log(reduceExample);
console.log(reduceArrayExample);
