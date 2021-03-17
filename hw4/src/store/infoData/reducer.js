import {actionTypes} from './actionType';

const initState = {
   showWinner: false,
   winnerID: '',
}

export const infoDataReducer = (state = initState, action) => {
const {type, payload} = action;

   switch(type) {
      case actionTypes.SHOW_WINNER:
         return {
            ...state,
            showWinner: true,
            winnerID: payload.ID
         };
      case actionTypes.SHOW_PARTICIPANTS:
         return {
            ...state,
            showWinner: false,
            winnerID: '',
         };
      default:
         return {...state};

   }
}