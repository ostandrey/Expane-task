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
          <div className=" font-monospace ">

                  <div className="p-10 ">
                      <div className="p-10 bg-white rounded-lg shadow-xl h-full">
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
      </QueryClientProvider>
  );
};

export default App;
