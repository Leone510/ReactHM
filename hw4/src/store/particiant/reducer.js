import {actionTypes} from './actionType';

const initState = {
   time: 0,
   isReg: true,
   currentUser: {
      name: '',
      surname: '',
   }
}

export const particiantReducer = (state = initState, action) => {
const {type, payload} = action;

   switch(type) {
      case actionTypes.RUN_TIMER:
         return {
            ...state,
            isReg: false
         };

      case actionTypes.CURRENT_USER:
         console.log(payload)
         return {
            ...state,
            currentUser: {
               ...state.currentUser,
               name: payload.name,
               surname: payload.surname,            },
         }

      // case actionTypes.DELETE_USER:
      //    const fixedArr = state.users.filter(user => {
      //       user.id !== payload.id
      //    })
      //    return {
      //       ...state,
      //       users: fixedArr,
      //    };

      default:
         return state;
   }
}