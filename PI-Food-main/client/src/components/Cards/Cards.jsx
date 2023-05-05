import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import style from "./Cards.module.css";

export default function RecipeCards(props) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state); // accediendo a los datos

  return (
    <div className={style.container}>
      {data.map((recipe) => {
        const {
          id,
          name,
          summary,
          image,
          dietTypes,
          spoonacularScore,
        } = recipe;
        return (
          <RecipeCard
            key={id}
            id={id}
            name={name}
            summary={summary}
            image={image}
            diets={dietTypes} // usando la clave correcta
            score={spoonacularScore}
          />
        );
      })}
    </div>
  );
}