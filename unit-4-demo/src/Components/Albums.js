import React, { Component } from 'react';
import { Album } from './Album'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Albums extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      photos: [],
      albumPhotos: []
    }
  }
  componentDidMount() {
    let { url } = this.props.match
    //get albums
    axios.get(`https://jsonplaceholder.typicode.com${url}`)
    .then( res => {
      this.setState({
        data: res.data
      })
    })
    //get photos
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
    .then( res => {
      this.setState({
        photos: res.data
      })
    })
  }

  mapAlbums = () => {
    let { data } = this.state;
    if (data.length) {
      return (data.map(post => {
        return <Album
                  title={post.title}
                  id={post.id}
                  key={post.id}
                />
              })
            )
      }
    }

  populatePhotos = () => {
    let { photos } = this.state;
    let { params } = this.props.match;
    let albumId = parseInt(params.id)
    //get all photos per album
    let albumPhotos = photos.filter(photo => {
      return photo.albumId === albumId
    })
    //do not set the state here because it will endlessly rerender it.
    return albumPhotos.map(photo => {
      return <img
              alt={photo.id}
              key={photo.id}
              src={photo.thumbnailUrl}
               />
    })
  }

  render() {
    let { data, photos } = this.state;
    let { id } = this.props.match.params
    return (
      <div>
      <h1>Albums</h1>
      { data && photos && !id ? this.mapAlbums() : null}
      { id
        ? <div className="photos">
            <Link to="/albums"><img id="back" src="https://image.flaticon.com/icons/svg/189/189252.svg" alt="back"/></Link>
            <div>{this.populatePhotos()}</div>
          </div>
        : null}
      </div>
    )
  }

}

export default Albums;
