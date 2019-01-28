import React from 'react'
import UsersItems from './UsersItems'

const Users = (props) => {
  let usersDisplay = props.displayU.map(use => {
    return (
      <UsersItems
        key={use.id}
        name={use.name}
        username={use.username}
        email={use.email}
        phone={use.phone}
        website={use.website}
      />
    )
  })
  return (
    <div>
      Users
      {usersDisplay}
    </div>
  )
}


export default Users
