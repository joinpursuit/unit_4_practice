import React from 'react';
import { Link } from 'react-router-dom';

export const Album = ({title, id}) => {
  return (
    <div id="album">
      <Link to={`/albums/${id}`}>{title}</Link>
    </div>
  )
}
