export const showModal = cordinates => ({
  type: 'SHOW_MODAL',
  payload: { cordinates },
});

export const hideModal = () => ({
  type: 'HIDE_MODAL',
  payload: {},
});
