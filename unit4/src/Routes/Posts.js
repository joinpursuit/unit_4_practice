import React from 'react'
import PostsItems from './PostsItems'

const Posts = (props) => {
  let showing = props.displayP.map(displays => {
    return (
      <PostsItems
      key={displays.id}
      id={displays.userId}
      title={displays.title}
      body={displays.body} />
    )
  })

  // let showComments = props.displayPC.map(displaying => {
  //   return (
  //     <PostsItems
  //     key={displaying.id}
  //     id={displaying.postId}
  //     name={displaying.name}
  //     body={displaying.body}
  //     />
  //   )
  // })
  return (
    <div className='PostsShowing'>
      Posts
      {showing}
    </div>
  )
}




export default Posts
