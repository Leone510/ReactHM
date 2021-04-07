import {actionTypes} from './actionType';

const initState = {
   time: 0,
   timerState: 'initial',
   isReg: true,
   currentUser: {
      name: '',
      surname: '',
   }
}

export const participantReducer = (state = initState, action) => {
const {type, payload} = action;

   switch(type) {
      case actionTypes.CURRENT_USER:
         return {
            ...state,
            isReg: false,
            currentUser: {
               ...state.currentUser,
               id: payload.id,
               name: payload.name,
               surname: payload.surname,
            },
         }
      
      case actionTypes.TIMER_STATE:
         return {
            ...state,
            time: payload.time,
            timerState: payload.name,
         }

      case actionTypes.TIME_RUN:
         return {
            ...state,
            time: state.time + 1,
         }
      
      case actionTypes.CANCEL:
         return {
            ...state,
            time: 0,
            timerState: 'initial',
            isReg: true,
            currentUser: {
               ...state.currentUser,
               name: '',
               surname: '',
            }
         }

      case actionTypes.SET_PARTICIPANT:
         return {
            ...state,
            ...payload,
         }

      default:
         return state;
   }
}