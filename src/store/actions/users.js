export const addUser = () => ({
  type: 'ADD_USER',
  payload: { name: 'text' },
});

export const removeUser = id => ({
  type: 'REMOVE_USER',
  payload: { id },
});
