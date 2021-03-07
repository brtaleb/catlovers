import React from 'react';
import {Link} from "react-router-dom";

const BreedCard = ({breed}) => {
  return (
    <Link to={`/breed/${breed.id}`}>
      <div className="breed-card">
        <img
          className="card-img"
          src={breed.image && breed.image.url ? breed.image.url : process.env.PUBLIC_URL + '/placeholder.png'}
          alt={breed.id}
        />
        <div className="card-info">{breed.name}</div>
      </div>
    </Link>
  )
}
export default BreedCard;
