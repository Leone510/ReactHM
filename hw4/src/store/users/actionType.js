export const actionTypes = {
   SET_USERS_ARR: 'SET_USERS_ARR',
   ADD_USER: 'ADD_USER',
   DELETE_USER: 'DELETE_USER',
}

export const usersActions = {
   setUsersArr: (payload) => ({type: actionTypes.SET_USERS_ARR, payload}),
   addUser: (payload) => ({type: actionTypes.ADD_USER, payload}),
   deleteUser: (payload) => ({type: actionTypes.DELETE_USER, payload}),
}