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

  renderRoute() {
    if (this.state.avator !== '') {
      return <SingleAnimalProfile
        avator={this.state.avator}
        name={this.state.name}
        age={this.state.age}
        food={this.state.food}
        hobby={this.state.hobby}
        adopt={this.adopt}/>;
    }
    else
      return <NoAnimalExist/>
  }

  adopt() {
    window.alert("I love YOU <3");
  }

  render() {
    return (
      <div>
        {this.renderRoute()}
      </div>
    );
  }
}

const SingleAnimalProfile = props => <div className="container-fluid">
  <div className="row">
    <div className="col-md-6">
      <img src={props.avator}
           alt={props.name}
           width="100%">
      </img>
    </div>
    <div className="col-md-6 infoparent">
      <div className="infochild">
        <h1>Hello, My name is {props.name}</h1>
        <h1>I am {props.age} years old!</h1>
        <h2>My favorite foods are {props.food},</h2>
        <h2>and I love to {props.hobby}</h2>
        <button onClick={props.adopt} type="button" className ="btn btn-lg btn-default">Adopt Me!</button>
      </div>
    </div>
  </div>
</div>

const NoAnimalExist = () => <div className="col-md-12 infoparent">
  <div className="infochild">
    <h1>Sorry >&lt;</h1>
    <h3>please find other animals <a className="info" href="#/animals">here</a>, thank you for your kindness :) </h3>
  </div>
</div>


export default SingleAnimalPage;
