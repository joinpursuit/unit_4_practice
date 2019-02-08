import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UsersItems extends Component {
  state = {
    input: ''
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
        user.name.toLowerase().indexOf(this.state.input.toLowerCase()) === 0);
    })
    this.props.history.push(`/users/${user.id}/posts`)
  }

  render() {
    return (
      <div key={this.props.id} className='users'>
      <h3>name: <Link to={`/posts/${this.props.id}`}>{this.props.name}</Link></h3>
      <li>username: {this.props.username}</li>
      <li>email: {this.props.email}</li>
      <li>phone: {this.props.phone}</li>
      <li>website: {this.props.website}</li>
      </div>
    )
  }
}

export default UsersItems
