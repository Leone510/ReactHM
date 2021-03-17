import {createStore, combineReducers} from 'redux';
import { infoDataReducer } from './infoData/reducer';
import { particiantReducer } from './particiant/reducer';
import { usersReducer } from './users/reducer';

const rootReducer = combineReducers({
   infoData: infoDataReducer,
   usersData: usersReducer,
   participant : particiantReducer,
});

const store = createStore(rootReducer);

export default store;