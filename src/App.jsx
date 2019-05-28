import React, { Component } from 'react'
import './sass/app.scss'
import TopSection from './components/top/index';
import BottomSection from './components/bottom/index';
import axios from 'axios';



const WEATHER_KEY = "3b4328f86c1644119ee113346192705";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityName : "vizag",
      forcastDays : 5,
      isLoading : true,
    }
  }
  componentDidMount(){
    const { cityName,forcastDays} = this.state;

    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${forcastDays}`;
    axios
    .get(URL).then((res)=>{
     return res.data;
    }).then((data)=>{
      this.setState({temp_c : data.current.temp_c,
          isDay:data.current.is_day,
          text:data.current.condition.text,
          iconURL:data.current.condition.icon})
    })
    .catch((err)=>{
      if(err)
      console.error("cannot fetch Weather from API ",err);
    })
  }
  render() {
    const { cityName, temp_c, isDay,text,iconURL} = this.state;
    
    return <div className = "app-container">
      <div className = "main-container">
      {
      <div className = "top-section">
      <TopSection 
      location = {cityName} 
      temp_c = {temp_c} 
      isDay={isDay} 
      text={text} 
      iconURL={iconURL}/>
      </div>}
      <div className = "bottom-section"><BottomSection />
      </div>
      </div>
    </div>
  }
}

export default App
