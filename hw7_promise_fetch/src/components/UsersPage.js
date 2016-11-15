import React, { Component } from 'react';

import 'babel-polyfill';

import fetch from 'isomorphic-fetch';

class UsersPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // fetch `/api/users` to get users and then set state...
    fetch('/api/users')
    .then(res => res.json())
    .then(json => this.setState({ users: json }));
  }

  render() {
    return (
      <div>Users
        {this.state.users.map((user, index) => <li key={index + 1}><a href={`#/users/${index + 1}`}>
          User { index + 1 }: { user.name }
        </a></li>)}
      </div>
    );
  }
}

export default UsersPage;
