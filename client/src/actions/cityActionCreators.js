import { ADD_CITY } from './cityActions';

export const addCity = city => (dispatch) => {
  dispatch({
    type: ADD_CITY,
    payload: city,
  });
};
