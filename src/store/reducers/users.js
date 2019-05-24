const INITIAL_STATE = {
  loading: false,
  data: [],
  error: '',
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER_REQUEST':
      return { ...state, loading: true };
    case 'ADD_USER_SUCESS':
      return { ...state, loading: false, data: [...state.data, action.payload.data] };
    case 'ADD_USER_ERROR':
      return { ...state, loading: false, error: action.payload.error };
    case 'REMOVE_USER':
      return { ...state, data: state.data.filter(user => user.id !== action.payload.id) };

    default:
      return state;
  }
}
