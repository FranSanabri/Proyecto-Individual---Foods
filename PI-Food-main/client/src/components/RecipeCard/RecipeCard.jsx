import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({ id, image, name, diets }) => {
  return (
    <div className="container">
      <Link to={`/recipes/${id}`}>
      <h2 className="nombre">{name}</h2>
      </Link>
      <img src={image} alt={name} className="imagen"/>
      <div className="orden">
          {diets.map((diet) => (
          <span key={diet}>{diet}</span>
        ))}
        {diets.join(", ")}
      </div>
    </div>
  );
};

export default RecipeCard;