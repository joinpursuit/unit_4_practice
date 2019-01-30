import React, { Component } from "react"

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props);
    this.props.search(this.state.userInput)
  }

  render() {
      return (
        <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.userInput} name="userInput" onChange={this.handleChange}/>
          <button>search</button>
        </form>
        </React.Fragment>
      )
    }
  }
