import React, { Component } from "react";

class Form extends Component {
  state = {
    numberofIngredients: 1,
    newCocktail: {},
    newProportions: []
  };

  increaseIngredients = e => {
    e.preventDefault();
    this.setState({ numberofIngredients: this.state.numberofIngredients + 1 });
  };

  renderIngredientForms = () => {
    let ingredientForms = [];
    for (let i = 0; i < this.state.numberofIngredients; i++) {
      ingredientForms.push(
        <div className="container" key={i}>
          <p>
            Ingredient Name<br />
            <input
              type="text"
              name="ingredient_name"
              id={`ingredient ${i}`}
              onChange={this.handleProportionChange}
            />
          </p>

          <p>
            Quantity<br />
            <input
              type="text"
              name="amount"
              id={`quantity ${i}`}
              onChange={this.handleProportionChange}
            />
          </p>
        </div>
      );
    }
    return ingredientForms;
  };

  createNewCocktail = e => {
    e.preventDefault();
    let cocktailToCreate = {
      ...this.state.newCocktail,
      proportions: this.state.newProportions
    };
    this.props.createACocktail(cocktailToCreate);
  };

  handleChange = e => {
    this.setState({
      newCocktail: {
        ...this.state.newCocktail,
        [e.target.name]: e.target.value
      }
    });
  };

  handleProportionChange = e => {
    let index = parseInt(e.target.id.split(" ")[1]);
    let newProportionsArray = this.state.newProportions;
    for (let i = 0; i <= newProportionsArray.length; i++) {
      if (i === index) {
        newProportionsArray[i] = {
          ...newProportionsArray[i],
          [e.target.name]: e.target.value
        };
      }
    }
    this.setState({
      newProportions: newProportionsArray
    });
  };

  render() {
    return (
      <form onSubmit={this.createNewCocktail}>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input type="text" name="name" onChange={this.handleChange} />

        <p>Description</p>
        <input type="text" name="description" onChange={this.handleChange} />

        <p>Instructions</p>
        <input type="text" name="instructions" onChange={this.handleChange} />

        <h3>Proportions</h3>
        {this.renderIngredientForms()}

        <p>
          <button onClick={this.increaseIngredients}> + </button>
        </p>

        <input type="submit" />
      </form>
    );
  }
}

export default Form;
