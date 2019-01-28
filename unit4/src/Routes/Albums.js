import React from 'react'
import AlbumsItems from './AlbumsItems'

const Albums = (props) => {
  // console.log(props)
  let albumDisplay = props.displayA.map(showing => {
    return (
      <AlbumsItems
      key={showing.id}
      title={showing.title}
      props={showing}
      />
    )
  })
  return (
    <div>
      Albums
      {albumDisplay}

    </div>
  )
}


export default Albums
