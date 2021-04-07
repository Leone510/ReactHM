export const actionTypes = {
   CURRENT_USER: 'CURRENT_USER',
   TIMER_STATE: 'TIMER_STATE',
   TIME_RUN: 'TIME_RUN',
   CANCEL: 'CANCEL',
   SET_PARTICIPANT: 'SET_PARTICIPANT',
}

export const participantActions = {
   currentUser: (payload) => ({type: actionTypes.CURRENT_USER, payload}),
   timerState: (payload) => ({type: actionTypes.TIMER_STATE, payload}),
   timeChange: () => ({type: actionTypes.TIME_RUN}),
   cancel: () => ({type: actionTypes.CANCEL}),
   setParticipant: (payload) => ({type: actionTypes.SET_PARTICIPANT, payload})
}