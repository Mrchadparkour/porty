import React, { Component } from 'react';
import mePixels from './assets/me.png';
import Clouds from './Clouds';
import StarSky from './starSky';

class Me extends Component {
  render() {
    return (
      <div className="MeContainer">
        <h1 className="Title">Chadwick <br/> Platt-Kuhn</h1>
        <StarSky />
        <img src={mePixels} alt="Me" className="Me" />
        <Clouds />
      </div>
    );
  }
}

export default Me;
