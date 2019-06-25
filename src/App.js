import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28},
      { id: '2', name: 'Manu', age: 29},
      { id: '3', name: 'Stephanie', age: 26}
    ]
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person ={
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = (event, id) => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid white",
      padding: "8px",
      cursor: "pointer",
    }
    let persons = null;

    if (this.state.showPersons) {
      persons  = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)}
              />
          })}
          </div>
      );
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red']
    }
    if(this.state.persons.lenth <= 1){
      classes.push('bold'); // classes = ['red', bold']
    }

    return (
      <div className="App">
        <h1>Hello, I am a react App!</h1>
        <p className={classes.join(' ')} >This is really working</p>
        <button style={style} onClick={this.togglePersonHandler} >Switch Name</button>
        
       {persons}
      </div>
    )
  }
}

export default App;