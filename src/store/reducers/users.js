const INITIAL_STATE = [
  {
    id: 1,
    name: "Rafael Soares Sobucki",
    username: "sobucki",
    avatar: "https://avatars3.githubusercontent.com/u/15240858"
  },
  {
    id: 2,
    name: "shadelotus",
    username: "teste",
    avatar: "https://avatars3.githubusercontent.com/u/15240853"
  }
];

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "value":
      return state;

    default:
      return state;
  }
}
