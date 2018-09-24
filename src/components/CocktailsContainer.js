import React, { Component } from "react";

import CocktailsList from "./CocktailsList";
import CocktailDisplay from "./CocktailDisplay";
import Form from "./Form";

class CocktailsContainer extends Component {
  state = {
    cocktails: [],
    selectedCocktail: ""
  };

  componentDidMount() {
    fetch("https://react-boozer-backend.herokuapp.com/api/v1/cocktails")
      .then(response => response.json())
      .then(cocktailsData => this.setState({ cocktails: cocktailsData }));
  }

  selectCocktail = id => {
    fetch(`https://react-boozer-backend.herokuapp.com/api/v1/cocktails/${id}`)
      .then(response => response.json())
      .then(cocktailData => this.setState({ selectedCocktail: cocktailData }));
  };

  createACocktail = cocktail => {
    let newCocktailsList = this.state.cocktails.push(cocktail);
    this.setState({ cocktails: newCocktailsList });
  };

  render() {
    return (
      <div className="container">
        <CocktailsList
          cocktails={this.state.cocktails}
          selectCocktail={this.selectCocktail}
        />
        <CocktailDisplay cocktail={this.state.selectedCocktail} />
        <Form createACocktail={this.createACocktail} />
      </div>
    );
  }
}

export default CocktailsContainer;
