import React from 'react'
import { Link } from 'react-router-dom'


const AlbumsItems = ({ props }) => {
  console.log(props)
  return (
    <div>
    <li><Link to={`/albums/${props.id}`}>{props.title}</Link></li>
    </div>
  )
}


export default AlbumsItems
