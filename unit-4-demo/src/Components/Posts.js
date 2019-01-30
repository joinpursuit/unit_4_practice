import React, { Component } from 'react';
import { Post } from './Post'
import axios from 'axios';

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: "",
      singleData: "",
      comments: "",
      usersArray: []
    }
  }
  componentDidMount() {
    //get all posts anyway (separating calls to be able to route back to /posts after /posts/:id)
    this.getPosts()
    if (this.props.match.params) {
      this.getSinglePost()
    }
    //get comments
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
    .then( res => {
      this.setState({
        comments: res.data
      })
    })
    //get users
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then( res => {
      this.setState({
        usersArray: res.data
      })
    })
  }

  getPosts = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/`)
    .then( res => {
      this.setState({
        data: res.data
      })
    })
  }

  getSinglePost = () => {

    let { id } = this.props.match.params
    id = id ? id : ""
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then( res => {
      this.setState({
        singleData: res.data
      })
    })
  }

  mapPosts = () => {
    let { data, comments, usersArray } = this.state;

    return data.map(post => {
        //filter down user's Fullname before passed into post.
        //better do it for comments as well
        return <Post
                  title={post.title}
                  body={post.body}
                  comments={comments}
                  id={post.id}
                  fullName={ usersArray.find( user =>
                                {
                                  return (post.userId === user.id)
                                }
                              ).name }
                  key={post.id}
                />
              })
      }

  mapSinglePost() {
    console.log("HERE");
    let { singleData, comments, usersArray } = this.state;
     return (<Post
                userId={singleData.userId}
                title={singleData.title}
                body={singleData.body}
                comments={comments}
                id={singleData.id}
                fullName={ usersArray.find( user =>
                              {
                                return (singleData.userId === user.id)
                              }
                            ).name}
                />)
        }

  render() {
    let { singleData, data, comments, usersArray } = this.state;
    let { id } = this.props.match.params

    return (
      <div>
      <h1>POSTS</h1>
      { !data || !singleData ? <h3>LOADING...</h3> : ""}
      { data && comments && usersArray && !id ? this.mapPosts() : null}
      { singleData && comments && usersArray && id ? this.mapSinglePost() : null}
      </div>
    )
  }

}
//problem : my state still has the things so it doesnt map them
export default Posts;
