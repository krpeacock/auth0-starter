import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getFoo = ()=>{
    let foo = fetch('/api/foo', (response)=>{
     var contentType = response.headers.get("content-type");
       if(contentType && contentType.includes("application/json")) {
        var foo = response; 
        return response.json();
       }
       throw new TypeError("Oops, we haven't got JSON!");
     })
     .then(json=>{

     })
    .catch(err=>{
      console.log('error: ', err)
      this.setState({offline: true});
    })
  }

  render() {
    let foo = this.getFoo();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{foo}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
