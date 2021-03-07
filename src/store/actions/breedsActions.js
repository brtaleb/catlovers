import {
  GET_BREEDS, SET_BREEDS
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

// import {
//   GET_BREEDS,
// } from './actions';
// import {spaceService} from "../../services/space";
//
// export const getSpaceDataAction = (spaceId) => {
//   return dispatch => {
//     try {
//       spaceService.get(spaceId).then(data => {
//         if(data.erreur === "false"){
//           const project = JSON.parse(data.project)
//           const society = JSON.parse(data.society)
//           document.title = `${society.company_name} -
//                             ${project.company_name}:
//                             ${project.info_title}`;
//           dispatch({
//             type: SET_SPACE_DATA,
//             payload: data
//           })
//         }
//       })
//     } catch(e) {
//       console.log(e);
//     }
//   }
// }
