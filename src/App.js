import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Signin from './containers/Signin/Signin';

const app = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/signin' component={Signin} />
            <Route path='/' component={Home} />
          </Switch>
        </Layout>
      </div>
    </Router>
    
  );
}

export default app;
