import React, { Component } from 'react';
 import Library from './library';
import Schedule from './schedule';
 class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Course Scheduler</h1>
        <Library/>
        <Schedule/>
      </div>
    );
  }
 }
 
 export default Home;
