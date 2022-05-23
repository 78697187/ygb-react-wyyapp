import { Map } from 'redux-immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  topBanners: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return state.set('topBanners', action.topBanners);
    default:
      return state;
  }
};

export default reducer;