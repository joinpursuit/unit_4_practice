import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home'
import Posts from './Components/Posts'
import Albums from './Components/Albums'
import Todos from './Components/Todos'
import Users from './Components/Users'
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.getUsers()
  }
  getUsers = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then( res => {
      this.setState({
        users: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route exact path='/posts' component={Posts}/>
          <Route path='/posts/:id' component={Posts}/>
          <Route exact path='/albums' component={Albums}/>
          <Route path='/albums/:id' component={Albums}/>
          <Route path='/todos' component={Todos}/>
          <Route exact path='/users' render={(props) => { return <Users {...props} users={this.state.users} />}}/>
          <Route path="/users/search" render={(props) => { return <Users {...props} users={this.state.users} />}}/>
          <Route path='/users/:id/posts' component={Users}/>
        </Switch>
      </div>
    );
  }
}

export default App;

//all components other than App will be stateless functional components
//App will store the API info in state and pass it
// as props to each route using:
// render={ (props) => {...props} albumArr={this.state.albumArr}}
