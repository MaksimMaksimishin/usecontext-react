export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const EDIT_USER = 'EDIT_USER';

export const addUser = payload => ({
  type: ADD_USER,
  payload,
});

export const removeUser = payload => ({
  type: REMOVE_USER,
  payload,
});

export const editUser = payload => ({
  type: EDIT_USER,
  payload,
});