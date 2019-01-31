import React from 'react'
import { Link } from 'react-router-dom'

const Photos = (props) => {
  let displayPhoto = props.displayPh.map(photo => {
    return (
      <>
      {parseInt(props.match.params.id) === photo.albumId ? (
        <div key="" className='photos'>
        <p>Title: {photo.title}</p>
        <img key={photo.albumId} src={photo.thumbnailUrl} alt=''/>
        </div> ) : (
          ""
      )}
      </>
    )
  })
  return (
    <div key="">
    <Link to='/albums'>Back</Link>
    {displayPhoto}
    </div>
  )
}


export default Photos
