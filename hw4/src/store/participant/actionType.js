export const actionTypes = {
   CURRENT_USER: 'CURRENT_USER',
   TIMER_STATE: 'TIMER_STATE',
   TIME_RUN: 'TIME_RUN',
   CANCEL: 'CANCEL',
}

export const participantActions = {
   currentUser: (payload) => ({type: actionTypes.CURRENT_USER, payload}),
   timerState: (payload) => ({type: actionTypes.TIMER_STATE, payload}),
   timeChange: () => ({type: actionTypes.TIME_RUN}),
   cancel: () => ({type: actionTypes.CANCEL}),
}