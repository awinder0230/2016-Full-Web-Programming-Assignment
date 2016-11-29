import React, { Component, PropTypes } from 'react';

import 'babel-polyfill';

import fetch from 'isomorphic-fetch';

class SingleAnimalPage extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = { avator: '', name: '', age: 0, food: '', hobby: '' };
    this.adopt = this.adopt.bind(this);
  }

  componentDidMount() {
    fetch(`/api/animals/${this.props.id}`)
    .then(res => res.json())
    .then(json => this.setState({ avator: json.avatar, name: json.name, age: json.age, food:json.food, hobby: json.hobby}));
  }

  adopt() {
    window.alert("I love YOU!!");
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img src={this.state.avator}
                   alt={this.state.name}
                   width="100%">
              </img>
            </div>
            <div className="col-md-6 infoparent">
              <div className="infochild">
                <h1>Hello, My name is {this.state.name}</h1>
                <h1>I am {this.state.age} years old!</h1>
                <h2>My favorite foods are {this.state.food},</h2>
                <h2>and I love to {this.state.hobby}</h2>
                <button onClick={this.adopt} type="button" className ="btn btn-lg btn-default">Adopt Me!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleAnimalPage;
