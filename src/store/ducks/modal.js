/**
 * Types
 */
export const Types = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/HIDE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  visible: false,
  cordinates: null,
};
export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW:
      return { ...state, visible: true, cordinates: action.payload.cordinates };
    case Types.HIDE:
      return { ...state, visible: false };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  showModal: cordinates => ({
    type: Types.SHOW,
    payload: { cordinates },
  }),

  hideModal: () => ({
    type: Types.HIDE,
    payload: {},
  }),
};
