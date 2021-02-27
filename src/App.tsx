import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Clients from './components/Clients';

const App = () => {
  return (
    <div className="container">
        <h1 className="text-center m-4">Expane Clients</h1>
        <button type="button" className="btn btn-success btn-lg" style={{margin: "10px 0"}}>
            Add client
        </button>
        <Router>
            <Switch>
                <Route exact path = {'/clients'} component={Clients}/>
                <Redirect from='/' to='/clients'/>
            </Switch>

        </Router>
    </div>
  );
};

export default App;
