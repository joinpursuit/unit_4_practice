import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <React.Fragment>
    <nav>
      <Link to='/'>Home</Link>
      {' '}
      <Link to='/posts'>Posts</Link>
      {' '}
      <Link to='/albums'>Albums</Link>
      {' '}
      <Link to='/todos'>Todos</Link>
      {' '}
      <Link to='/users'>Users</Link>
      {' '}
    </nav>
  </React.Fragment>
)
