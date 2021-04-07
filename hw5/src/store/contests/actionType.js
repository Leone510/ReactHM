export const actionTypes = {
   SET_CONTESTS: 'SET_CONTESTS',
   CREATE_CONTEST: 'CREATE_CONTEST',
   ADD_USER: 'ADD_USER',
   DELETE_USER: 'DELETE_USER',
   CHANGE_CONTEST: 'CHANGE_CONTEST',
}

export const contestsActions = {
   setContests: (payload) => ({type: actionTypes.SET_CONTESTS, payload}),
   createContests: (payload) => ({type: actionTypes.CREATE_CONTEST, payload}),
   addUser: (payload) => ({type: actionTypes.ADD_USER, payload}),
   deleteUser: (payload) => ({type: actionTypes.DELETE_USER, payload}),
   changeContest: (payload) => ({type: actionTypes.CHANGE_CONTEST, payload}),

}