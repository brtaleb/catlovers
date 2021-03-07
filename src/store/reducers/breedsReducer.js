import {SET_BREEDS} from "../actions/actions";

const initialState = {
  data: {
    breeds: []
  }
}

export default function breedsReducer(state = initialState, action){
  switch (action.type) {
    case SET_BREEDS:
      return {
        ...state,
        data: {
          breeds: action.payload
        }
      }
    default:
      return state;
  }
}
