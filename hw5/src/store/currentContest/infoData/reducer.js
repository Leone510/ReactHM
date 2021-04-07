import {actionTypes} from './actionType';

const initState = {
   id: NaN,
   name: '',
   isActive: true,
   winner: {},
}

export const infoDataReducer = (state = initState, action) => {
const {type, payload} = action;
   switch(type) {

      case actionTypes.SET_WINNER:
         let winner = {time: 9999};

         payload.forEach(user => {
            user.time < winner.time && (winner = {...user})
         })

         return {
            ...state,
            isActive: false,
            winner: winner,
         };

      case actionTypes.SET_WINNER_CONTEST:
         return {
            ...state,
            id: payload.id,
            name: payload.name,
            isActive: payload.isActive,
            winner: payload.winner,
         }

      default:
         return {...state};

   }
}