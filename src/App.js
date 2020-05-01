import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import Register from './components/Register';

function App() {
  return (
    <React.Fragment>
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
    <div className="App">
      <Switch>
        <Route path="/register" component={Register} />
        <Redirect from="/" exact to="/register" />
      </Switch>
    </div>
    </React.Fragment>
  );
}

export default App;
