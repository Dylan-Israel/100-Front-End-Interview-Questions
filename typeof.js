console.log(typeof 37 === 'number');

console.log(typeof NaN === 'number');

console.log(typeof `template literal` === 'string');
console.log(typeof '1' === 'string');

console.log(typeof true === 'boolean');

console.log(typeof undefined === 'undefined');

console.log(typeof {
  a: 1
} === 'object');

console.log(typeof [1, 2, 4] === 'object');
console.log(Array.isArray([1, 2, 4]));
console.log(Array.isArray({}));

console.log(typeof new Date() === 'object');
console.log(typeof /regex/ === 'object');
console.log(null instanceof Object);
console.log(typeof null);
console.log({} instanceof
    Object);

console.log(typeof
function () {} === 'function');
console.log(typeof Math.sin === 'function');
