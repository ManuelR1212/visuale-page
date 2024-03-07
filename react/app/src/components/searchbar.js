import React, { useState } from 'react';
import '../styles/framework.css'; 

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Lógica para realizar la búsqueda
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input class="searchbar-input"
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button class="searchbar-button" onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
