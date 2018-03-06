import React, { Component } from 'react';
import Me from './DrawMyself/Me';
import DisplayWork from './displayWork';
import workContent from './workContent';

class App extends Component {
  render() {
    return (
      <div className="SubRoot">
        <Me />
        {
          workContent.map((obj, i) => <DisplayWork key={obj.title} i={i} {...obj}/>)
        }
      </div>
    );
  }
}

export default App;
