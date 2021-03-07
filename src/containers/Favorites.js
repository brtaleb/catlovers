import React, {useState} from 'react';
import BreedCard from "../components/BreedCard";

const Favorites = ({breeds}) => {

  let favorites = JSON.parse(localStorage.getItem("favorites"));
  if(!favorites) favorites = [];

  const [favoritesFilter, setFavoritesFilter] = useState(favorites);

  return (
    <div className="favorites">
      <button
        className="clear-favorites-btn"
        onClick={() => {
        localStorage.setItem("favorites", JSON.stringify([]));
        setFavoritesFilter([]);
      }}>
        Clear favorites
      </button>
      <div className="cards-container">
        {
          breeds
            .filter(breed => favorites.includes(breed.id)).length > 0 ?
            breeds
            .filter(breed => favorites.includes(breed.id))
            .map(breed => {
              return <BreedCard key={breed.id} breed={breed}/>
            }) :
            <p>No favorites</p>
        }
      </div>
    </div>
  )
}
export default Favorites;
