import React, { Component } from 'react';
import mePixels from './assets/me.png';
import Clouds from './Clouds';
import StarSky from './starSky';
import Eyes from './Eyes';

class Me extends Component {
  constructor(props){
    super(props);
    this.state ={
      height: 0,
      width: 0
    }

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
  }

  handleResize() {
    let { height, width } = document.querySelector('body').getBoundingClientRect();
    this.setState({ height, width });
  }

  render() {
    return (
      <div className="MeContainer">
        <StarSky {...this.state} />
        <img src={mePixels} alt="Me" className="Me" />
        <Clouds {...this.state} />
        <Eyes />
      </div>
    );
  }
}

export default Me;
