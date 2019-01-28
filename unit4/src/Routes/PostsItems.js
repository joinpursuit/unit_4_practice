import React from 'react'

const PostsItems = (props) => {
  return (
    <div>
    <p>{props.userId}</p>
    <h3>{props.title}</h3>
    <li>{props.body}</li>
    </div>
  )
}


export default PostsItems
