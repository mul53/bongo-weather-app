import {
  TOGGLE_SEARCH_UI,
  SEARCH_PENDING,
  SEARCH_FAILED,
  SEARCH_SUCCESSFUL,
} from './searchActions';
import { ADD_CITY } from './cityActions';
import { currentWeather, weatherForecast } from '../api/weatherApi';

export const toggleSearchUI = () => (dispatch) => {
  dispatch({ type: TOGGLE_SEARCH_UI });
};

export const searchCurrentWeather = city => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_PENDING });

    const response = await weatherForecast(city);
    const json = await response.json();

    if (response.status === 404) {
      dispatch({ type: SEARCH_FAILED, payload: 'City not found' });
    } else {
      const { list, city: city2, weather } = json;

      const data = Object.assign({}, list[0], city2, weather);

      dispatch({ type: ADD_CITY, payload: data });
      dispatch({ type: SEARCH_SUCCESSFUL });
      dispatch({ type: TOGGLE_SEARCH_UI });
    }
  } catch (err) {
  	console.log(err);
    dispatch({ type: SEARCH_FAILED, payload: 'City not found' });
  }
};
