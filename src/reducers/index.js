import { combineReducers } from 'redux';
import eventsReducer from "./eventsReducer";
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  eventsReducer,
  form: formReducer,
})