import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:"khikhlk", name: 'Max', age: 28 },
      { id:"bj9ijlbj", name: 'Manu', age: 29 },
      { id:"jhgkgk", name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //new array with objects of old array -> copy of array
    const persons = [...this.state.persons];
    //remove one elem from array
    persons.splice(persons, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    //find person being updated
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "10px solid blue",
      padding: "8px",
      cursor: 'ponter'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              //key would usually be an id when you fetch data
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
      <h1> Hi, I'm a react App </h1>
      <p> This is really working! </p>

      <button
      style={style}
      onClick={this.togglePersonHandler}>Toggle Persons</button>

      {persons}

      </div>
    );
  }
}

export default App;
