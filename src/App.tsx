import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Clients from './components/Clients';
import Client from './components/Client'

const App = () => {
  return (
    <div className="container">
        <h1 className="text-center m-4">Expane Clients</h1>
        <Router>
            <Switch>
                <Route exact path = {'/client'} component={Client}/>
                <Route exact path = {'/clients'} component={Clients}/>
                <Redirect from='/' to='/clients'/>
            </Switch>
        </Router>
    </div>
  );
};

export default App;
