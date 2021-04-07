import {actionTypes} from './actionType';

const initState = {
   users: [],
}

export const usersReducer = (state = initState, action) => {
const {type, payload} = action;
   switch(type) {
      case actionTypes.SET_USERS_ARR:
         return {
            ...state,
            users: [...payload],
         }

      case actionTypes.ADD_USER:
         return {
            ...state,
            users: [...state.users, payload]
         };

      case actionTypes.DELETE_USER:
         const newArr = state.users.filter(user => user.id !== payload)
         return {
            ...state,
            users: newArr,
         };

      default:
         return {...state};
   }
}