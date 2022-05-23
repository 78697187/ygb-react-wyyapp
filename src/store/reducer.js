import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from '../pages/recommend/store';


// 合并reducer
const cReducer = combineReducers({
  recommend: recommendReducer,
});

export default cReducer;