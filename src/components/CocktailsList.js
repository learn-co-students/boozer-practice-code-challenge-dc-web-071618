import React, { Component } from "react";
import Cocktail from "./Cocktail";

class CocktailsList extends Component {
  createCocktailList = () => {
    return this.props.cocktails.map(cocktail => (
      <Cocktail
        key={cocktail.id}
        cocktail={cocktail}
        selectCocktail={this.props.selectCocktail}
      />
    ));
  };

  render() {
    return <div id="cocktail-list">{this.createCocktailList()}</div>;
  }
}

export default CocktailsList;
