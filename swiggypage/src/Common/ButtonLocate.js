import React from 'react';
import ReactDOM from 'react-dom';


class ButtonLocate extends React.Component {
  render() {
    return(
      <button className={this.props.class}> <i class="fa fa-crosshairs"></i>  {this.props.name}</button>
    );
  }
}



export default ButtonLocate;
