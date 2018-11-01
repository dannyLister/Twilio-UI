import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CustomerDetailsForm from './components/customerDetailsForm';
import NavBar from './components/navBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="App">
          <Switch>
            <Route path="/customers/:id" component={CustomerDetailsForm} />
            <Route path="/customers" component={CustomerDetailsForm} /> 
            <Redirect path="/" to="/customers" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
