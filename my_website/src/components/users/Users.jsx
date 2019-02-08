import React from 'react'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'

import AllUsers from './AllUsers'
import { UserPost } from './UserPost'

export default class Users extends React.Component {
  state = {
    allUsers: [],
    allPosts: [],
  }

  getAllUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      this.setState({ allUsers: res.data })
    })
  }

  getAllPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      this.setState({ allPosts: res.data })
    })
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
      </div>
    )
  }
}
