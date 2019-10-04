import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="d-flex justify-content-center">Météo</h1>
        <div className="d-flex justify-content-center container">
          <form className="form-inline" onSubmit={this.props.getWeather}>
            <input
              className="form-control"
              type="text"
              name="ville"
              placeholder="Ville"
            ></input>
            <input
              className="form-control"
              type="text"
              name="pays"
              placeholder="Pays"
            ></input>
            <button className="btn btn-success" type="submit">
              Valider
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
