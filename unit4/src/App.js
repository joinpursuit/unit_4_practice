import React, { Component } from 'react';
import Posts from './Routes/Posts.js'
import Albums from './Routes/Albums.js'
import Todos from './Routes/Todos.js'
import Users from './Routes/Users.js'
import Home from './Home.js'
import axios from 'axios'
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      displayP: [],
      displayA: [],
      displayU: [],
      displayT: [],
      displayPC: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({ displayP: res.data })
      })

    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        this.setState({ displayPC: res.data })
      })

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({ displayU: response.data })
      })

    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(resp => {
        this.setState({ displayA: resp.data })
      })

    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(respo => {
        this.setState({ displayT: respo.data })
      })
  }


  render() {
    return (
      <div className="App">
        <nav className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/posts'>Posts</Link>
          <Link to='/albums'>Albums</Link>
          <Link to='/todos'>Todos</Link>
          <Link to='/users'>Users</Link>
        </nav>


        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/posts' render={(props) => <Posts {...props} displayP={this.state.displayP} displayPC={this.state.displayPC}/>}/>
          <Route path='/albums' render={(props) => <Albums {...props} displayA={this.state.displayA}/> }/>
          <Route path='/todos' render={(props) => <Todos {...props} displayT={this.state.displayT} /> }/>
          <Route path='/users' render={(props) => <Users {...props} displayU={this.state.displayU}/> }/>
        </Switch>
      </div>
    );
  }
}

export default App;
