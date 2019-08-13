import React from 'react';
import logo from './logo.svg';
import './Calculator.css';
import Result from './Result';
import ButtonContainer from './ButtonContainer';

class Calculator extends React.Component{
  constructor(props){
    super(props);  
    this.state={
      result:""
    }
    this.setResult = this.setResult.bind(this);
  }

  setResult(resultFromButtonContainer){
this.setState({
  result:resultFromButtonContainer
});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">        
          Calculator
        </header>
        <div className="Calculator-parent">
        <Result result={this.state.result}/>
        <ButtonContainer result={this.state.result} callbackFromParent={this.setResult}/>
        </div>        
      </div>
    );
  }
}

export default Calculator;
