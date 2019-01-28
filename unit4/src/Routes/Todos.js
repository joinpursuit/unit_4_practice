import React from 'react'
import TodoItems from './TodosItems'

const Todos = (props) => {
  let todosDisplay = props.displayT.map(showing => {
    return (
      <TodoItems
        key={showing.id}
        title={showing.title}
        completed={showing.completed}
      />
    )
  })
  return (
    <div>
      Todos
      {todosDisplay}
    </div>
  )
}

export default Todos
