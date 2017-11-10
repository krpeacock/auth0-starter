import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    foo: ''
  }

  getFoo = ()=>{
    return new Promise((resolve, reject)=>{
      fetch('/api/foo').then(response=> {
        response.json().then(json=>{
          console.log(json)
          this.setState({foo: json.foo});
        })
      });
    })
  }

  componentDidMount() {
    this.getFoo();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{ this.state.foo }</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
