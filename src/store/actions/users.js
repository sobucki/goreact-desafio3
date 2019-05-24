export const addUserRequest = (username, cordinates) => ({
  type: 'ADD_USER_REQUEST',
  payload: { username, cordinates },
});

export const addUserSucess = data => ({
  type: 'ADD_USER_SUCESS',
  payload: { data },
});

export const addUserError = error => ({
  type: 'ADD_USER_ERROR',
  payload: { error },
});

export const removeUser = id => ({
  type: 'REMOVE_USER',
  payload: { id },
});
