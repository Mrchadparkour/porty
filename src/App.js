import React, { Component } from 'react';
import Me from './DrawMyself/Me';
import DisplayWork from './works/displayWork';
import workContent from './works/workContent';
import Clouds from './DrawMyself/Clouds';
import StarSky from './DrawMyself/starSky';

class App extends Component {
  render() {
    return (
      <div className="SubRoot">
        <StarSky />
        <Clouds startY={1.2} color="#BABEBE" className="Clouds1"/>
        <Clouds startY={1} className="Clouds2"/>
        <Me />
        {
          workContent.map((obj, i) => <DisplayWork key={obj.title} i={i} left={((i + 1) * 100) + 'vw'} {...obj}/>)
        }
          <span className="hint">Try Scrolling</span>
      </div>
    );
  }
}

export default App;
