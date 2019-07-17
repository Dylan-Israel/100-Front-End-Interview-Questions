/* eslint-disable no-undef */
async function getNotes () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await response.json();
  console.log('Get', json);
}

// getNotes();

async function postNotes () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Dylan',
      body: 'Israel',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });

  const json = await response.json();

  console.log('Post', json);
}

// postNotes();

async function putNotes () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'Dylan',
      body: 'Israel',
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });

  const json = await response.json();

  console.log('Put', json);
}

putNotes();

async function deleteNotes () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  });

  console.log('Delete', response);
}
