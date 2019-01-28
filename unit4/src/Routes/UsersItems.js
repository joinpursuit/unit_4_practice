import React from 'react'

const UsersItems = (props) => {
  return (
    <div>
    <h3>name: {props.name}</h3>
    <li>username: {props.username}</li>
    <li>email: {props.email}</li>
    <li>phone: {props.phone}</li>
    <li>website: {props.website}</li>
    </div>
  )
}

export default UsersItems
