export const addUser = username => ({
  type: 'ADD_USER',
  payload: { username },
});

export const removeUser = id => ({
  type: 'REMOVE_USER',
  payload: { id },
});
