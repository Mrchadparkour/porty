import React, { Component } from 'react';
import { cloudHandler, starhandler, eyeHandler } from './canvas';
import mePixels from './assets/eyeLess.png';
import Clouds from './Clouds';
import StarSky from './starSky';
import Contact from './Contact';
import Eyes from './Eyes';
import './me.css';

class Me extends Component {
  componentDidMount() {
    window.onload = () => {
      starhandler();
      eyeHandler();
      cloudHandler(1.2, "#BABEBE", "Clouds1");
      cloudHandler(1, null, "Clouds2");
    }
    window.onresize = () => {
      starhandler();
      eyeHandler();
      cloudHandler(1.2, "#BABEBE", "Clouds1");
      cloudHandler(1, null, "Clouds2");
    }
  }

  render() {
    return (
      <div className="MeContainer">
        <Contact />
        <StarSky {...this.state} />
        <Clouds startY={1.2} color="#BABEBE" className="Clouds1"/>
        <img src={mePixels} alt="Me" className="Me" />
        <Clouds startY={1} className="Clouds2"/>
        <Eyes />
      </div>
    );
  }
}

export default Me;
