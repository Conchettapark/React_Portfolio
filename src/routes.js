
import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import App from './components/App'
import Home from './components/Home'
import Code from './components/Code'
import Contact from './components/Contact'

export default (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/code' component={Code} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>

);