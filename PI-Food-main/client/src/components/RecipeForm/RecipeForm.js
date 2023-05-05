import React, { useState } from "react";

const RecipeForm = () => {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [healthScore, setHealthScore] = useState(0);
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState("");
  const [diets, setDiets] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSummaryChange = (event) => {
    setSummary(event.target.value);
  };

  const handleHealthScoreChange = (event) => {
    setHealthScore(event.target.value);
  };

  const handleStepsChange = (event) => {
    setSteps(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleDietsChange = (event) => {
    const { value } = event.target;
    setDiets((prevState) => {
      if (prevState.includes(value)) {
        return prevState.filter((diet) => diet !== value);
      }
      return [...prevState, value];
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podríamos enviar los datos del formulario al servidor o hacer algo más con ellos
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} required />

      <label htmlFor="summary">Resumen:</label>
      <textarea id="summary" value={summary} onChange={handleSummaryChange} required />

      <label htmlFor="healthScore">Comida saludable:</label>
      <input
        type="number"
        id="healthScore"
        value={healthScore}
        min="0"
        max="100"
        onChange={handleHealthScoreChange}
        required
      />

      <label htmlFor="steps">Pasos:</label>
      <textarea id="steps" value={steps} onChange={handleStepsChange} required />

      <label htmlFor="image">Imagen:</label>
      <input type="url" id="image" value={image} onChange={handleImageChange} required />

      <fieldset>
        <legend>Tipo de dieta:</legend>
        <label>
          <input type="checkbox" value="gluten free" checked={diets.includes("gluten free")} onChange={handleDietsChange} />
          Sin gluten
        </label>
        <label>
          <input type="checkbox" value="ketogenic" checked={diets.includes("ketogenic")} onChange={handleDietsChange} />
          Cetogénica
        </label>
        <label>
          <input type="checkbox" value="vegetarian" checked={diets.includes("vegetarian")} onChange={handleDietsChange} />
          Vegetariana
        </label>
        <label>
          <input type="checkbox" value="vegan" checked={diets.includes("vegan")} onChange={handleDietsChange} />
          Vegana
        </label>
        <label>
          <input type="checkbox" value="pescatarian" checked={diets.includes("pescatarian")} onChange={handleDietsChange} />
          Pescetariana
        </label>
      </fieldset>

      <button type="submit">Crear receta</button>
    </form>
  );
};

export default RecipeForm;