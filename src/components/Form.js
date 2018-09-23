import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      newCocktail: {
        id: "",
        name: "",
        description: "",
        instructions: "",
        proportions: [
          {
            ingredient_name: "",
            amount: ""
          }
        ]
      }
    };
  }

  nameChangeHandler = e => {
    // debugger;
    this.setState({
      newCocktail: {
        ...this.state.newCocktail,
        name: e.target.value
      }
    });
  };

  descriptionChangeHadlenr = e => {
    // debugger;
    this.setState({
      newCocktail: {
        ...this.state.newCocktail,
        description: e.target.value
      }
    });
  };

  instructionsChangeHandler = e => {
    // debugger;
    this.setState({
      newCocktail: {
        ...this.state.newCocktail,
        instructions: e.target.value
      }
    });
  };

  addCocktailHandler = e => {
    e.preventDefault();
    // console.log(this.state.newCocktail)
    // this.props.addCocktail(this.state.newCocktail);
    alert(
      `Sorry, but this feature is under construction and we cannot add ${
        this.state.newCocktail.name
      }`
    );
  };

  render() {
    let { newCocktail } = this.state;
    return (
      <form
        // onChange={event => this.props.addCocktail(event)}
        onSubmit={event => this.addCocktailHandler(event)}
      >
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input
          type="text"
          onChange={e => this.nameChangeHandler(e)}
          value={newCocktail.name}
        />

        <p>Description</p>
        <input
          type="text"
          onChange={e => this.descriptionChangeHadlenr(e)}
          value={newCocktail.description}
        />

        <p>Instructions</p>
        <input
          type="text"
          onChange={e => this.instructionsChangeHandler(e)}
          value={newCocktail.instructions}
        />

        <h3>Proportions</h3>
        <div className="container">
          {/* <p>
            Ingredient Name<br />
            <input
              type="text"
              value={newCocktail.proportions.ingredient_name}
            />
          </p>

           <p>
            Quantity<br />
            <input type="text" value={newCocktail.proportions.amount} />
          </p> */}
        </div>

        <p>
          <button> + </button>
        </p>

        <input type="submit" />
      </form>
    );
  }
}

export default Form;

// id: 34,
// name: "BLACK FLIP",
// description:
//   "This drink was inspired by the chapter on flips in Wayne Curtis’s excellent book And a Bottle of Rum: A History of the New World in Ten Cocktails.",
// instructions:
//   "Add everything to a mixing glass and swirl to decarbonate beer. Dry-shake, then shake with ice and strain into a chilled fizz glass. Garnish with grated nutmeg",
// source: "—Jim Meehan, Winter 2007",
// proportions: [
//   {
//     id: 131,
//     ingredient_name: "Whole Organic Egg",
//     amount: "1 "
//   },
//   {
//     id: 130,
//     ingredient_name: "Demerara Syrup",
//     amount: ".5 oz."
//   },
//   {
//     id: 129,
//     ingredient_name: "Cruzan Black Strap Rum",
//     amount: "1.5 oz."
//   },
//   {
//     id: 128,
//     ingredient_name: "Brooklyn Black Chocolate Stout",
//     amount: "2 oz."
//   }
// ]
