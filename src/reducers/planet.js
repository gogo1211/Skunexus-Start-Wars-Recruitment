import * as actionType from '../actions';
export const planetState = {
  loading: false,
  page: 1,
  items: {
    1: []
  },
  error: ''
};

export default function planetReducer(state = planetState, action) {
  switch (action.type) {
    case actionType.LOAD_PLANETS:
      return { ...state, page: action.page, loading: true };

    case actionType.LOAD_PLANETS_SUCCESS:
      return { ...state, loading: false, items: { ...state.items, ...action.payload } };

    case actionType.ACTION_ERROR:
      return state;

    default:
      return state;
  }
}
