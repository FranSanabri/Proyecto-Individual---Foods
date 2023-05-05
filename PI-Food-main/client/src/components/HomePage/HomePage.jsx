import { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import SearchBar from "../SearchBar/SearchBar";
import Paginated from "../Paginated/Paginated";
import "./HomePage.css";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm , setSearchTerm] = useState("");
  const [order, setOrder] = useState('');
  
  useEffect(() => {
    fetch(`/recipes?search=${searchTerm}&order=${order}`)
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, [searchTerm, order]);

  // Lógica para mostrar 9 recetas por página
  const [page, setPage] = useState(1);
  const recipesPage = 9;
  const numberOfRecipes = page * recipesPage;
  const firstRecipe = numberOfRecipes - recipesPage;
  const showedRecipes = recipes.slice(firstRecipe, numberOfRecipes);

  const paged = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <SearchBar setRecipes={setRecipes} setSearchTerm={setSearchTerm} setOrder={setOrder} />
      <Link to="/recipes-form">
        <button className="form1">Create Form</button>
      </Link>
      <div className="recipe-list">
        {showedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            name={recipe.name}
            diets={recipe.dietTypes}
          />
        ))}
      </div>
      <Paginated className="botones"
        recipesPerPage={recipesPage}
        totalRecipes={recipes.length}
        paged={paged}
      />
    </div>
  );
};

export default HomePage;