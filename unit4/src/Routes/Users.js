import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Users extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }

  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let user = this.props.displayU.find(user => {
      return (
        user.name.toLowerCase().indexOf(this.state.input.toLowerCase()) === 0);
    })
    this.props.history.push(`/users/${user.id}/posts`)
  }

  render() {
    let usersDisplay = this.props.displayU.map(use => {
      if(use.name.toLowerCase().indexOf(this.state.input.toLowerCase()) === 0) {
        return (
      <div key={use.id} className='users'>
      <h3>name: <Link to={`/users/${use.id}/posts/`}>{use.name}</Link></h3>
      <li>username: {use.username}</li>
      <li>email: {use.email}</li>
      <li>phone: {use.phone}</li>
      <li>website: {use.website}</li>
      </div>
    )
  } else {
    return null
  }
  })

  return (
    <div>
      <form onSubmit={this.handleSubmit}>
      <input type='text' value={this.state.input} onChange={this.handleChange} placeholder='search user' />
      <input type='submit' value='submit' />
      </form>
      {usersDisplay}
    </div>
  )
  }
}


export default Users
