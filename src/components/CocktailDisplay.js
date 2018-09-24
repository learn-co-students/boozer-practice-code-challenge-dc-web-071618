import React from "react";

const CocktailDisplay = props => {
  return (
    <div id="cocktail-display">
      <h1>{props.cocktail.name}</h1>
      <h3>{props.cocktail.description}</h3>
      <p>{props.cocktail.instructions}</p>
      {props.cocktail && (
        <div>
          <h2>Ingredients:</h2>
          <ul>
            {props.cocktail.proportions.map(proportion => (
              <li key={proportion.id}>
                {proportion.amount + " " + proportion.ingredient_name}{" "}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CocktailDisplay;
