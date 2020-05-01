import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import Register from './components/Register';
import VerifyUser from './components/VerifyUser';
import NotFound from './components/NotFound';

function App() {
  return (
    <React.Fragment>
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
    <div className="App">
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/verify" component={VerifyUser} /> 
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/register" />
        <Redirect to='/not-found' />
      </Switch>
    </div>
    </React.Fragment>
  );
}

export default App;
