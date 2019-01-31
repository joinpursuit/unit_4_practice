import React from 'react'

const Comments = (props) => {
  let displayComment = props.displayPC.map(res => {
    return (
      <div key={res.id} className='comment'>
        {res.postId === props.postId ? (
          <>
            <p className='email'>{res.email}</p>
            <p className='body'>{res.body}</p>
          </>
        ) : (
          ""
        )}
      </div>
    )
  })
  return (
    <div>
      {displayComment}
    </div>
  )
}

export default Comments
