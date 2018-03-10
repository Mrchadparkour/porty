import React, { Component } from 'react';
import { TweenMax } from 'gsap';
import starHandler from '../canvasAnis/starHandler';
import cloudHandler from '../canvasAnis/cloudHandler';
import eyeHandler from '../canvasAnis/eyeHandler';
import mePixels from './assets/eyeLess.png';
import Contact from './Contact';
import Eyes from './Eyes';
import './me.css';

class Me extends Component {
  constructor(){
    super();
    this.state = { panel: 0, canMove: true }
  }
  componentWillMount() {
    window.onload = this.drawAllCanvas;
    window.onresize = this.drawAllCanvas;
    window.addEventListener('wheel', (e) => this.handleScroll(e));
  }

  handleScroll(e) {
    e.preventDefault();
    if (this.state.canMove) {
      let { panel } = this.state;
      this.setState({canMove: false});
      setTimeout(() => this.setState({canMove: true}), 1000);
      if (e.deltaY > 0) {
        if (panel < 5){
          panel++;
          this.move(panel);
        }
      } else {
        if (panel > 0) {
          panel--;
          this.move(panel);
        }
      }

      this.setState({ panel });
    }
  }

  move(panel) {
    // let bodyWidth = document.querySelector('body').getBoundingClientRect().width;
    [ '.MeContainer', '.DWork'].forEach(q => {
      let nodes   = document.querySelectorAll(q);
      nodes.forEach(node => {
        if (typeof node !== 'number') {
          TweenMax.to(node, 1, {left: (panel * -100 ) + parseInt(node.attributes.initial.value, 10) + 'vw'});
        }
      })
    });
  }

  drawAllCanvas() {
    starHandler();
    eyeHandler();
    cloudHandler(1.2, "#BABEBE", "Clouds1");
    cloudHandler(1, null, "Clouds2");
  }

  render() {
    return (
      <div className="MeContainer" initial={0}>
        <Contact />
        <img src={mePixels} alt="Me" className="Me" />
        <Eyes />
      </div>
    );
  }
}

export default Me;
