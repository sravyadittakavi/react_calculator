import React from 'react';

class Result extends React.Component{
constructor(props){
    super(props);
}
render(){
    return(<div><p className="Result-label">{this.props.result}</p></div>);
}
}

export default Result;
