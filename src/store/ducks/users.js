/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_ERROR: 'users/ADD_ERROR',
  REMOVE_USER: 'users/REMOVE_USER',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: '',
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return { ...state, loading: false, data: [...state.data, action.payload.data] };
    case Types.ADD_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    case Types.REMOVE_USER:
      return { ...state, data: state.data.filter(user => user.id !== action.payload.id) };

    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addUserRequest: (username, cordinates) => ({
    type: Types.ADD_REQUEST,
    payload: { username, cordinates },
  }),

  addUserSucess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addUserError: error => ({
    type: Types.ADD_ERROR,
    payload: { error },
  }),

  removeUser: id => ({
    type: Types.REMOVE_USER,
    payload: { id },
  }),
};
