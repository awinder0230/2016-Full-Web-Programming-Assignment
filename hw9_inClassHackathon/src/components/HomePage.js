import React, { Component } from 'react';


class HomePage extends Component {
  render() {
  	return (
      <div className="hovereffect2">
        <img src="http://www.wallpaperup.com/uploads/wallpapers/2014/09/07/438116/big_thumb_7e2318c3a87ec313f659ae613162df61.jpg"
             alt="HomePage"
             className="img-responsive"
             width="100%"
             height="100%">
        </img>
        <div className="overlay">
          <h2>I am Lost...</h2>
          <a className="info" href="#/animals">More Rovers</a>
        </div>
      </div>
  	);
  }
}

export default HomePage;
