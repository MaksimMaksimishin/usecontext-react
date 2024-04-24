import { ADD_USER, REMOVE_USER, EDIT_USER } from "./actions";

export const initialState = [
  { id: 1, title: 'Пользователь 1' },
  { id: 2, title: 'Пользователь 2' },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];

    case REMOVE_USER:
      return state.filter(user => user.id !== action.payload.id);

    case EDIT_USER:
      return state.map(user => (user.id === action.payload.id ? action.payload : user));

    default:
      throw new Error();
  }
}