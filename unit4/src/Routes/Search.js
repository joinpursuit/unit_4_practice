import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state ={
      usersName: '',
      status: null
    }
  }

  handleChange = (event) => {
    this.setState({
      usersName: event.target.value
    })
  }

//   searchUser = (props) => {
//     if(this.state.usersName === this.props.displayU.name){
//       return (
//         <h3>{this.props.displayU.name}</h3>
//       )
//     }
// }

  handleSubmit = (event) => {
    event.preventDefault()

    if(this.state.usersName) {
      this.setState({
        status: true,
        usersName: "",
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text'
        placeholder="User Name"
        onChange={this.handleChange}
        />
        <input type='submit' value='Search Users' />
      </form>
    )
  }
}

export default Search
