import React from 'react'
import TodoItems from './TodosItems'

const Todos = (props) => {
  let todosDisplay = props.displayT.map(showing => {
    return (
      <div key={showing.id}>
      <TodoItems
        title={showing.title}
        completed={showing.completed}
      />
      </div>
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
