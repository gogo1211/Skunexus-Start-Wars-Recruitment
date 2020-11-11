import * as actionType from '../actions';
export const simpleState = {};

export default function simpleReducer(state = simpleState, action) {
  switch (action.type) {
    case actionType.ACTION:
      return { ...state, loading: true };

    case actionType.ACTION_SUCCESS:
      return state;

    case actionType.ACTION_ERROR:
      return state;

    default:
      return state;
  }
}
