import React from 'react'

class Button extends React.Component{
    constructor(props){
        super(props);  
        this.buttonClick = this.buttonClick.bind(this);     
    }

    buttonClick(){
this.props.onButtonClick(this.props.buttonText);
    }

    render(){
return(<button onClick={this.buttonClick}>{this.props.buttonText}</button>);
    }
}

export default Button;