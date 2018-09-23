import React from "react";
import Form from "./Form.js";

const Cocktail = props => {
  // debugger;
  return (
    <div>
      <h1>{props.cocktail.name.toUpperCase()}</h1>
      <div>
        <p>{props.cocktail.description}</p>
        <div>
          <p>{props.cocktail.instructions}</p>
        </div>
        <ul>
          {props.cocktail.proportions.map(ingredient => (
            <ul>
              <li>
                {ingredient.ingredient_name} - {ingredient.amount}
              </li>
            </ul>
          ))}
        </ul>
        <p>{props.cocktail.source}</p>
      </div>
    </div>
  );
};

export default Cocktail;
