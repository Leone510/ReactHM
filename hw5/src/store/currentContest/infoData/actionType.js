export const actionTypes = {
   SET_WINNER_CONTEST: 'SET_CONTEST',
   SET_WINNER: 'SET_WINNER',
}

export const winerActions = {
   setWinnerContest: (payload) => ({type: actionTypes.SET_WINNER_CONTEST, payload}),
   setWinner: (payload) => ({type: actionTypes.SET_WINNER, payload}),
}