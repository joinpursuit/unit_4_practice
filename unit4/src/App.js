import React, { Component } from 'react';
import Posts from './Routes/Posts.js'
import Albums from './Routes/Albums.js'
import Todos from './Routes/Todos.js'
import Users from './Routes/Users.js'
import Photos from './Routes/Photos.js'
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
      displayPC: [],
      displayPh: []
    }
  }


  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({ displayP: response.data })
      })

    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        this.setState({ displayPh: response.data })
      })

    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        this.setState({ displayPC: response.data })
      })

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({ displayU: response.data })
      })

    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        this.setState({ displayA: response.data })
      })

    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        this.setState({ displayT: response.data })
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
          <Route path='/posts' render={(props) => <Posts {...props} displayP={this.state.displayP} displayPC={this.state.displayPC} />} />
          <Route exact path='/albums' render={(props) => <Albums {...props} displayA={this.state.displayA} displayPh= {this.state.displayPh} />} />
          <Route path='/todos' render={(props) => <Todos {...props} displayT={this.state.displayT} /> }/>
          <Route exact path='/users' render={(props) => <Users {...props} displayU={this.state.displayU}/> }/>
          <Route path='/albums/:id' render={(props) => <Photos {...props} displayPh= {this.state.displayPh} />} />
          <Route path='/users/:id/posts' render={(props) => <Users {...props} displayU={this.state.displayU} displayP={this.state.displayP} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
