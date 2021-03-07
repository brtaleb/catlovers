import React, {useState} from 'react';
import {useParams} from "react-router";

const BreedPage = ({breeds}) => {
  let {id} = useParams();

  const breed = breeds && breeds.filter(breed => breed.id === id)[0];

  let favorites = JSON.parse(localStorage.getItem("favorites"));
  if(!favorites) favorites = [];

  const [isFavorite, setIsFavorite] = useState(breed && favorites.includes(breed.id));

  if(breed) {
    return (
      <div>
        {
          breed.image && breed.image.url ?
            <div className="breed-header" style={{
              background: "url('"+breed.image.url+"') no-repeat center center fixed"
            }}>

            </div> :
            <div className="breed-header" style={{
              backgroundColor: 'black'
            }}>

            </div>
        }

        <button
          className="favorite-btn"
          onClick={() => {
            if(favorites.includes(breed.id)){
              favorites = favorites.filter(e => e !== breed.id);
            }
            else {
              favorites.push(breed.id)
            }

            localStorage.setItem("favorites", JSON.stringify(favorites));
            setIsFavorite(favorites.includes(breed.id));
          }}
        >
          {
            isFavorite ?
              "Remove from favorite" :
              "Add to favorite"
          }
        </button>

        <div className="breed-details">
          <p>{breed.description}</p>
          <p>Affection level : {breed.affection_level}</p>
          <p>Dog friendly : {breed.dog_friendly}</p>
        </div>

      </div>
    )
  }
  else return <div/>
}
export default BreedPage;
