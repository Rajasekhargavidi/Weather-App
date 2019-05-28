import React, { Component } from 'react';
import Sun from '../../resources/images/sun.png'

class Weather extends Component {
    constructor(props){
        super(props);
    }
  render() {
    const { location, temp_c, isDay,text,iconURL } = this.props;
    return (
      <div className="weather-container">
      <div className="header">{ location }</div>
        <div className="inner-section">
        <div className="image"><img src = { iconURL } /></div>
        <div className="current-weather">{ temp_c }</div>
        </div>
        <div className = "footer">{text}</div>
      </div>
    );
  }
}

export default Weather