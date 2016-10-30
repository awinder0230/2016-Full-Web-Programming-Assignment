import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
  	return (
  	  <li className={this.props.name}>
        <div className="view">
          <input className="toggle" onChange={this.props.onCheck} type="checkbox" id={this.props.i}></input>
          <label>{this.props.txt}</label>
          <button className="destroy" id={this.props.i} onClick={this.props.destroy}></button>
        </div>
      </li>
    );
  }
}

module.exports = TodoItem;
