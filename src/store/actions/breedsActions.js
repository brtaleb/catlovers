import {
  SET_BREEDS
} from './actions';
import {breedsService} from "../../services/breedsService";

export const getBreedsAction = () => {
  return dispatch => {
    breedsService.getBreeds()
      .then(response => {
        dispatch({
          type: SET_BREEDS,
          payload: response.data
        })
      })
      .catch(e => {
        console.log(e);
      })
  }
}
