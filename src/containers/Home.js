import React, {useState} from 'react';
import BreedCard from "../components/BreedCard";
import SearchBar from "../components/SearchBar";

const Home = ({breeds}) => {

  const [search, setSearch] = useState('');

  return (
    <div className="home">
      <SearchBar search={search} setSearch={setSearch}/>
      <div className="cards-container">
        {
          breeds
            .filter(breed => {
              return breed.name.toLowerCase().includes(search.toLowerCase())
            })
            .map(breed => {
            return <BreedCard key={breed.id} breed={breed}/>
          })
        }
      </div>
    </div>
  )
}
export default Home;
