import React from 'react';
import './App.css';
import { Title } from './Components/Title';
import { Updated } from './Components/Updated';
import { Forecast } from './Components/Forecast';
import { Current } from './Components/Current';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    // this.getData=this.getData.bind(this);
  }

  componentDidMount() {
    console.log('component has mounted!!')
    // this.getData();
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:8081');
    // request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.onload = function() {
      let response = request.response;
      console.log(response)
      // let parsedData = JSON.parse(response);
      // console.log(parsedData)
         
    }
    request.send();

  }

  getData() {
    let request = new XMLHttpRequest();

    request.open('GET', 'https://api.weatherapi.com/v1/forecast.json?key=196782bbf2cd492385e161918200105&q=London&days=5');
    request.onload = function() {
      let response = request.response;
      let parsedData = JSON.parse(response);
      console.log(parsedData)
      this.setState({
        data: parsedData
      }) 
      console.log(this.state.data.location.name)      
    }.bind(this)
    request.send();
  }

  render() {
    return (
      <p>hello world</p>
    )
      // if (this.state.data.length === 0) {
      //   return (
      //   // Render loading state ...
      //   <p>loading...</p>
      //   )
      // } else {
      //   return (
      //   // Render real UI ...
      //   <div className="app">
      //     <Title text={this.state.data.location.name} />
      //     <Current currentWeather={this.state.data.current} />
      //     <Forecast forecast={this.state.data.forecast.forecastday} />
      //     <Updated text={this.state.data.current.last_updated} />
      //   </div>
      //   )
      //   // console.log(this.state.data.current.last_updated)
      // }
    }
}

export default App;
