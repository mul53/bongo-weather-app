import {
  ADD_CITY,
} from '../actions/cityActions';

const initialState = {
  cities: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CITY:
      return Object.assign({}, state, { cities: [...state.cities, action.payload] });
    default:
      return state;
  }
};
