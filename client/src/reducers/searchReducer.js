import {
  TOGGLE_SEARCH_UI,
  SEARCH_PENDING,
  SEARCH_SUCCESSFUL,
  SEARCH_FAILED,
} from '../actions/searchActions';

const initialState = {
  active: false,
  status: '',
  loading: false,
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH_UI:
      return Object.assign({}, state, { active: !state.active });
    case SEARCH_PENDING:
      return Object.assign({}, state, { loading: true, errorMessage: '' });
    case SEARCH_SUCCESSFUL:
      return Object.assign({}, state, { loading: false, errorMessage: '' });
    case SEARCH_FAILED:
      return Object.assign({}, state, { loading: false, errorMessage: action.payload });
    default:
      return state;
  }
};
