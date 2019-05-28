import React, { Component } from 'react';
import '../bottom/style.scss'
import forecastday from './forecastday'

export default class BottomSection extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
  render() {
    const { forecastdays }= this.props;
    return (
      <div className="bottom-container">
      <div className="inner-container">
        {forecastdays && forecastdays.map((day,idx)=>{
          return <forecastday day={day.day} key={idx}/>
        })}
      </div>
      </div>
    );
  }
}
