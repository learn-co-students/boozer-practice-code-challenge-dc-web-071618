import React from "react";

const Cocktail = props => {
  return (
    <li
      key={props.cocktail.id}
      onClick={() => props.selectCocktail(props.cocktail.id)}
    >
      {props.cocktail.name}
    </li>
  );
};

export default Cocktail;
