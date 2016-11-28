import React, { Component } from 'react';

import HomePage from './HomePage';
import AnimalsPage from './AnimalsPage';
import SingleAnimalPage from './SingleAnimalPage';

class App extends Component {
  state = {
    route: window.location.hash.substr(1),
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

  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/animals">animals</a></li>
        </ul>
        {this.renderRoute()}
      </div>
    );
  }
}


export default App;