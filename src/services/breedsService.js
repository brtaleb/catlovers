import axios from 'axios';

export const breedsService = {
  getBreeds,
};

function getBreeds(){
  return axios.get("https://api.thecatapi.com/v1/breeds");
}
