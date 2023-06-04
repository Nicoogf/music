import React from 'react' ;
import "./albumImage.css"

export default function albumImage( {url} ) {
  return (

    <div>

    <div className='albumImage flex'>

      <img src = {url} alt ="album art" className='albumImage-art'/>

    </div>

    <div className='albumImage-shadow'>

      <img src = {url} alt ="shadow" className='albumImage-shadow'/>

    </div>

    </div>
  )
}
