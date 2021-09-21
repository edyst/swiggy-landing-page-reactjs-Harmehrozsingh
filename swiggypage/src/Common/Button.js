import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return(
    <button className={this.props.class}>{this.props.name}</button> 
    );
  }
}


export default Button;
