import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

export default class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'switched1', age: 28},
      { name: 'switched2', age: 29},
      { name: 'switched3', age: 26}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, I am a react App!</h1>
        <p>This is really woring</p>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}
