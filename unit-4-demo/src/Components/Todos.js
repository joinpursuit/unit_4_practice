import React, { Component } from 'react';
import axios from 'axios';

export default class Todos extends Component {
  constructor(props) {
    super()
    this.state = {
      todoArray: ""
    }
  }

  componentDidMount() {
    //get todos
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
    .then( res => {
      this.setState({
        todoArray: res.data
      })
    })
  }

  populateTodos() {
    //will be invoked only after we got the data due to ternary
    let todoArray = this.state.todoArray
    return todoArray.map(item => {
      return <li key={item.id}>{item.title}</li>
    })
  }

  render() {
    return (
      <div className="todos">
        <h1>Todos</h1>
        <ul>
          {this.state.todoArray ? this.populateTodos() : null}
        </ul>
      </div>
    )
  }
}
