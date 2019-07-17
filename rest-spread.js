function add (num) {
  const nums = [1, 2, 3, 4];
  const user = {
    ...num
  };
  console.log(nums);
  console.log(num);
}

add({
  firstName: 'Dylan'
});
