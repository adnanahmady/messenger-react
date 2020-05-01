import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </React.Fragment>
  );
}

export default App;
