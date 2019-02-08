import React from 'react'
import axios from 'axios'

export default class Posts extends React.Component {
  constructor() {
    super();

    this.state = {
      allPosts: [],
      allComments: [],
    }
  }

  getPosts = () => {
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      // debugger
      this.setState({
        allPosts: res.data
      })
    })
  }

  getComments = () => {
    axios
    .get('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
      // debugger
      this.setState({
        allComments: res.data
      })
    })
  }

  componentDidMount() {
    this.getPosts();
    this.getComments();
  }

  render() {
    // console.log(this.props);
    const { allPosts, allComments } = this.state;
    return(
      <div>
        <h1>Posts</h1>
        {allPosts.map (post => {
          let comments = allComments.filter (comment => {
            return comment.postId === post.id
          })
          return(
            <div key={post.id}>
              <h3>The Post</h3>
              <div>{post.body}</div>

              <h4>Comments for this Post</h4>
              {comments.map (comment => (
                <p key={comment.id}> { comment.body } </p>
              ))}
            </div>
          )
        })}
      </div>
    )
  }


}
