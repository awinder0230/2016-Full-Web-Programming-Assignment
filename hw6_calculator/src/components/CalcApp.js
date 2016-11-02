import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      displayNum: 0,
      appendNum: 0,
      operator: '',
      lastButtonIsOperator: false 
    };

    this.pressButton = this.pressButton.bind(this);
    this.pressOperator = this.pressOperator.bind(this);
    this.computeResult = this.computeResult.bind(this);
  }

  resetState() {
    // TODO
    this.setState({displayNum: 0, appendNum: 0, operator: '', lastButtonIsOperator: false});
  }

  pressButton(num) {
    if (this.state.operator === '=') {
      this.resetState();
      this.setState({displayNum: parseInt(num)});
    } else if(this.state.operator === '' || this.state.lastButtonIsOperator === false) {
      this.setState({displayNum: this.state.displayNum * 10 + parseInt(num)});
    } else if( this.state.operator !== '') {
      this.setState({appendNum: this.state.displayNum, displayNum: parseInt(num)})
    }
    this.setState({lastButtonIsOperator: false});

    console.log('displayNum');
    console.log(this.state.displayNum);
    console.log('appendNum');
    console.log(this.state.appendNum);
    console.log('operator');
    console.log(this.state.operator);
  }

  pressOperator(operator) {
    if(this.state.lastButtonIsOperator === true){
      this.setState({operator: operator});
    } else if(this.state.operator !== '' && this.state.operator !== '=') {
      this.computeResult(operator);
    } else {
      this.setState({operator: operator, appendNum: this.setState.displayNum});
    }
    this.setState({lastButtonIsOperator: true});
    console.log('displayNum');
    console.log(this.state.displayNum);
    console.log('appendNum');
    console.log(this.state.appendNum);
    console.log('operator');
    console.log(this.state.operator);
  }

  computeResult(operator) {
    if(this.state.operator !== '') {
      if(this.state.operator === '+'){
        this.setState({operator: operator, displayNum: this.state.appendNum + this.state.displayNum});
      } else if(this.state.operator === '-') {
        this.setState({operator: operator, displayNum: this.state.appendNum - this.state.displayNum});
      } else if(this.state.operator === 'x') {
        this.setState({operator: operator, displayNum: this.state.appendNum * this.state.displayNum});
      } else if(this.state.operator === '÷') {
        this.setState({operator: operator, displayNum: this.state.appendNum / this.state.displayNum});
      }
      this.setState({appendNum: this.state.displayNum});
    }

    console.log('displayNum');
    console.log(this.state.displayNum);
    console.log('appendNum');
    console.log(this.state.appendNum);
    console.log('operator');
    console.log(this.state.operator);
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.displayNum.toString()}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={this.pressOperator}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.pressButton}>7</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressButton}>8</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressButton}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={this.pressOperator}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.pressButton}>4</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressButton}>5</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressButton}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={this.pressOperator}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.pressButton}>1</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressButton}>2</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressButton}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={this.pressOperator}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={this.pressButton}>0</CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator" onClick={this.computeResult}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
