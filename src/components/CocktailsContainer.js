import React, { Component } from "react";
import CocktailsList from "./CocktailsList";
import CocktailDisplay from "./CocktailDisplay";
import Cocktail from "./Cocktail";
import Form from "./Form";

class CocktailsContainer extends Component {
  constructor() {
    super();
    this.state = {
      cocktails: [],
      cocktail: {}
    };
  }

  componentDidMount() {
    this.getAllCocktails();
  }

  getAllCocktails = () => {
    fetch(`https://react-boozer-backend.herokuapp.com/api/v1/cocktails`)
      .then(r => r.json())
      .then(data =>
        this.setState({
          cocktails: data
        })
      );
  };

  getCocktail = cocktail => {
    fetch(
      `https://react-boozer-backend.herokuapp.com/api/v1/cocktails/${
        cocktail.id
      }`
    )
      .then(r => r.json())
      .then(data => this.setCocktail(data));
  };

  setCocktail = data => {
    this.setState({
      cocktail: data
    });
  };

  // addCocktail = newCocktail => {
  //   const newCocktails = ...this.state.cocktails.push(newCocktail);
  //   console.log(newCocktail);
  //   this.setState({
  //     cocktails: newCocktails
  //   });
  //   debugger;
  // };

  render() {
    return (
      <div className="container">
        <div>
          {!!this.state.cocktail.name && (
            <Cocktail cocktail={this.state.cocktail} />
          )}
        </div>
        <div overflow="scroll">
          <CocktailsList
            cocktails={this.state.cocktails}
            setCocktail={c_id => this.getCocktail(c_id)}
          />
        </div>
        <div>
          <Form addCocktail={newInfo => this.addCocktail(newInfo)} />
        </div>
      </div>
    );
  }
}

export default CocktailsContainer;
