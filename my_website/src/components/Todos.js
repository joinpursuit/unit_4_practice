import React from 'react'
import axios from 'axios'

export default class Todos extends React.Component {
  state = {
    todos: []
  }

  getTodos = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      this.setState({todos: res.data})
    })
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    return(
      <div>
        <h1>Todos</h1>
        {this.state.todos.map(todo => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>Completed: {`${todo.completed}`}</p>
          </div>
        ))}
      </div>
    )
  }
}
