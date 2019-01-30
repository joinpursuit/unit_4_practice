import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Form from './Form'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  // let isSearchPath = props.match.path === "/users/search"
  render() {
    let { users } = this.props;
    let allUsers = users.map( (user,i) => {
      return <li key={i}>{user.name}</li>
    })

    return (
      <div>
      <h1>Users</h1>
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.userInput} name="userInput" onChange={this.handleChange}/>
        <button>search</button>
        </form>
        <ul>
          {allUsers}
        </ul>
      </div>
    )
  }
}

export default Users;
