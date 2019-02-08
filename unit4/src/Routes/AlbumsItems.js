import React from 'react'
import { Link } from 'react-router-dom'




const AlbumsItems = ( props ) => {
  return (
    <div key={props.albumId} >
    <li><Link key={props.id} to={`/albums/${props.props.id}`}>{props.title}</Link></li>
    <Link to={`${props.userId}`}></Link>
    </div>
  )
}


export default AlbumsItems
