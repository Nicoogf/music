import React from 'react' ;
import "./songCard.css" ;
import Albumimage from "./albumImage" ;
import Albuminfo from "./albumInfo"

export default function songCard( {album}) {
  return (
    <div className="songCard-body flex">
      <Albumimage url={album?.images[0]?.url} />
      <Albuminfo  album={album}/>
    </div>
  )
}
