import * as actionType from '../actions';
export const filmState = {
  loading: false,
  itemsByPlanet: {},
  error: null
};

export default function filmReducer(state = filmState, action) {
  switch (action.type) {
    case actionType.LOAD_FILMS_FOR_PLANET:
      return { ...state, loading: true };

    case actionType.LOAD_FILMS_FOR_PLANET_SUCCESS:
      return {
        ...state,
        loading: false,
        itemsByPlanet: { ...state.itemsByPlanet, ...action.payload }
      };

    case actionType.LOAD_FILMS_FOR_PLANET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
}
