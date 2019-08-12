import React from 'react';
import logo from './logo.svg';
import './Calculator.css';
import Result from './Result';

class Calculator extends React.Component{
  constructor(props){
    super(props);  
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">        
          Calculator
        </header>
        <div className="Calculator-parent"><Result/></div>        
      </div>
    );
  }
}

export default Calculator;
