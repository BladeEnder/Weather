import React, { Component } from "react";
import Form from "./Form";

class Weather extends Component {
  state = {
    api_key: "f88720914e77c3bcd600bfee75e38960"
  };
  getWeather = async e => {
    const ville = e.target.elements.ville.value;
    const pays = e.target.elements.pays.value;
    const firstapi = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ville},${pays}s&appid=${this.state.api_key}&units=metric`
    );
    const data = await firstapi.json();
    console.log(data);
  };
  render() {
    return (
      <React.Fragment>
        <Form getWeather={this.getWeather}></Form>
        <h1>TEMPERATURE</h1>
      </React.Fragment>
    );
  }
}

export default Weather;
