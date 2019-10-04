import React, { Component } from "react";
import Weather from "./components/Weather";
import Form from "./components/Form";

class App extends Component {
  state = {
    temperature: null,
    pression: null,
    humidite: null,
    api_key: "f88720914e77c3bcd600bfee75e38960"
  };

  getWeather = async e => {
    e.preventDefault();
    const ville = e.target.elements.ville.value;
    const pays = e.target.elements.pays.value;
    const firstapi = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${this.state.api_key}`
    );
    const data = await firstapi.json();
    this.setState({
      temperature: Math.floor(data.main.temp - 273.15),
      pression: data.main.humidity,
      humidite: data.main.pressure
    });
    console.log(data);
    console.log(this.state.temperature);
  };
  render() {
    return (
      <div>
        <Form getWeather={this.getWeather}></Form>
        <Weather
          temperature={this.state.temperature}
          pression={this.state.pression}
          humidite={this.state.humidite}
        ></Weather>
      </div>
    );
  }
}

export default App;
