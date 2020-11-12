import * as actionType from '../actions';
export const planetState = {
  loading: false,
  page: 1,
  itemsByPage: {
    1: []
  },
  error: ''
};

export default function planetReducer(state = planetState, action) {
  switch (action.type) {
    case actionType.LOAD_PLANETS:
      return { ...state, loading: true };

    case actionType.LOAD_PLANETS_SUCCESS:
      return {
        ...state,
        loading: false,
        itemsByPage: { ...state.itemsByPage, ...action.payload }
      };

    case actionType.LOAD_PLANETS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case actionType.SET_PAGE:
      return {
        ...state,
        page: action.page
      };

    default:
      return state;
  }
}
