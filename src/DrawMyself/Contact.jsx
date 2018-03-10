import React, { Component } from 'react';
import Words from './assets/words';
import Clipboard from 'clipboard';

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      clipM: "Click to copy email to clipboard."
    }
  }

  componentDidMount() {
    var clip = new Clipboard('.clip');
    clip.on('error', (e) => console.log(e.text))
    clip.on('success', (e) => console.log(e.text))
  }

  showToolTip() {
    this.setState({clipM: "Copied to clipboard!"});
  }

  render() {
    return(
      <div className="Contact">
        <div>
          <Words />
        </div>
        <hr />
        <div className="Icons">
          <a href="https://github.com/mrchadparkour" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
          <i
            onClick={() => this.showToolTip()}
            data-clipboard-text="cplattkuhn@gmail.com"
            className="clip fa fa-envelope" aria-hidden="true">
              <span className="Tooltext">{this.state.clipM}</span>
          </i>
          <a href="https://www.linkedin.com/in/chadwickplatkuhn/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>
      </div>
    );
  }
}

export default Contact;
