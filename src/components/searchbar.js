import '../styles/framework.css'; 

  return (
    <div className="search-bar">
      <input class="searchbar-input"
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
      
      />
      <button class="searchbar-button">Buscar</button>
    </div>
  );


export default SearchBar;
