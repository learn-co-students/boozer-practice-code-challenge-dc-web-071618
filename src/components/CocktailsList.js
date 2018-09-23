import React, { Component } from "react";
import Cocktail from "./Cocktail";

class CocktailsList extends Component {
  render() {
    // debugger;
    return (
      <ul id="cocktail-list">
        {this.props.cocktails.map(cocktail => (
          <li
            key={cocktail.id}
            onClick={() => this.props.setCocktail(cocktail)}
          >
            {cocktail.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default CocktailsList;
