import React, { Component } from 'react';

class AnimalsPage extends Component {
  state = { };

  moreInfo() {
    
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-center">
            <h1>Home for Street Animals <span className="glyphicon glyphicon-home" aria-hidden="true"></span></h1>
          </div>
          <div className="col-md-3">
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Find..."></input>
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center" height="100px">
            <h4>find them a new home...</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="hovereffect">
              <img src="http://www.cutestpaw.com/wp-content/uploads/2014/08/corgi.jpg"
                   alt="Wei"
                   className="img-rounded center-block img-responsive"
                   width="200px">
              </img>
              <div className="overlay">
                <h2>Wei</h2>
                <a className="info" href="#/animals/1">More Wei</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="hovereffect">
              <img src="https://s-media-cache-ak0.pinimg.com/564x/fc/81/bd/fc81bd1388ab65fdff90babe4114ea33.jpg"
                   alt="Polly"
                   className="img-rounded center-block img-responsive"
                   width="200px">
              </img>
              <div className="overlay">
                <h2>Polly</h2>
                <a className="info" href="#/animals/2">More Polly</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="hovereffect">
              <img src="https://s-media-cache-ak0.pinimg.com/736x/7d/20/e7/7d20e7b6624dda9734dfc55a7fd85b73.jpg"
                   alt="DiDi"
                   className="img-rounded center-block img-responsive"
                   width="200px">
              </img>
              <div className="overlay">
                <h2>DiDi Bear</h2>
                <a className="info" href="#/animals/3">More DiDi</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="hovereffect">
              <img src="http://67.media.tumblr.com/56e29581e6bd441aeadc18dc9ca01bcf/tumblr_oavugjk5jt1rd8qzho1_1280.jpg"
                   alt="Fufu"
                   className="img-rounded center-block img-responsive"
                   width="200px">
              </img>
              <div className="overlay">
                <h2>Fufu</h2>
                <a className="info" href="#/animals/4">More Fufu</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default AnimalsPage;