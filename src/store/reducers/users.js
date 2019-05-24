const INITIAL_STATE = [
  {
    id: 1,
    name: 'Rafael Soares Sobucki',
    username: 'sobucki',
    avatar: 'https://avatars3.githubusercontent.com/u/15240858',
  },
  {
    id: 2,
    name: 'shadelotus',
    username: 'teste',
    avatar: 'https://avatars3.githubusercontent.com/u/15240853',
  },
];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: Math.random(),
          name: 'novo',
          username: action.payload.username,
          avatar: `https://avatars3.githubusercontent.com/u/${Math.floor(
            Math.random() * (99999999 - 1),
          ) + 1}`,
        },
      ];
    case 'REMOVE_USER':
      return state.filter(user => user.id !== action.payload.id);

    default:
      return state;
  }
}
