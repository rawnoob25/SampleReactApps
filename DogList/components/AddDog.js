import React, { Component } from 'react';

class AddDog extends Component {
  constructor() {
    super();
    this.state = {
      newDog:{}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e) {
    if(this.refs.name.value === '') { //QUESTION: Where does 'this.refs.name.value' come from?
      alert('Title is required');
    } else if (this.refs.image.value === '') { //QUESTION: where does 'this.refs.image.value' come from?
        alert('Image link is required');
    } else if (this.refs.breed.value === '') { //QUESTION: where does 'this.refs.breed.value' come from?
          alert('Breed is required');
    } else {
      this.setState({newDog:{
        name: this.refs.name.value,
        breed: this.refs.breed.value,
        image: this.refs.image.value
      }}, function() {
        //console.log(this.state);
        this.props.addDog(this.state.newDog);
      }); //2nd parameter to this.setState() is a callback which is guaranteed to fire after the update has been applied.
    }
    e.preventDefault(); //QUESTION: what does e.preventDefault() do?
  }

  render() {
    return (
      <div>
        <h3 id="addDog">Add Dog</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Name</label><br />
            <input id="dogName" type="text" ref="name" />
          </div>
          <div>
            <label>Image</label><br />
            <input id="imageURL" type="text" ref="image" />
          </div>
          <div>
            <label>Breed</label><br />
            <input id="dogBreed" type="text" ref="breed" />
          </div>
          <br />
          <input id="submitButton" type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

export default AddDog;