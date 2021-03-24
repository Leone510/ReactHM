import {createStore, combineReducers} from 'redux';
import { infoDataReducer } from './infoData/reducer';
import { participantReducer } from './participant/reducer';
import { usersReducer } from './users/reducer';

const rootReducer = combineReducers({
   infoData: infoDataReducer,
   usersData: usersReducer,
   participant : participantReducer,
});

const store = createStore(rootReducer);

export default store;