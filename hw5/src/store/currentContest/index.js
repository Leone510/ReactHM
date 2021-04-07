import {combineReducers} from 'redux';
import { infoDataReducer } from './infoData/reducer';
import { usersReducer } from './users/reducer';
import { participantReducer } from './participant/reducer';

const currentContest = combineReducers({
   infoData: infoDataReducer,
   usersData: usersReducer,
   participant : participantReducer,
});

export default currentContest;