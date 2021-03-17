import {actionTypes} from './actionType';

const initState = {
   users: [
      {
         id: 123456,
         name: 'Lucas',
         surname: "ddfff",
         time: 2000,
      },
      {
         id: 124756,
         name: 'Dave',
         surname: "fhjss",
         time: 3000,
      },
      {
         id: 503456,
         name: 'Viki',
         surname: "jkkkk",
         time: 2500,
      },
      {
         id: 405156,
         name: 'Joe',
         surname: "ddftyuoff",
         time: 2800,
      },
   ],

   
}

export const usersReducer = (state = initState, action) => {
const {type, payload} = action;

   switch(type) {
      case actionTypes.ADD_USER:
         return {
            ...state,
            users: [...state.users, payload.user]
         };

      

      // case actionTypes.DELETE_USER:
      //    const fixedArr = state.users.filter(user => {
      //       user.id !== payload.id
      //    })
      //    return {
      //       ...state,
      //       users: fixedArr,
      //    };

      default:
         return {...state};
   }
}