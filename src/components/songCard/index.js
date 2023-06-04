import React from 'react' ;
import "./songCard.css"

export default function songCard() {
  return (
    <div className="songCard-body">
      <Albumimage url={album.images[0].url} />
      <Albuminfo  album={album}/>
    </div>
  )
}
