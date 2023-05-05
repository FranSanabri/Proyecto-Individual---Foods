import React, { useState } from "react";
import axios from "axios";
import "./SearchBar.css";

const SearchBar = ({ setRecipes }) => {
  const [searchTerm, setSearchTerm] = useState(""); // definir searchTerm

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/recipes?name=${searchTerm}`);
      setRecipes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input className="barra"
        type="text"
        placeholder="Search for recipes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="botonSearch">Search</button>
    </form>
  );
};

export default SearchBar;