const [month, day, year] = [10, 25, 1987];
console.log(`${month}/${day}/${year}`);

let {
  firstName: fn,
  nickName
} = {
  firstName: 'Dylan',
  middleName: 'Christopher',
  lastName: 'Israel',
  nickName: 'Coding God'
};

console.log(fn);
console.log(nickName);
