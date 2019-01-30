import React from 'react';

export const Post = ({ title, body, comments, fullName, id }) => {
  return (
    <div id="post">
      <h4><span>{fullName}</span> {title}</h4>
      <p>{body}</p>
      <ul>{comments.filter(comment => {
        return (comment.postId === id)
      }).map(comment => {
        return <li key={comment.id}>{comment.body}</li>
      })}</ul>

    </div>
  )
}
