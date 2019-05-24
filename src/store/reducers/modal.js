const INITIAL_STATE = {
  visible: false,
  cordinates: null,
};
export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return { ...state, visible: true, cordinates: action.payload.cordinates };
    case 'HIDE_MODAL':
      return { ...state, visible: false };
    default:
      return state;
  }
}
