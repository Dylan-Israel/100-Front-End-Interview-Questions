const user = {
  firstName: 'Dylan',
  middleName: 'Christopher',
  lastName: 'Israel',
  nickName: 'Coding God'
};

console.log(user.firstName + ' ' + user.lastName);
console.log(user['firstName']);

for (let property in user) {
  console.log(user[property]);
}
