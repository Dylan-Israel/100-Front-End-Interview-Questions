// let counter = 0;

// function add1 () {
//   counter++;

//   return counter;
// }
const add1 = (function () {
  let counter = 0;

  return function () {
    counter++;

    return counter;
  };
})();
console.log(add1());
console.log(add1());
console.log(add1());
