import React from 'react'


const TodoItems = (props) => {

  return (
    <div className='todos'>
    <ol>{props.usersId}</ol>
    <ul>title: {props.title}</ul>
    <input key={props.id} type='checkbox' value={props.completed} checked={props.completed}/>
    </div>
  )
}


export default TodoItems
