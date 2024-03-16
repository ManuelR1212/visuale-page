import React from 'react';
import '../styles/framework.css'; 

    const SearchBar = () => {

    

      return (
        <div className="search-bar">
          <input class="searchbar-input"
            type="text"
            placeholder="Buscar..."
          />
          <button class="searchbar-button">Buscar</button>
        </div>
      );
    };
    
    export default SearchBar;