import React from 'react'
import { Link } from 'react-router-dom'

export const AllAlbums = ({ albums }) => {
  return (
    <div>
      <h2>All Albums</h2>
      {albums.map( album => {
        let albumLink = `/Albums/${album.id}`
        return (
          <div>
            <Link to={albumLink}>{album.title}</Link>
          </div>
        )
      })}
    </div>
  )
}
