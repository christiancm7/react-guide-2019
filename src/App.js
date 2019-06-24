import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, I am a react App!</h1>
        <Person name="Cj" />
        <Person name="Brad" />
        <Person name="Tom" />
      </div>
    )
  }
}
