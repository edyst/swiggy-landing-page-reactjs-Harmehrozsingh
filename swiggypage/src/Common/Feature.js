import React from 'react';
import ReactDom from 'react-dom';

class Feature extends React.Component {
    render(){
  return(
    <div class="feature">
    <img src={this.props.url} alt="" />
    <h2>{this.props.heading}</h2>
    <p>{this.props.firstp}
      <br />
      {this.props.secondp}
    </p>
  </div>
  );

    }
}
export default Feature;