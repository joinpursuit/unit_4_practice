import React from 'react'
import Comments from './Comments.js'
import UsersItems from './UsersItems.js'

const PostsItems = (props) => {
  return (
    <div>
    <UsersItems
    name={props.name}
    />
    <h2>{props.title}</h2>
    <p>{props.body}</p>
    <Comments
    key={props.id}
    displayPC={props.displayPC}
    postId={props.id}
    />
    </div>
  )
}


export default PostsItems
