import {actionTypes} from './actionType';

export const initState = {
   contests: [],
}

const fixer = (arr, id) => {
   let contest = {};
   let newState = [];

   arr.forEach(data => {
      if (data.id !== id) {
         newState.push({...data});
         return;
      } else {
         contest = {...data};
      }
   })
   return {
      newState,
      contest,
   }
}

export const contestsReducer = (state = initState, actions) => {
   const {type, payload} = actions;
   switch (type) {
      case actionTypes.SET_CONTESTS:
         return {
            ...state,
            contests: [...payload],
         }


      case actionTypes.CREATE_CONTEST:
         return {
            ...state,
            contests: [...state.contests, {...payload}],
         };


      case actionTypes.ADD_USER:
         const {contestId: id, userValue: value} = payload;
         
         const {newState, contest} = fixer(state.contests, id);

         return {...state, contests: [...newState, {
            ...contest,
            users: [...contest.users, {...value}],
         }]};


      case actionTypes.DELETE_USER:
         const {id: num, userId} = payload;

         const {newState: newArr, contest: newObj} = fixer(state.contests, num);

         const fixedUsers = newObj.users.filter(user => user.id !== userId)

         return {
            ...state,
            contests: [
               ...newArr,
               {
                  ...newObj,
                  users: [...fixedUsers],
               }
            ]
         }


      case actionTypes.CHANGE_CONTEST:
         const {id: contestId, users} = payload;
         const {newState: arr, contest: obj} = fixer(state.contests, contestId);

         let winner = {time: 9999};

         users.forEach(user => {
            user.time < winner.time && (winner = {...user})
         })

         return {...state, contests: [
            ...arr, {
               ...obj,
               isActive: false,
               winner: winner,
            }
         ]}


      default:
         return {...state};
   }
}