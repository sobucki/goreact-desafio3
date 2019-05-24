const INITIAL_STATE = {
  visible: false,
};
export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return { visible: true };
    case 'HIDE_MODAL':
      return { visible: false };
    default:
      return state;
  }
}
