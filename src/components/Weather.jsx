import React, { Component } from "react";
import Form from "./Form";
import Soleil from "../img/soleil.png";

class Weather extends Component {
  state = {};
  getDate = () => {
    var d = new Date();
    var jour = new Array(7);
    jour[0] = "Dimanche";
    jour[1] = "Lundi";
    jour[2] = "Mardi";
    jour[3] = "Mercredi";
    jour[4] = "Jeudi";
    jour[5] = "Vendredi";
    jour[6] = "Samedi";
    var n = jour[d.getDay()];
    return n;
  };
  render() {
    return (
      <React.Fragment>
        <article className="box weather">
          <div className="icon bubble black">
            <div className="spin">
              <img src={Soleil} />
            </div>
          </div>
          <h1>{this.getDate()}</h1>
          <span className="temp">{this.props.temperature}&deg;C</span>
          <span className="high-low">
            {this.props.humidite} hPa/ {this.props.pression}%
          </span>
        </article>
      </React.Fragment>
    );
  }
}

export default Weather;
