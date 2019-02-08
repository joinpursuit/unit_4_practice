import React from 'react'

export const SingleAlbum = (props) => {
  // debugger

  const { id } = props.match.params;

  if (props.albums.length && props.photos.length) {
    const findAlbum = props.albums.find (album => album.id === Number(id));
    const findPhotos = props.photos.filter( photos => photos.albumId === Number(id))

    return (
      <div>
        <h2>Album Title: {' '} {findAlbum.title}</h2>
        {findPhotos.map(photo => (
          <img key={photo.id} src={photo.thumbnailUrl} alt='' />
        ))}
      </div>
    )
  } else {
    return (<div><h1>loading...</h1></div>)
  }

}


// {/*<p key={photo.id}>{photo.title}</p> */}
