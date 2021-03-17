export const actionTypes = {
   RUN_TIMER: 'RUN_TIMER',
   CURRENT_USER: 'CURRENT_USER',
}

export const particiantActions = {
   runTimer: (payload) => ({type: actionTypes.RUN_TIMER, payload}),
   currentUser: (payload) => ({type: actionTypes.CURRENT_USER, payload}),
}