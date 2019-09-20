import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>FORMULAIRE</h1>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="ville" placeholder="Ville"></input>
          <input type="text" name="pays" placeholder="Pays"></input>
          <button>TEMPERATURE</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
