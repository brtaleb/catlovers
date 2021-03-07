import { combineReducers } from 'redux';
import breedsReducer from "./breedsReducer";

const combinedReducers = combineReducers({
  breedsStore: breedsReducer,
});

export default combinedReducers;
