import React from 'react';

const SearchBar = ({search, setSearch}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={e => {
          setSearch(e.target.value)
        }}
        value={search}
        placeholder="Search a cat breed"
      />
    </div>
  )
}
export default SearchBar;
