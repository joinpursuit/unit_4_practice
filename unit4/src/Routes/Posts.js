import React from 'react'
import PostsItems from './PostsItems'
import { Link } from 'react-router-dom'


const Posts = (props) => {
  let showing = props.displayP.map(displays => {
    return (
      <div key={displays.id} className='posts'>
      <PostsItems
      id={displays.userId}
      name={props.name}
      title={displays.title}
      body={displays.body}
      displayPC={props.displayPC}
      postId={props.id}
      />
      </div>
    )
  })

  return (
    <div className='PostsShowing'>
      Posts
      <Link to='/users'>Back</Link>
      {showing}
    </div>
  )
}




export default Posts
