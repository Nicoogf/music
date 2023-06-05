import React from 'react'
import "./albumInfo.css"

export default function albumInfo({album} ) {

  const artists = [] ;

  album?.artists?.forEach(element => {
    artists.push(element.name)
  });


  return (

    <div>

    <div className='albumName-container'>

      <p> {album.name+ "-" + artists?.join(",")} </p>

    </div>

    <div className='album-info'>

      <p> {`${album.name} is an ${album?.album_type} by ${artists?.join(",")} with ${album.total_tracks} tracks`} </p>

    </div>

    <div className='album-release'>

      <p> Release Date : ${album?.release_date}</p>

    </div>

    </div>
  )
}
