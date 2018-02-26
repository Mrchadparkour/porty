import React, { Component } from 'react';

class DisplayWork extends Component {
  showLinks(gitLinks, wLink) {
    const gits = gitLinks.map((link, i) => <a key={i} href={link} target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>);
    return (
      <div className="Links">
        {
          gits.map(i => i)
        }
        <a href={wLink} target="_blank"><i className="fa fa-window-maximize" aria-hidden="true"></i></a>
      </div>
    );
  }
  render() {
    const { image, title, desc, gitLinks, wLink } = this.props;
    return(
      <div style={{backgroundImage:`url(${image})`}} className="Work">
        <div className="Filter">
          <h1 className="Title">{title}</h1>
          <p className="Description">{desc}</p>
          { this.showLinks(gitLinks, wLink) }
        </div>
      </div>
    );
  }
}

export default DisplayWork;
