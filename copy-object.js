const user = {
  firstName: 'Dylan',
  middleName: 'Christopher',
  lastName: 'Israel',
  nickName: 'Coding God'
};
const user2 = user;
const user4 = {
  ...user
};
const user3 = JSON.parse(JSON.stringify(user));

console.log(Object.is(user, user4));
console.log(Object.is(user, user3));
console.log(Object.is(user, user2));
