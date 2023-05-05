import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './RecipeDetail.css';

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:3001/recipes/${id}`)
      .then((response) => {(setRecipe(response.data))})
      .catch((error) => console.error(error));
  }, [id]);
console.log(recipe);
   if (!recipe.name) return <div>Loading...</div>; 
  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/(<([^>]+)>)/gi, "");
  }



  const {
    name,
    summary,
    image,
    dietTypes,
    healthScore,
    steps,
  } = recipe;

 
  return (
    <div className="contenedor">
      <h1 className="nombre">{name}</h1>
      <img src={image} alt={name} />
      <p className="resumen">Resumen del Plato: {removeTags(summary)}</p>
      <p>Nivel de comida saludable: {healthScore}</p>
      <h2>Pasos a seguir:</h2>
      <ol>
        {steps.map((step) => (
          <li key={step.number}>{step.step}</li>
        ))}
      </ol>
      <h2>Tipo de dieta:</h2>
      <p>{dietTypes && dietTypes.join(", ")}</p>
    </div>
  );
};

export default RecipeDetail;