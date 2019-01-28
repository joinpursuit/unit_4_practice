import React from 'react'

const TodoItems = (props) => {
  return (
    <div>
    <ol>{props.usersId}</ol>
    <ul>title: {props.title}</ul>
    <input type='checkbox' value={props.completed} checked={props.completed}/>
    </div>
  )
}


export default TodoItems
