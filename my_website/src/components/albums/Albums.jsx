import React from 'react'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'

import { AllAlbums } from './AllAlbums'
import { SingleAlbum } from './SingleAlbum'

export default class Albums extends React.Component {
  constructor() {
    super();

    this.state = {
      allAlbums: [],
      allPhotosOfSingleAlbum: [],
    }
  }

  getAlbums = () => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(res => {
      this.setState({ allAlbums: res.data })
    })
  }

  getPhotos = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(res => {
      this.setState({ allPhotosOfSingleAlbum: res.data})
    })
  }

  componentDidMount(){
    this.getAlbums();
    this.getPhotos();
  }

  render() {
    return(
      <div>
        <h1>Albums</h1>
        <Switch>
          <Route exact path='/albums' render={ () => <AllAlbums albums={this.state.allAlbums} /> } />
          <Route path='/albums/:id' render={ (props) => <SingleAlbum {...props} albums={this.state.allAlbums} photos={this.state.allPhotosOfSingleAlbum} /> } />
        </Switch>
      </div>
    )
  }
}
