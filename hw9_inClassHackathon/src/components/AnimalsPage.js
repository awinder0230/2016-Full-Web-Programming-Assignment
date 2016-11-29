import React, { Component } from 'react';

class AnimalsPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
    };
  }

  componentDidMount() {
    fetch(`/api/animals`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          animals: json,
        });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Home for Street Animals <span className="glyphicon glyphicon-home" aria-hidden="true"></span></h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center" height="100px">
            <h4>find them a new home...</h4>
          </div>
        </div>
        <div className="row">
          {this.state.animals.map((animal, index) => <AnimalSquare key={index + 1}
                name={animal.name}
                href={"#/animals/"+(index+1).toString()}
                avatar={animal.avatar}/>)}
        </div>
      </div>
    );
  }
}

const AnimalSquare = props => <div className="col-md-3">
  <div className="hovereffect">
    <img src={props.avatar}
         alt={props.name}
         className="img-rounded center-block img-responsive"
         width="200px">
    </img>
    <div className="overlay">
      <h2>{props.name}</h2>
      <a className="info" href={props.href}>More {props.name}</a>
    </div>
  </div>
</div>

export default AnimalsPage;