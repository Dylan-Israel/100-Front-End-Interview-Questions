const user1 = {
  first: 'Dylan',
  last: 'Israel'
};
const user2 = {
  last: 'Israel',
  first: 'Dylan'
};
const stringObj1 = JSON.stringify(user1);
const stringObj2 = JSON.stringify(user2);

function isSameObject (obj1, obj2) {
  const props1 = Object.getOwnPropertyNames(obj1);
  const props2 = Object.getOwnPropertyNames(obj2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i = 0; i < props1.length; i++) {
    const property = props1[i];

    if (props1[property] !== props2[property]) {
      return false;
    }
  }

  return true;
}

console.log(isSameObject(user1, user2));

console.log(stringObj1 === stringObj2);

console.log(typeof stringObj1);
console.log(user1 === user2);
