import React, { Component } from 'react';

class DogItem extends Component {
  deleteDog(name) {
    this.props.onDelete(name);
  }

  render() {
    return (
      <ul className="Dog">
        <img src={this.props.dog.image} href={this.props.dog.image} role="presentation" width="100" height="100"></img>
        <br></br>
        <strong>{this.props.dog.name}</strong>: {this.props.dog.breed} <a href="#" onClick={this.deleteDog.bind(this, this.props.dog.name)}>X</a> 
        {//QUESTION: Why
        //is the value of the onClick attribute for the anchor tag above '{this.deleteDog.bind(this, this.props.dog.name)}'? Why isn't it just
        //'{this.deleteDog.bind(this)}'?
        }
        <br></br>
      </ul>
    );
  }
}

export default DogItem;