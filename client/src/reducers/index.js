// Will bring together all reducers
import { combineReducers } from 'redux';
import animalReducer from './animalReducer';

export default combineReducers({
  animal: animalReducer,
});