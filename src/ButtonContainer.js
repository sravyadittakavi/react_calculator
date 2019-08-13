import React from 'react'
import Button from './Button'

class ButtonContainer extends React.Component{
    constructor(props){
        super(props);  
        this.calcButtonClick = this.calcButtonClick.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    calculate(){
        try{
            this.props.callbackFromParent((eval(this.props.result) || "" ) + "")
        }
        catch(e){
            this.props.callbackFromParent("error");
        }
    }

    calcButtonClick(text){
        if(text == "="){
            this.calculate()
        }
        else{
            this.props.callbackFromParent(this.props.result+text);
        }
    }
   
    render(){
        return(
<div>
    <div>
<Button buttonText="7" onButtonClick={this.calcButtonClick}></Button>
<Button buttonText="8" onButtonClick={this.calcButtonClick}></Button>
<Button buttonText="9" onButtonClick={this.calcButtonClick}></Button>
<Button buttonText="/" onButtonClick={this.calcButtonClick}></Button>
</div>
<div>
<Button buttonText="4" onButtonClick={this.calcButtonClick}></Button>
<Button buttonText="5" onButtonClick={this.calcButtonClick}></Button>
<Button buttonText="6" onButtonClick={this.calcButtonClick}></Button>
<Button buttonText="x" onButtonClick={this.calcButtonClick}></Button>
</div>
<div>
<Button buttonText="1" onButtonClick={this.calcButtonClick}></Button>
<Button buttonText="2" onButtonClick={this.calcButtonClick}></Button>
<Button buttonText="3" onButtonClick={this.calcButtonClick}></Button>
<Button buttonText="-" onButtonClick={this.calcButtonClick}></Button>
</div>
<div>
<Button buttonText="0" onButtonClick={this.calcButtonClick}></Button>
<Button buttonText="." onButtonClick={this.calcButtonClick}></Button>
<Button buttonText="=" onButtonClick={this.calcButtonClick}></Button>
<Button buttonText="+" onButtonClick={this.calcButtonClick}></Button>
</div>
</div>);
    }
}

export default ButtonContainer;