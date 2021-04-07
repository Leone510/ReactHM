import {createStore, combineReducers} from 'redux';
import { contestsReducer } from './contests/reducer';
import currentContest from './currentContest/index'

const rootRedicer = combineReducers({
   contests: contestsReducer,
   currentContest: currentContest,
});

const store = createStore(rootRedicer);

export default store;