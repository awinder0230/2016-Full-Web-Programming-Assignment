import React, { Component } from 'react';

import HomePage from './HomePage';
import AnimalsPage from './AnimalsPage';
import SingleAnimalPage from './SingleAnimalPage';

class App extends Component {
  state = {
    route: window.location.hash.substr(1),
    txt: '',
    searchHref: '',
    animals: [],
  };

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1),
      });
    });
  }

  renderRoute() {
    if (this.state.route === '/animals') {
      return <AnimalsPage />;
    }

    if (this.state.route.startsWith('/animals/')) {
      const id = this.state.route.split('/animals/')[1];
      return <SingleAnimalPage id={id} />;
    }

    return <HomePage />;
  }

  update(t) {
    this.setState({ txt: t.target.value, searchHref: '#/animals/'+t.target.value});
  }

  resetInput() {
    this.setState({ txt: '', route: '/animals'});
  }
  render() {
    return (
      <div>
        <div className="navbar navbar-default navbar-static-top">
          <center>
            <div className="navbar-collapse collapse" id="navbar-main">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#/">Home</a></li>
                <li><a href="#/animals">Animals</a></li>
              </ul>
              <form action={this.state.searchHref} className="navbar-form navbar-left pull-right" role="search">
                <div className="form-group">
                  <input value={this.state.txt} onChange={this.update.bind(this)} type="text" className="form-control" placeholder="Search by ID"></input>
                  <button onClick={this.resetInput.bind(this)} type="submit" className="btn btn-default">Submit</button>
                </div>
              </form>
            </div>
          </center>
        </div>
        {this.renderRoute()}
      </div>
    );
  }
}


export default App;