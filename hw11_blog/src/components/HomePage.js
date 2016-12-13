import React, { Component } from 'react';


class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1>My Hello Blog!</h1>
              <h3>Welcome to my first blog ~</h3>
              <p><a className="btn btn btn-info btn-lg" href="#/articles" role="button">Article List</a></p>
              <p><a className="btn btn btn-info btn-lg" href="#/articles/new" role="button">New Article</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
