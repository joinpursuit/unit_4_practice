import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './CSS/App.css';

import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import Posts from './components/Posts'
import Albums from './components/albums/Albums'
import Todos from './components/Todos'
import Users from './components/users/Users'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/posts' component={Posts}/>
          <Route path='/albums' component={Albums}/>
          <Route path='/todos' component={Todos}/>
          <Route path='/users' component={Users}/>
        </Switch>
      </div>
    );
  }
}

export default App;
