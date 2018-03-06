import React, { Component } from 'react';

class DisplayWork extends Component {
  showLinks(gitLinks, wLink) {
    const gits = gitLinks.map((link, i) => <a key={i} href={link} target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>);
    return (
      <div className="Links">
        {
          gits.map(i => i)
        }
        <hr />
        <a href={wLink} target="_blank"><i className="fa fa-window-maximize" aria-hidden="true"></i></a>
      </div>
    );
  }
  render() {
    const { image, title, desc, gitLinks, wLink, i } = this.props;
    return(
      <div className="DWork" >
            <h1 className="Title" style={{backgroundImage:`url(${image})`}}>{title}</h1>
            <p className="Description">{desc}</p>
            { this.showLinks(gitLinks, wLink) }
      </div>
    );
  }
}

export default DisplayWork;
