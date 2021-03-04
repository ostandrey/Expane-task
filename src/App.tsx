import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Clients from './components/Clients';
import Client from './components/Client';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
          <div className="bg-gradientFirstColor bg-gradient-t to-gradient-SecondColor font-monospace">
              <div className="bg-gradient-to-br from-gradientSecondColor">
                  <div className="p-20">
                      <div className="p-10 bg-white rounded-lg shadow-xl ">
                          <h1 className="text-center m-2 text-3xl font-semibold text-gray-600">Expane Clients</h1>
                          <Router>
                              <Switch>
                                  <Route exact path = {'/client'} component={Client}/>
                                  <Route exact path = {'/clients'} component={Clients}/>
                                  <Redirect from='/' to='/clients'/>
                              </Switch>
                          </Router>
                      </div>
                  </div>
              </div>
          </div>
      </QueryClientProvider>
  );
};

export default App;
